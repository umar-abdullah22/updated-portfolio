import React from 'react'
import { menu } from '../Navbar/constant'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="bg-black text-[#f5f5f5] flex flex-col md:flex-row justify-between px-5 md:px-20 py-3" style={{ background: 'linear-gradient(22deg, rgba(2,0,36,1) 30%, rgba(45,52,54,1) 70%)' }}>
                <p className='order-2 md:order-1'>&copy; 2024 Umar Abdullah</p>
                <div className='flex items-center gap-5 order-1 md:order-2'>
                    {menu.map(item => (
                        <Link to={item.link} key={item.key} className='text-[#f5f5f5]'>{item.label}</Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Footer