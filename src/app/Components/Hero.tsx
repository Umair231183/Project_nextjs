'use client';
import React from 'react'
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
function Hero() {
  return (
    <div className='bg-red-950'> 
      
     {/* Optional Centered Hero Text */}
    <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold z-0 text-center px-4">
    </div>

    <div>
         <section className="text-amber-50 body-font">
     <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
       <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
         
        
         <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
         <Typewriter
     options={{
       strings: ['Wear Your Confidence', 'Purchase it', 'Before it sold out'],
       autoStart: true,
       loop: true,
     }}
   />
           {/* <br className="hidden lg:inline-block"/>  */}
          </h1>
         <p className="mb-8 leading-relaxed">  Explore the latest styles in men’s and women’s fashion — curated to elevate your everyday look..Timeless fashion. Affordable prices.New arrivals daily. Don’t miss out.Handpicked collections. Delivered to your door.</p>
         <div className="flex justify-center">
           <button className="inline-flex text-white bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-200 hover:text-black rounded text-lg">Learn More</button>
         </div>
       </div>
       <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
         <img className="object-cover object-center rounded" alt="hero" src="https://shopbrumano.com/cdn/shop/files/DarkGreenMercerizedFullSleevesPoloShirtBrumanoPakistan1_490x.progressive.jpg?v=1746090237"/>
       </div>
     </div>
   </section>
         </div>   
     </div>
  );
}

 export default Hero;