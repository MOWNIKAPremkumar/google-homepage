import React from "react";
import "./App.css";
import {Route,Routes} from "react-router-dom";
import Home from "./pages/Home";
import Gmail from "./pages/Gmail";
import GoogleApps from "./pages/GoogleApps";
import SignIn from "./pages/SignIn";
import Images from "./pages/Images";
import Navbar from "./components/Navbar";



function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gmail" element={<Gmail/>}/>
        <Route path="/images" element={<Images/>}/>
        <Route path="/googleapps" element={<GoogleApps/>}/>
        <Route path="/signin" element={<SignIn/>}/>
      </Routes>
    </div>
    
  )
}

export default App