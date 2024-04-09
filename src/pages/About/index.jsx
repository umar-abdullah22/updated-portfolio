import React from 'react'
import Helmet from 'react-helmet'
import AboutPic from '../../assets/Images/AboutProfile.png'
import { AboutImages, Coder, Designer } from './constant'
import Marquee from "react-fast-marquee";
import Chart from '../../components/PieChart-About';


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
      <div className='my-10 mx-20 flex items-start justify-between'>
        <div>
          {Designer.map((item, index) => (
            <div key={index}>
              <h2 className='text-black text-2xl'>{item.title}</h2>
              <ul className='list-disc pl-4'>
                {item.part.map((partItem, partIndex) => (
                  <li className='text-sm mt-2' key={partIndex}>{partItem.parts}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <Chart />
        </div>
        <div>
          {Coder.map((item, index) => (
            <div key={index}>
              <h2 className='text-black text-2xl'>{item.title}</h2>
              <ul className='list-disc pl-4'>
                {item.part.map((partItem, partIndex) => (
                  <li className='text-sm mt-2' key={partIndex}>{partItem.parts}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Marquee>
          <div className='flex gap-4'>
            <p>HTML</p>
            <p>CSS</p>
            <p>REACT JS</p>
          </div>
        </Marquee>
      </div>
    </>
  )
}

export default About