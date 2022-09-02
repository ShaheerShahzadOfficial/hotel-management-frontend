import React from "react";
import { BrowserRouter , Routes,Route } from "react-router-dom";
import SignUp from "./Authentication/SignUp/SignUp"
import SignIn from "./Authentication/SignIn/SignIn"
import Home from "./Home/Home";



function App() {

  return (
    <BrowserRouter>
     <Routes>
     <Route  exact path="/" element={<Home/>} />
      <Route  path="/register" element={<SignUp/>} />
      <Route  path="/login" element={<SignIn/>} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
