import React from "react";
import {FaDribbbleSquare,FaFacebookSquare,FaGithubSquare,FaInstagram,FaTwitterSquare} from 'react-icons/fa';

function Footer(props){
return(
    <div className={props.Dark ? "mx-auto pt-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300" : "mx-auto pt-16 px-4 bg-[#f5f5f5] text-[#333333] grid lg:grid-cols-3 gap-8" }>
<div className="text-justify md:max-w-[350px]">
    <h1 className='w-full text-3xl font-bold text-[#3d5afe]'>DREX.</h1>
    <p className="py-4">Thank you for choosing DREX as your trusted partner in the digital realm. 
    We constantly improve our technology, provide professional support and simplify site creation.
    Our commitment extends beyond hosting and domains - it's about fostering your success.
    Here's to a future filled with digital triumphs.
    </p>
<div className="flex md:w-[75%]  justify-between  my-4 ">
    <FaFacebookSquare size={30} />
    <FaInstagram size={30} />
    <FaTwitterSquare size={30} />
    <FaGithubSquare size={30}/>
    <FaDribbbleSquare size={30} />
</div>
<div>
    <p className="my-4 hidden lg:block">&copy; 2023 Drex. All Rights Reserved.</p>
</div>
</div>
<div className="lg:col-span-2 flex justify-between mt-12 ">
    <div>
        <h6 className={props.Dark ? "font-medium text-gray-400" : "font-medium text-gray-800"}>Hosting</h6>
        <ul className="italic cursor-pointer">
            <li className="py-2 text-sm hover:text-blue-500 transition duration-300 ease-in-out">Web Hosting</li>
            <li className="py-2 text-sm hover:text-blue-500 transition duration-300 ease-in-out">Cloud Hosting</li>
            <li className="py-2 text-sm hover:text-blue-500 transition duration-300 ease-in-out">eCommerce Hosting</li>
            <li className="py-2 text-sm hover:text-blue-500 transition duration-300 ease-in-out">VPS Hosting</li>
            <li className="py-2 text-sm hover:text-blue-500 transition duration-300 ease-in-out">Business Email</li>
        </ul>
    </div>
    <div>
        <h6 className={props.Dark ? "font-medium text-gray-400" : "font-medium text-gray-800"}>Domains</h6>
        <ul className="italic cursor-pointer">
            <li className="py-2 text-sm hover:text-blue-500 transition duration-300 ease-in-out">Free Domain</li>
            <li className="py-2 text-sm hover:text-blue-500 transition duration-300 ease-in-out">Domain Extensions</li>
            <li className="py-2 text-sm hover:text-blue-500 transition duration-300 ease-in-out">Domain Transfer</li>
            <li className="py-2 text-sm hover:text-blue-500 transition duration-300 ease-in-out">WHOIS Lookup</li>
            <li className="py-2 text-sm hover:text-blue-500 transition duration-300 ease-in-out">Free SSL Certificate</li>
        </ul>
    </div>
    <div>
        <h6 className={props.Dark ? "font-medium text-gray-400" : "font-medium text-gray-800"}>Company</h6>
        <ul className="italic cursor-pointer">
            <li className="py-2 text-sm hover:text-blue-500 transition duration-300 ease-in-out">About DREX</li>
            <li className="py-2 text-sm hover:text-blue-500 transition duration-300 ease-in-out">Our Technology</li>
            <li className="py-2 text-sm hover:text-blue-500 transition duration-300 ease-in-out">Career</li>
            <li className="py-2 text-sm hover:text-blue-500 transition duration-300 ease-in-out">Student Discount</li>
            <li className="py-2 text-sm hover:text-blue-500 transition duration-300 ease-in-out">Contact Us</li>
        </ul>
    </div>
    <div>
        <h6 className={props.Dark ? "font-medium text-gray-400" : "font-medium text-gray-800"}>Legal</h6>
        <ul className="italic cursor-pointer ">
            <li className="py-2 text-sm hover:text-blue-500 transition duration-300 ease-in-out">Privacy Policy</li>
            <li className="py-2 text-sm hover:text-blue-500 transition duration-300 ease-in-out">Terms of Service</li>
            <li className="py-2 text-sm hover:text-blue-500 transition duration-300 ease-in-out">License</li>
            
        </ul>
    </div>

</div>
<p className="my-2 block lg:hidden">&copy; 2023 Drex. All Rights Reserved.</p>
    </div>
)
}

export default Footer