import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/LandingPage'

function Router(){
   return (
      <BrowserRouter>
         <Routes>
            <Route index element={<Home/>}/>
         </Routes>
      </BrowserRouter>
   )
}

export default Router