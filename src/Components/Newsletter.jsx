import React from 'react';

function Newsletter(props){
    return(
<div className={props.Dark ? 'w-full py-16 text-white px-4' : 'w-full py-16 text-[#333333] bg-[#f5f5f5] px-4' }>
<div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
    <div className='lg:col-span-2 my-4'>
        <h1 className='md:text-4xl sm:text-3xl text-xl font-bold py-2'>Want more tips & tricks to optimize your website?</h1>
        <p className=''>Sign up to our newsletter and stay up to date.</p>
</div>
<div className='my-4'>
<div className='flex flex-col sm:flex-row items-center justify-between w-full'>
    <input className="w-full flex p-3 rounded-md text-black mx-2 border-2 border-black"type='email' placeholder='Enter Email'></input>
    <button className='bg-[#3d5afe] w-[200px] rounded-md font-medium my-6 mx-auto py-3  text-black hover:bg-[#3245a6] hover:text-[#001a00] transition duration-300 ease-in-out'>Notify Me</button>
</div>
<p>We care about the protection of your data. <br/>Read our <span className='text-[#3d5afe] cursor-pointer hover:underline'>Privacy Policy</span></p>

</div>


</div>
</div>
    )
}

export default Newsletter;