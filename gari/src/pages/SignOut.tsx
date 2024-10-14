import React from 'react'
import { auth } from '../config/Firebase';
import { signOut } from 'firebase/auth';

interface LogOutProps {
  setIsAuth: (isAuth: boolean) => void;
}


const SignOut:React.FC <LogOutProps> = ({setIsAuth}) => {

const Logout=async()=>{
  await signOut(auth);
  localStorage.clear();
  setIsAuth(false);
}
 return (
    <div className="h-screen  w-full  bg-gray-200 flex flex-col  justify-center items-center">
        <h1 className="text-blue-950 text-5xl font-bold border-[5px] p-3 border-blue-950">Car Vibe.</h1>
        <h2 className="text-blue=950 text-3xl my-10">You are  signed in as {auth.currentUser?.email}</h2>
        <p className="text-xl text-gray-500 my-5">Are you sure you want to sign Out</p>
        <button onClick={Logout} className="text-white px-5 py-2 text-2xl rounded-[20px] bg-blue-950">Sign Out</button>
    </div>
  )
}
export default SignOut;
