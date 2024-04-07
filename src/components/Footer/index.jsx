import React from 'react'
import { menu } from '../Navbar/constant'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="bg-black text-white flex justify-between px-20 py-3" style={{ background: 'linear-gradient(22deg, rgba(2,0,36,1) 30%, rgba(45,52,54,1) 70%)' }}>
                <p>&copy; 2024 Umar Abdullah</p>
                <div className='flex items-center gap-5'>
                    {menu.map(item => (
                        <Link to={item.link} key={item.key} className='text-white'>{item.label}</Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Footer