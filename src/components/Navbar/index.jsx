import React from 'react'
import Logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <>
            <div className='w-full h-20 bg-black px-20 flex items-center'>
                <div>
                    <img src={Logo} alt="Logo" className='h-16 w-16 rounded-full' />
                </div>
                <div>
                    
                </div>
            </div>
        </>
    )
}

export default Navbar