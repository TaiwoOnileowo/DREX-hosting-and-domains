import React from "react";
import Typed from 'react-typed';

const Hero=(props)=>{
  console.log(props.Dark) 
  return(
     <div className= {props.Dark ? "text-white" : "bg-[#f5f5f5] text-[#333333]" } >
     <div className="max-w-[800px] sm:max-w-[600px] h-screen mx-auto text-center flex flex-col justify-center">
      <p className="text-[#3d5afe] font-bold p-2">Up to 30% off Pro Hosting</p>
      <h1 className="md:text-4xl lg:text-[2.5rem] sm:text-3xl text-2xl font-bold md:py-6 leading-normal">Everything you need to make your Website stand out</h1>
      <div className="flex justify-center items-center ">
        <p className="md:text-3xl sm:text-xl text-xl font-bold py-4">Lifetime FREE</p> 
        <Typed className="md:text-3xl sm:text-xl text-xl font-bold pl-2 " strings={['SSL','Cpanel','Storage']} typeSpeed={120} backSpeed={140} loop/>
        </div> 
        <p className={props.Dark ? "md:text-2xl text-xl font-bold text-gray-500 pl-2 md:pl-4" : "md:text-2xl text-xl font-bold text-[#6b7280] pl-2 md:pl-4" }>Provide your website with lifetime free SSL, Cpanel, storage and 24/7 customer support</p>
        <button className="bg-[#3d5afe] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-[#3245a6] hover:text-[#001a00] transition duration-300 ease-in-out">Get Started</button>
     </div>
    </div>
    )
}


export default Hero;