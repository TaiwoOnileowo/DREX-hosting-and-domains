import React,{useState} from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Body from "./Components/Body";
import Newsletter from './Components/Newsletter'
import Cards from "./Components/Cards";
import Footer from './Components/Footer';





function App(){
  const [dark, setDark]= useState(true);
  const handleDark=()=>{
    setDark(!dark)
       }
  return(
    <div>
      <Navbar toggleDark={handleDark} Dark={dark}/>
      <Hero Dark={dark}/>
      <Body />
      <Newsletter Dark={dark} />
      <Cards />
      <Footer Dark={dark}/>
    </div>
  )
}

export default App;