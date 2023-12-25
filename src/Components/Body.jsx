import React from "react";
import Laptop from '../assets/laptop.jpg'
const Body=()=>{
return(
    <div className="w-full bg-white py-16 px-4">
<div className="max-w-[1240] mx-auto grid md:grid-cols-2">
<img src={Laptop} className="w-[500px] mx-auto my-4"alt="Laptop image"/>
<div className="flex flex-col justify-center">
<p className="uppercase text-[#3d5afe] font-bold">Embark on Digital Excellence</p>
<h1 className="uppercase md:text-4xl sm:text-3xl text-2xl font-bold py-2">Your Premier Destination for Hosting and Domains</h1>
<p className="">
Unlock the power of seamless web hosting and domain solutions with us!
 Elevate your online presence with our reliable and lightning-fast hosting services. 
 Secure your unique digital identity with our vast selection of domains. 
 Join us on the journey to unparalleled performance and 24/7 expert customer support. 
 Your website's success starts here – choose excellence, choose us!
</p>
<button className=" bg-black text-[#3d5afe] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:bg-[#3245a6] hover:text-[#001a00] transition duration-300 ease-in-out">Get Started</button>
</div>
</div>
    </div>
)
}

export default Body;