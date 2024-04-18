import React from 'react'
// import Link from 'react-router-dom'
import Helmet from 'react-helmet'
import ProfilePic from '../../assets/Images/Profile.png'
import { AboutImages, Coder, Designer, ProgrammingLanguages } from './constant'
import Marquee from "react-fast-marquee";
import Chart from '../../components/PieChart-About';
import PortfolioPic from '../../assets/Images/PortfolioHeroSection.png'
import BarsDataset from '../../components/BarChart-About';


const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Portfolio</title>
      </Helmet>
      <div className='flex items-center justify-between mx-10  border-b border-black/10'>
        <div className='w-1/2 flex justify-center'>
          <img src={ProfilePic} alt="ProfilePic" width={400} height={500} />
        </div>
        <div className='w-1/2'>
          <h1 className='text-5xl font-bold mt-5'>About</h1>
          <h3 className='text-3xl mt-5'>I'm a full stack developer based in lahore, pakistan</h3>
          <p className='mt-5 text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur illo voluptatum eaque quis iste aliquam possimus id. Ad fugit molestias eos, harum quo aspernatur suscipit laboriosam doloribus similique facilis atque!</p>
        </div>
      </div>
      <div className='flex justify-center gap-10 mt-5 pb-10 border-b border-black/10'>
        {AboutImages.map(item => (
          <img key={item.key} src={item.content} alt="ProfilePic" width={150} height={150} className='w-40 h-32 object-cover object-top border-8 border-black/10 rounded-md' />
        ))}
      </div>
      <div className='w-2/3 my-10 mx-auto flex items-start justify-between'>
        <div>
          {Designer.map((item, index) => (
            <div key={index}>
              <h2 className='text-black text-2xl font-semibold'>{item.title}</h2>
              <ul className='list-disc pl-4'>
                {item.part.map((partItem, partIndex) => (
                  <li className='text-lg mt-2' key={partIndex}>{partItem.parts}</li>
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
              <h2 className='text-black text-2xl font-semibold'>{item.title}</h2>
              <ul className='list-disc pl-4'>
                {item.part.map((partItem, partIndex) => (
                  <li className='text-lg mt-2' key={partIndex}>{partItem.parts}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>


      <div className='flex justify-center items-center'>
        <div className='w-1/2'>
          <img src={PortfolioPic} alt="PortfolioPic" className='ml-auto' width={600} height={600} />
        </div>
        <div className='w-1/2'>
          <h3 className='text-3xl mt-5'>Random Facts</h3>
          <p className='w-[400px] mt-5 text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur illo voluptatum eaque quis iste aliquam possimus id. Ad fugit molestias eos, harum quo aspernatur suscipit laboriosam doloribus similique facilis atque!</p>
        </div>
      </div>

      <div>
        <BarsDataset />
      </div>

      <div>
        <Marquee>
          <div className='flex gap-4'>
            {ProgrammingLanguages.map(item => (
              <img key={item.key} src={item.content} alt={item.content} width={100} height={100} />
            ))}
          </div>
        </Marquee>
      </div>

      <div className='flex justify-center items-center'>
        <div className=''>
            <h3 className='text-3xl mt-5'>My story</h3>
            <p className='w-[400px] my-5 text-lg'>Learn a little bit more about me, how I got into design, and how I built my career as a product designer. I’ve included key things I've learned, book recommendations, and even some sneak peeks of the first websites I created.</p>
            <span className='underline hover:no-underline cursor-pointer text-sm'>Read My Story</span>
        </div>
        <div className=''>
          <img src={PortfolioPic} alt="PortfolioPic" width={600} height={600} />
        </div>
      </div>


    </>
  )
}

export default About