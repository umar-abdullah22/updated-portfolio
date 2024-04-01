import React from 'react'
import Logo from '../../assets/logo.png'
import { menu } from './constant';
import { socialMenu } from './constant';
import Ic_Facebook from '../../assets/svg/ic_facebook.svg'


const Navbar = () => {
    return (
        <>
            <div className='w-full bg-black px-20 py-3 flex items-center justify-between' style={{ background: 'linear-gradient(90deg, rgba(11,168,243,1) 0%, rgba(5,106,162,1) 50%, rgba(11,168,243,1) 100%)' }}>
                <div>
                <ul className='flex items-center gap-5'>
                        {socialMenu.map(item => (
                            <li className='text-white' key={item.key}>{item.label}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <img src={Logo} alt="Logo" className='h-16 w-16 rounded-full' />
                </div>
                <div>
                    <ul className='flex items-center gap-5'>
                        {menu.map(item => (
                            <li className='text-white' key={item.key}>{item.label}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar