import React from 'react'
import Helmet from 'react-helmet'
import PortfolioPic from '../../assets/Images/PortfolioHeroSection.png'

const Portfolio = () => {
    return (
        <>
            <Helmet>
                <title>Portfolio | Portfolio</title>
            </Helmet>
            <div className='flex items-center justify-between mx-10  border-b border-black/10'>
                <div className='w-1/2'>
                    <img src={PortfolioPic} alt="PortfolioPic" className='ml-auto' width={800} height={600} />
                </div>
                <div className='w-1/2'>
                    <h1 className='text-5xl font-bold mt-5'>Portfolio</h1>
                    <h3 className='text-3xl mt-5'>Check some of latest websites</h3>
                    <p className='mt-5 text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur illo voluptatum eaque quis iste aliquam possimus id. Ad fugit molestias eos, harum quo aspernatur suscipit laboriosam doloribus similique facilis atque!</p>
                </div>
            </div>
        </>
    )
}

export default Portfolio