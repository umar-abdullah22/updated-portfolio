import React from 'react'
import Logo from '../../assets/Images/logo.png'
import { menu } from './constant';
import { socialMenu } from './constant';
import { NavbarStyling } from './style';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <NavbarStyling>
                <div className='w-full bg-black px-20 py-2 flex items-center justify-between' style={{ background: 'linear-gradient(90deg, rgba(11,168,243,1) 0%, rgba(5,106,162,1) 50%, rgba(11,168,243,1) 100%)' }}>
                    <div className='w-2/5 flex items-center gap-5 borderYtoX'>
                        {socialMenu.map(item => (
                            <Link to={item.link} className='text-white relative px-4 p-1' key={item.key}>
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    <div className='w-1/5 flex justify-center items-center'>
                        <img src={Logo} alt="Logo" className='h-16 w-16 rounded-full' />
                    </div>
                    <div className='w-2/5 flex items-center justify-end gap-5 borderYtoX'>
                        {menu.map(item => (
                            <Link to={item.link} className='text-white relative px-4 p-1' key={item.key}>{item.label}</Link>
                        ))}
                    </div>
                </div>
            </NavbarStyling>
        </>
    )
}

export default Navbar