import Image from 'next/image'
import React from 'react'

const Slider = () => {

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
      image: "/slide3.png"
    },
  ]


  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]'>
      <div className='h-1/2 flex items-center justify-center flex-col gap-8 text-red-500 font-bold'>
        <h1 className='text-5xl text-center uppercase p-4'>
          Test
        </h1>
        <button className='pointer bg-red-500 text-white py-4 px-8 rounded-md md:text-6xl xl:text-7xl'>Order Now</button>
      </div>
      <div className='w-full h-1/2 relative'>
        <Image src="/slide1.png" alt="holding pizza" fill className='object-cover'/>
      </div>
    </div>
  )
}

export default Slider