import React from 'react';
import { auth } from '../config/Firebase';
import { signOut } from 'firebase/auth';

interface LogOutProps {
  setIsAuth: (isAuth: boolean) => void;
}

const SignOut: React.FC<LogOutProps> = ({ setIsAuth }) => {
  const Logout = async () => {
    await signOut(auth);
    localStorage.clear();
    setIsAuth(false);
  };

  return (
    <div className="h-screen w-full bg-gray-200 flex flex-col justify-center items-center px-5">
      

      <h1 className="text-blue-950 text-4xl md:text-5xl font-bold border-[5px] p-3 border-blue-950 mt-10 md:mt-0">
        Car Vibe.
      </h1>
      
      <h2 className="text-blue-950 text-xl md:text-3xl my-5 md:my-10 text-center">
        You are signed in as {auth.currentUser?.email}
      </h2>

      <p className="text-lg md:text-xl text-gray-500 my-5 text-center">
        Are you sure you want to sign out?
      </p>

      <button
        onClick={Logout}
        className="text-white px-5 py-3 md:px-7 md:py-4 text-xl md:text-2xl rounded-full bg-blue-950 hover:bg-blue-800 transition duration-300"
      >
        Sign Out
      </button>
    </div>
  );
};

export default SignOut;
