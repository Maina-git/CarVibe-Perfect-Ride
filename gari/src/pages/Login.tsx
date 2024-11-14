import React, { useState } from 'react';
import { auth } from '../config/Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FaCarAlt, FaEye, FaEyeSlash } from 'react-icons/fa';

interface LoginProps {
  setIsAuth: (isAuth: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsAuth }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirm, setConfirm] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirm) {
      setError(true);
      return;
    }

    if (!email || !password || !confirm) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setIsAuth(true);
      setError(false); 
    } catch (err) {
      console.error(err);
      setError(true);
      setIsAuth(false);
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className="w-full flex flex-col justify-center items-center h-screen bg-blue-950 px-4">
      <span className="text-white text-3xl md:text-4xl lg:text-5xl"><FaCarAlt /></span>
      <p className="text-xs md:text-sm lg:text-base text-white my-2">Car Vibe.</p>
      <div className="w-full max-w-xs md:max-w-md lg:max-w-lg shadow-lg rounded-[10px] text-center bg-white p-6">
        <h1 className="font-bold text-blue-950 text-2xl md:text-3xl lg:text-4xl py-3">Sign In</h1>
        <form onSubmit={handleLogin}>
          {error && <span className="text-red-500 text-xs">Something went wrong</span>}
          
          <div className="flex flex-col w-full my-5 text-left">
            <label htmlFor="email" className="text-[14px] md:text-[15px] lg:text-[16px] my-2 text-blue-950">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-blue-950 p-2 outline-none rounded bg-white"/>
          </div>

          <div className="flex flex-col w-full my-5 text-left">
            <label htmlFor="password" className="text-[14px] md:text-[15px] lg:text-[16px] my-2 text-blue-950">Password</label>
            <div className="flex justify-between border border-blue-950 p-2 rounded bg-white">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent w-full mx-3 outline-none"
              />
              <span onClick={togglePasswordVisibility} className="cursor-pointer">
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>

          <div className="flex flex-col w-full my-5 text-left">
            <label htmlFor="confirm" className="text-[14px] md:text-[15px] lg:text-[16px] my-2 text-blue-950">Confirm Password</label>
            <div className="flex justify-between border border-blue-950 p-2 rounded bg-white">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirm"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="bg-transparent w-full mx-3 outline-none"
              />
              <span onClick={toggleConfirmPasswordVisibility} className="cursor-pointer">
                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>
          <button type="submit" className="my-10 bg-blue-950 text-white py-1 px-5 rounded w-full md:w-auto">Sign In</button>
        </form>
      </div>
    </div>
  );
}
export default Login;





