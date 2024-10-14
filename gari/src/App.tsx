import React from 'react'
import Login from './pages/Login'
import { useState } from 'react'
import Home from './pages/Home'
import {BrowserRouter as Router ,Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import SignOut from './pages/SignOut'

const App:React.FC = () => {


const [isAuth, setIsAuth]=useState<any>(localStorage.getItem("isAuth", true));

if(!isAuth){
  return (
    <div>
      <Login setIsAuth={setIsAuth}/>
    </div>
  )
}return (
  <>
<Router>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/gallery" element={<Gallery/>}/>
    <Route  path="/contact" element={<Contact/>} />
    <Route  path="/signOut" element={ <SignOut setIsAuth={setIsAuth}/>}/>
  </Routes>
  <Footer/>
</Router>
</>
)
}
export default App
