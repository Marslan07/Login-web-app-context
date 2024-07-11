import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ element}) => {
  const { user } = useAuth();
  const isLogin= localStorage.getItem('isLogin');


  return isLogin && user ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
