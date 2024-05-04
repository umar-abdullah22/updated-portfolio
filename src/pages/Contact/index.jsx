import React from 'react'
import Helmet from 'react-helmet'
import ProfilePic from '../../assets/Images/Profile.png'
import { ContactHeroSectionContent, Socials } from './constant'
import { Link } from 'react-router-dom'


const Contact = () => {
    return (
        <>
            <Helmet>
                <title>About | Portfolio</title>
            </Helmet>
            <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-5 md:gap-20 mx-5 md:mx-10 border-b border-black/10 text-[#000000B3]'>
                <div className='w-full md:w-[400px]'>
                    {ContactHeroSectionContent.map(item => (
                        <>
                            <h1 className='text-5xl font-bold mt-5'>{item.title}</h1>
                            <h3 className='text-xl mt-5'>{item.subTitle}</h3>
                        </>
                    ))
                    }
                    <div className='grid grid-cols-2 gap-4 mb-5 md:mb-0 mt-5'>
                        {Socials.map(item => (
                            <Link target='_blank' to={item.link} key={item.key} className='flex items-center gap-4'>
                                <img src={item.socialIcon} alt={item.socialIcon} className='w-12 h-12' />
                                <h4 className='text-base font-semibold'>{item.label}</h4>
                            </Link>
                        ))
                        }
                    </div>
                </div>
                <div>
                    <img src={ProfilePic} alt="ProfilePic" width={400} />
                </div>
            </div>

            <div className='py-10' style={{ backgroundImage: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)" }}>
                <form className='w-full md:w-1/3 px-5 md:px-0 mx-auto'>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-blue-800 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-500 dark:placeholder:text-gray-500 dark:peer-focus:text-blue-800 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleInput90"
                            placeholder="Name" />
                        <label
                            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-blue-800 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-gray-500 dark:peer-focus:text-blue-800"
                            for="exampleInput90"
                        >Name
                        </label>
                    </div>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                            type="email"
                            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-blue-800 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-500 dark:placeholder:text-gray-500 dark:peer-focus:text-blue-800 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleInput91"
                            placeholder="Email address" />
                        <label
                            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-blue-800 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-gray-500 dark:peer-focus:text-blue-800"
                            for="exampleInput91"
                        >Email address
                        </label>
                    </div>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <textarea
                            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-500 dark:placeholder:text-gray-500 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            placeholder="Your message"></textarea>
                        <label
                            for="exampleFormControlTextarea1"
                            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-blue-800 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-gray-500 dark:peer-focus:text-blue-800"
                        >Message</label
                        >
                    </div>
                    <div
                        className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                        <input
                            className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-blue-800 checked:bg-blue-800 checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-blue-800 dark:checked:bg-blue-800 dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                            type="checkbox"
                            value=""
                            id="exampleCheck96" />
                        <label
                            className="inline-block pl-[0.15rem] hover:cursor-pointer text-gray-500"
                            for="exampleCheck96">
                            Send me a copy of this message
                        </label>
                    </div>
                    <button
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="mb-6 inline-block w-full rounded bg-blue-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                        Send
                    </button>
                </form>
            </div>
        </>
    )
}

export default Contact