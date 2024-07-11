import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(false);

  const login = async (username, password) => {
    try{     
      setLoading(true)
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username,
        password,
      });
      console.log(response)
      if (response?.status === 200) {
        setUser(response.data);
        localStorage.setItem('isLogin', true);
        localStorage.setItem('token', response?.data?.token)
      }
      setLoading(false)
      return response
    }
    catch(error){
      console.log(error)
      setLoading(false)
      // return error;
    }

  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('isLogin');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout,loading}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
