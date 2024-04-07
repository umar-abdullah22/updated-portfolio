import React from 'react'
import Helmet from 'react-helmet'
import AboutPic from '../../assets/Images/AboutProfile.png'
import { AboutImages } from './constant'
import { PieChart } from '@mui/x-charts/PieChart';


const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Portfolio</title>
      </Helmet>
      <div className='flex items-start justify-between mx-10 mt-10 border-b border-black/10'>
        <div className='w-1/2 flex justify-center'>
          <img src={AboutPic} alt="AboutPic" width={400} height={500} className='rounded-full' />
        </div>
        <div className='w-1/2'>
          <h1 className='text-5xl font-bold mt-5'>About</h1>
          <h3 className='text-3xl mt-5'>I'm a full stack developer based in lahore, pakistan</h3>
          <p className='mt-5 text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur illo voluptatum eaque quis iste aliquam possimus id. Ad fugit molestias eos, harum quo aspernatur suscipit laboriosam doloribus similique facilis atque!</p>
        </div>
      </div>
      <div className='flex justify-center gap-10 mt-5 pb-10 border-b border-black/10'>
        {AboutImages.map(item => (
          <img key={item.key} src={AboutPic} alt="AboutPic" width={150} height={150} className=' border-8 border-black/10 rounded-md' />
        ))}
      </div>
      <div className='my-10'>
      </div>
    </>
  )
}

export default About