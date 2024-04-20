import React from 'react'
// import Link from 'react-router-dom'
import Helmet from 'react-helmet'
import { AboutHeroSectionContent, AboutImages, Coder, Designer, FactsStory, ProgrammingLanguages } from './constant'
import Marquee from "react-fast-marquee";
import Chart from '../../components/PieChart-About';

import BarsDataset from '../../components/BarChart-About';


const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Portfolio</title>
      </Helmet>
      {AboutHeroSectionContent.map(item => (
        <div className='flex items-center justify-between mx-10  border-b border-black/10' >
          <div className='w-1/2 flex justify-center'>
            <img src={item.profileImage} alt={item.profileImage} width={400} height={500} />
          </div>
          <div className='w-1/2 text-[#000000B3]'>
            <h1 className='text-5xl font-bold mt-5'>{item.title}</h1>
            <h3 className='text-3xl mt-5 font-semibold capitalize'>{item.subTitle}</h3>
            <p className='mt-2 text-lg'>{item.description}</p>
          </div>
        </div>
      ))}
      <div className='flex justify-center gap-10 py-10 border-b border-black/10'>
        {AboutImages.map(item => (
          <img key={item.key} src={item.content} alt="ProfilePic" width={150} height={150} className='w-40 h-32 object-cover object-top border-8 border-black/10 rounded-md' />
        ))}
      </div>
      <div className='py-3 border-t border-b' style={{ backgroundImage: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)" }}>
        <div className='w-2/3 my-10 mx-auto flex items-start justify-between '>
          <div>
            {Designer.map((item, index) => (
              <div key={index}>
                <h2 className='text-[#000000B3] text-2xl font-semibold'>{item.title}</h2>
                <ul className='list-disc pl-4'>
                  {item.part.map((partItem, partIndex) => (
                    <li className=' text-[#000000B3] text-lg mt-2' key={partIndex}>{partItem.parts}</li>
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
                <h2 className='text-[#000000B3] text-2xl font-semibold'>{item.title}</h2>
                <ul className='list-disc pl-4'>
                  {item.part.map((partItem, partIndex) => (
                    <li className=' text-[#000000B3] text-lg mt-2' key={partIndex}>{partItem.parts}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=''>
        <BarsDataset />
      </div>

      <div className='mt-5'>
        <Marquee>
          <div className='flex gap-4'>
            {ProgrammingLanguages.map(item => (
              <img key={item.key} src={item.content} alt={item.content} width={100} height={100} />
            ))}
          </div>
        </Marquee>
      </div>

      {FactsStory.map((item, index) => (
        <div key={index}>
          {index === 0 ? (
            <div className='flex justify-center items-center py-5 border-t border-b' style={{ backgroundImage: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)" }}>
              <div className='w-1/2'>
                <img src={item.image} alt={item.image} className='ml-auto' width={600} height={600} />
              </div>
              <div className='w-1/2'>
                <h3 className='text-[#000000B3] text-3xl mt-5'>{item.title}</h3>
                <p className='text-[#000000B3] w-[400px] mt-5 text-lg'>{item.description}</p>
              </div>
            </div>
          ) : (
            <div className='flex justify-center items-center pt-5' style={{ backgroundImage: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)" }}>
              <div className=''>
                <h3 className='text-[#000000B3] text-3xl mt-5'>{item.title}</h3>
                <p className='text-[#000000B3] w-[400px] my-5 text-lg'>{item.description}</p>
                <span className='underline hover:no-underline cursor-pointer text-sm'>Read My Story</span>
              </div>
              <div className=''>
                <img src={item.image} alt={item.image} width={600} height={600} />
              </div>
            </div>
          )
          }
        </div>
      ))}
    </>
  )
}

export default About