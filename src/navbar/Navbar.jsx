import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Home';
import Private from './private';
import Navlink from './Navlink';
import Signup from './Signup';
import Login from './Login';
import Addblog from './Addblog';
import Newblog from './Newblog';
import Update from './Update';

const Navbar = () => {
  return (
    <>
    <BrowserRouter>
    <Navlink/>
    <Routes>
       
        <Route element={<Private/>}>
        {/* <Route path='/' element={<Mainnavbar/>}> */}
        <Route  path="/"  element={<Home/>} />
        <Route path='/update/:id' element={<Update/>}/>
        <Route path='/addblog' element={<Addblog/>}/>
        <Route path='/list' element={<Newblog/>}/>
        </Route>
        <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Navbar