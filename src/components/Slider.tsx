"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const data = [
  {
    id: 1,
    title: "always hot, fresh & ready",
    image: "/slide1.png"
  },
  {
    id: 2,
    title: "we deliver anywhere within the GTA",
    image: "/slide2.png"
  },
  {
    id: 3,
    title: "Best shared with loved ones",
    image: "/slide3.jpg"
  },
]

const Slider = () => {

  const [currentSlide, setCurrentSlide] = useState(0)
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevState => prevState === data.length - 1 ?  0 : prevState + 1);
    }, 2000);

    return () => clearInterval(interval)
  }, [currentSlide])

  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50'>
      <div className='flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold'>
        <h1 className='text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl'>
          {data[currentSlide].title}
        </h1>
        <button className='pointer bg-red-500 text-white py-4 px-8 rounded-md'>Order Now</button>
      </div>
      <div className='w-full flex-1 relative'>
        <Image src={data[currentSlide].image} alt="holding pizza" fill className='object-cover'/>
      </div>
    </div>
  )
}

export default Slider