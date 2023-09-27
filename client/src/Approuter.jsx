import { BrowserRouter,Routes,Route } from "react-router-dom";


import React from 'react'
import Signin from "./Signin";
import Signup from "./Signup";

const Approuter = () => {
  return (
   <BrowserRouter>
   <Routes>
<Route index element={<Signin/>}/>
<Route path="/signup" element={<Signup/>}/>






   </Routes>
   
   
   
   
   </BrowserRouter>
  )
}

export default Approuter