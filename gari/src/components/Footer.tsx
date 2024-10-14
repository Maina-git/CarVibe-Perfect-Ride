import React from 'react'

const Footer:React.FC = () => {
  return (
    <div className="w-full bg-black h-[200px] flex flex-col items-center justify-center">
      <h1 className="text-white text-xl font-bold">Car Vibe.</h1>
      <span className="text-white text-[10px] my-5">&copy;copyright2024</span>
    </div>
  )
}

export default Footer
