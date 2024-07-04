import React from "react";
import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";



function Home() {
  return (
    <div className="Home">
        <Logo/>
        <SearchBar/>
        <Footer/>
    </div>
  )
}

export default Home