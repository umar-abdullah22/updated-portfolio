import React, { useState } from 'react'
import Logo from '../../assets/Images/logo.png'
import { menu, socialMenu } from './constant';
import { NavbarStyling } from './style';
import { Link } from 'react-router-dom';
import { Spin as Hamburger } from 'hamburger-react'


const Navbar = () => {
    const [isOpen, setOpen] = useState(false)


    return (
        <>
            <NavbarStyling>
                {/* Large Screen */}
                <div className='w-full bg-black px-5 xl:px-20 py-2 flex items-center justify-between' style={{ background: 'linear-gradient(90deg, rgba(11,168,243,1) 0%, rgba(5,106,162,1) 50%, rgba(11,168,243,1) 100%)' }}>
                    <div className='w-2/5 hidden lg:flex items-center gap-5'>
                        {socialMenu.map(item => (
                            <Link target='_blank' to={item.link} className='text-black' key={item.key}>
                                <img src={item.label} alt="item.label" className='w-10 h-10' />
                            </Link>
                        ))}
                    </div>
                    <div className='lg:w-1/5  flex justify-center items-center'>
                        <Link to="/">
                            <img src={Logo} alt="Logo" className='h-16 w-16 rounded-full' />
                        </Link>
                    </div>
                    <div className='w-2/5 hidden lg:flex items-center justify-end gap-5 borderYtoX'>
                        {menu.map(item => (
                            <Link to={item.link} className='text-white relative px-4 p-1' key={item.key}>{item.label}</Link>
                        ))}
                    </div>
                    <div className='block lg:hidden'>
                        <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} color="#f5f5f5" />
                    </div>
                </div>

                {/* Small Screen */}
                <div className={isOpen === true ? 'block w-80 h-screen px-5 py-2 fixed top-0 left-0 z-50 rounded-tr-lg rounded-br-lg animate__slideInLeft' : 'hidden'} style={{ background: 'linear-gradient(22deg, rgba(2,0,36,1) 30%, rgba(45,52,54,1) 70%)' }}>
                    <div className=''>
                        <Link to="/">
                            <img src={Logo} alt="Logo" className='h-16 w-16 rounded-full' />
                        </Link>
                    </div>
                    <div className='w-full flex justify-center gap-5 mt-5'>
                        {socialMenu.map(item => (
                            <Link target='_blank' to={item.link} className='text-black' key={item.key}>
                                <img src={item.label} alt="item.label" className='w-10 h-10' />
                            </Link>
                        ))}
                    </div>
                    <div className='flex flex-col items-center justify-end gap-5 borderYtoX mt-10'>
                        {menu.map(item => (
                            <Link to={item.link} className='w-40 text-center text-white relative px-4 p-1' key={item.key}>{item.label}</Link>
                        ))}
                    </div>
                </div>
            </NavbarStyling>
        </>
    )
}

export default Navbar