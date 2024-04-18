import React from 'react'
import Helmet from 'react-helmet'
import ProfilePic from '../../assets/Images/Profile.png'
import { Socials } from './constant'
import { Link } from 'react-router-dom'


const Contact = () => {
    return (
        <>
            <Helmet>
                <title>About | Portfolio</title>
            </Helmet>
            <div className='flex items-center justify-center gap-20 mx-10  border-b border-black/10'>
                <div className='w-[400px]'>
                    <h1 className='text-5xl font-bold mt-5'>Contact</h1>
                    <h3 className='text-3xl mt-5'>Get in touch with me via social media or email.</h3>
                    <div className='grid grid-cols-2 gap-4 mt-5'>
                        {Socials.map(item => (
                            <Link to={item.link} key={item.key} className='flex items-center gap-4'>
                                <img src={item.socialIcon} alt={item.socialIcon} className='w-14 h-14' />
                                <h4 className='text-lg font-semibold'>{item.label}</h4>
                            </Link>
                        ))
                        }
                    </div>
                </div>
                <div>
                    <img src={ProfilePic} alt="ProfilePic" width={400} height={500} />
                </div>
            </div>
        </>
    )
}

export default Contact