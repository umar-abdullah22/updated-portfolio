import React from 'react'
import Navbar from '../../components/Navbar'
import HeroSection from '../../components/HeroSection-Home'

const Home = () => {
  return (
    <>
      <div className='border-b-2 shadow-lg'>
        <HeroSection />
      </div>
      <div className='bg-[#F4f4f4] py-10'>
        <div className='mx-20 border flex item-center relative'>
          <span className='uppercase bg-[#F4f4f4] text-centers mx-auto w-fit absolute left-0 right-0 -top-3 px-10 font-semibold '>Some of my latest work</span>
        </div>
      </div>
    </>
  )
}

export default Home