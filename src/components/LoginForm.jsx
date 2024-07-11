import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import image from "../assets/Right-image.svg";
import logo from "../assets/_Placeholder Logo.svg";
import googleIcon from "../assets/google-con.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FullPageLoader from "./FullPageLoader";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';


const LoginForm = () => {
  const { login, user, loading } = useAuth();
  const navigate = useNavigate();
  const isLogin = localStorage.getItem('isLogin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onFinish = async (e) => {
    e.preventDefault();
    const response = await login(email, password);
    if (response?.status === 200) {
      toast.success('login successful')
      navigate('/');
    } else {
      toast.error('Invalid credentials');
    }
  };
  useEffect(() => {
    if (user && isLogin) {
      navigate('/');
    }
  }, [user, isLogin, navigate]);

  if (loading) return <FullPageLoader />;

  return (
    <div className="flex w-full lg:justify-between sm:justify-center md:justify-center m-0 max-h-screen">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="px-14 pt-8 lg:w-2/5 md:w-3/5 sm:w-3/5">
        <img src={logo} className="w-22" alt="Logo" />
        <div className="flex flex-col gap-2 mt-8">
          <span className="text-heading-bold text-dark-1">
            Welcome <br /> back
          </span>
          <span className="text-dark-2 py-1">
            You need to be signed in to access the project dashboard.
          </span>
        </div>
        <form onSubmit={onFinish} className="flex flex-col mt-2 gap-2 w-full">
          <div className="flex flex-col gap-2 w-full">
            <label className="text-base-medium text-dark-1">
              Email or Username
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-[16px] bg-white w-full border p-2 rounded-md"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="flex flex-col gap-2 w-full relative">
            <label className="text-base-medium text-dark-1">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-[16px] bg-white w-full p-2 rounded-md border"
              placeholder="Enter password"
              required
            />
            <div
              className="absolute bottom-3 right-3 text-black flex items-center cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeInvisibleOutlined size={20} /> : <EyeTwoTone size={20} />}
            </div>
          </div>
          {/* {error && <p className="text-red-500 text-center">{error}</p>} */}
          <div className="flex max-sm:flex-col max-sm:gap-2 max-sm:items-center justify-between my-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Keep me signed in
            </label>
            <span className="text-base-medium underline cursor-pointer">
              Forgot password?
            </span>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <button
              className="login-button-style w-full py-2 text-dark-green text-base-medium"
              type="submit"
            >
              Sign in
            </button>
            <span className="py-2 w-full gap-2 flex justify-center border text-dark-2 text-base-medium cursor-pointer">
              <img src={googleIcon} alt="Google Icon" /> Sign in with Google
            </span>
          </div>
          <div className="flex justify-center mt-1">
            <span className="py-2 text-dark-2 text-base-medium">
              Haven’t joined yet?{' '}
              <span
                className="underline text-dark-1 cursor-pointer"
              >
                Sign up
              </span>
            </span>
          </div>
        </form>
      </div>
      <div className="hidden lg:flex w-3/5">
        <img src={image} className="w-full h-full object-cover" alt="Side" />
      </div>
    </div>
  );
};

export default LoginForm;
