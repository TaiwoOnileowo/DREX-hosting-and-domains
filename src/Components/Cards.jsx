import React from "react";

function Cards(){
return(
    <div className="w-full py-[10rem] px-4 bg-white ">
        <div className="max-w-[1240px] mx-auto grid sm:grid-cols-3 md:grid-cols-3  gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
<h2 className="  mx-auto bg-white font-bold text-2xl" >Starter Spark</h2>
<p className="text-xl text-center pt-6">Ideal plan for starters</p>
<p className="text-xl text-center py-2 font-bold text-gray-600">+3 months FREE</p>
<p className="text-center text-4xl font-bold text-[#3d5afe]"> $0.95/mo</p>
<div className="text-center font-medium">
    <p className="py-2 border-b mx-8 mt-8">1GB RAM</p>
    <p className="py-2 border-b mx-8">5 sub-domain</p>
    <p className="py-2 border-b mx-8">MySQL Database 5</p>
    <p className="py-2 border-b mx-8">Daily backups</p>
    <p className="py-2 border-b mx-8">Free Email</p>
</div>
<button className="bg-[#3d5afe] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black sm:w-[150px] hover:bg-[#3245a6] hover:text-[#001a00] transition duration-300 ease-in-out">Start Trial</button>
</div>
<div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
<h2 className=" mx-auto mt-[-2rem] bg-[#87ceeb] p-3 text-[#3d5afe] rounded-full font-medium uppercase">Most Popular</h2>
<h2 className="  mx-auto font-bold text-2xl my-3">Business</h2>
<p className="text-xl text-center pt-4">Level-up with enhanced features</p>
<p className="text-xl text-center py-2 font-bold text-gray-600">+3 months FREE</p>
<p className="text-center text-4xl font-bold text-[#4058df]"> $2.00/mo</p>
<div className="text-center font-medium">
<p className="py-2 border-b mx-8 mt-8">3GB RAM</p>
    <p className="py-2 border-b mx-8">8 sub-domain</p>
    <p className="py-2 border-b mx-8">MySQL Database 5</p>
    <p className="py-2 border-b mx-8">Daily backups</p>
    <p className="py-2 border-b mx-8">Free Email</p>
    <p className="py-2 border-b mx-8">Free CDN</p>
</div>
<button className="bg-black text-[#3d5afe] w-[200px] rounded-md font-medium my-6 mx-auto py-3 sm:w-[150px] hover:bg-[#3d5afe] hover:text-[#000300] transition duration-300 ease-in-out">Start Trial</button>
</div>
<div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
<h2 className="  mx-auto bg-white font-bold text-2xl" >Premium</h2>
<p className="text-xl text-center pt-6">Enjoy optimized perfromance</p>
<p className="text-xl text-center py-2 font-bold text-gray-600">+3 months FREE</p>
<p className="text-center text-4xl font-bold text-[#3d5afe]"> $4.00/mo</p>
<div className="text-center font-medium">
    <p className="py-2 border-b mx-8 mt-8">10GB RAM</p>
    <p className="py-2 border-b mx-8">10 sub-domain</p>
    <p className="py-2 border-b mx-8">MySQL Database 5</p>
    <p className="py-2 border-b mx-8">Daily backups</p>
    <p className="py-2 border-b mx-8">Free Email</p>
    <p className="py-2 border-b mx-8">Free CDN</p>
    <p className="py-2 border-b mx-8">Unlimited Bandwidth</p>
</div>
<button className="bg-[#3d5afe] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black sm:w-[150px] hover:bg-[#3245a6] hover:text-[#001a00] transition duration-300 ease-in-out">Start Trial</button>
</div>
        </div>
    </div>
)
}

export default Cards