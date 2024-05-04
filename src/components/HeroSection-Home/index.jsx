import { ReactCompareSlider } from 'react-compare-slider';
import { HeroSectionStyle } from './style';
import Profile from '../../assets/Images/Profile.png'
import { Coder, Designer } from './constant';
import 'animate.css';


const HeroSection = () => {
    return (
        <>
        <div className='hidden lg:block animate__fadeInDownBig'>
            <HeroSectionStyle>
                <ReactCompareSlider
                    changePositionOnHover={true}
                    handle={false}
                    itemOne={
                        <div className='mx-auto flex items-start justify-center bg-white' >
                            <div className='w-72 mt-32'>
                                {Designer.map((item) => (
                                    <>
                                        <h2 className='text-5xl xl:text-6xl font-semibold text-black/70'>{item.title}</h2>
                                        <p className='text-base text-gray-600 mt-2'>{item.description}</p>
                                    </>
                                ))}
                            </div>
                            <img src={Profile} alt="Profile" width={500} height={500} />
                            <div className='w-72 mt-32 invisible'>
                                {Coder.map((item) => (
                                    <>
                                        <h2 className='text-5xl xl:text-6xl font-semibold text-[#000000B3]'>{item.title}</h2>
                                        <p className='text-base text-gray-600 mt-2'>{item.description}</p>
                                    </>
                                ))}
                            </div>
                        </div>
                    }
                    itemTwo={
                        <div className='mx-auto flex items-start justify-center bg-white'>
                            <div className='w-72 mt-32 invisible'>
                                {Designer.map((item) => (
                                    <>
                                        <h2 className='text-5xl xl:text-6xl font-semibold text-[#000000B3]'>{item.title}</h2>
                                        <p className='text-base text-gray-600 mt-2'>{item.description}</p>
                                    </>
                                ))}
                            </div>
                            <img src={Profile} alt="Profile" width={500} height={500} />
                            <div className='w-72 mt-32'>
                                {Coder.map((item) => (
                                    <>
                                        <h2 className='text-5xl xl:text-6xl font-semibold text-[#000000B3]'>{item.title}</h2>
                                        <p className='text-base text-gray-600 mt-2'>{item.description}</p>
                                    </>
                                ))}
                            </div>
                        </div>
                    }
                />
            </HeroSectionStyle>
        </div>
        <div>
            
        </div>
        </>
    );
};

export default HeroSection