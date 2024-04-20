import React from 'react'
import sumTube from '../../assets/Images/sumTube.png'

const ProductView = () => {
    return (
        <>
            <div className='py-10' style={{ backgroundImage: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)" }}>
                <div className='flex items-center justify-center gap-20 mx-10 pb-10 border-b border-black/10 text-[#000000B3]'>
                    <div className='w-[400px]'>
                        <h1 className='text-5xl font-bold mt-5'>SumTube</h1>
                        <h3 className='text-xl mt-5'>SumTube AI, a cutting-edge YouTube video summarizer. With lightning speed, it extracts text summaries for any video. Empower your content curation effortlessly!</h3>
                    </div>
                    <div>
                        <img src={sumTube} alt="sumTube" width={700} height={500} />
                    </div>
                </div>
                <div className='mx-32'>
                    <h2 className='mt-10 text-[#000000B3] text-3xl font-semibold '>Heading: Lorem ipsum dolor sit amet consectetur</h2>
                    <p className='mt-5 text-[#000000B3]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, totam doloremque quae ullam iste aut? Repudiandae pariatur quod eos! Provident commodi voluptas ratione quisquam deserunt beatae corrupti nisi, consectetur ex.
                    Molestiae quis accusantium vel, nemo nam, velit fugit cumque facere harum incidunt eum atque, quasi ipsa soluta iusto pariatur error officiis veritatis sunt omnis quod! Perspiciatis veritatis pariatur sit adipisci!
                    Tempore sed maxime iusto, dolor autem, quos perspiciatis ullam pariatur harum placeat beatae neque voluptas quas architecto aliquid reiciendis itaque fugit? Deleniti tempore id error amet, laborum iusto eligendi excepturi!
                    Minima expedita distinctio perspiciatis aperiam. Nostrum omnis vel velit nemo reiciendis corporis quod eos molestias nisi voluptas eaque quos cum sed, natus autem temporibus provident magni, vitae, sit aspernatur? Incidunt.
                    Animi facere enim dolore fugit placeat. Minus magnam impedit harum. Ipsa soluta aperiam nobis corrupti in cupiditate alias, ducimus nostrum, dolore magnam consequuntur quasi doloribus, deleniti officiis vero ipsam suscipit.
                    </p>
                    <div className='h-96 bg-blue-200 mt-5 rounded-md'></div>
                    <p className='mt-5 text-[#000000B3]'>Velit, quam adipisci odio, dolores, ut nostrum delectus beatae minus officia maiores ab accusamus consequatur natus provident obcaecati consequuntur ex molestiae. Sit repellendus vero ipsum quo nam dolorem fugit deleniti?
                    Facere, dolores vero necessitatibus fugit ducimus consectetur? Laborum voluptates nostrum cumque optio nulla explicabo molestias velit non sit eaque quia, consequuntur vero sunt provident magnam dolore, expedita quidem? Perspiciatis, debitis.
                    Eveniet, deleniti iure quibusdam recusandae est laboriosam consectetur sequi cumque, perferendis error laudantium quo nihil quis alias doloremque et ratione. Nemo error exercitationem cumque ullam facilis dolores quis dolor obcaecati?
                    Modi ipsa sint tempore. Amet adipisci fugit earum perferendis beatae qui hic consectetur minus, consequuntur maiores corporis quibusdam accusantium delectus dolor repudiandae ipsa, modi voluptatum distinctio laudantium totam. Aperiam, debitis.
                    Eius dolore magnam fugit eum quis, veritatis, nisi repellendus cupiditate, necessitatibus facere odio qui aspernatur. Deleniti laboriosam inventore ab unde minus facilis, fugit, eum expedita dolorem ea repellat ut temporibus.</p>
                </div>
            </div>
        </>
    )
}

export default ProductView