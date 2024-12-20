import React, { Suspense, lazy, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import reviewsData from '../../reviews.json';
import { Poppins } from 'next/font/google';
import Image from 'next/image';;


const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const FlipAmazon = lazy(() => import('./FlipAmazon'));
const YoutubeFrame = lazy(() => import('../../commonUse/Youtubefile/YoutubeFrame'));



const CustomerReview = () => {




    return (
        <div className='w-full'>
            <div className='w-full pt-5 my-5'>
                <h1 className=' bg-[#212123] pt-4 text-white text-center text-2xl md:text-[2.15rem] mb-0 leading-tight font-bold'>क्या कहते है कस्टमर<br />
                    <span className='text-[#f1bc78]'> BULL RIDER CAPSULE</span><br /> के बारे में
                </h1>
                <div className='px-3 pt-5 bg-gray-400'>
                    <Carousel showStatus={false} infiniteLoop={true} autoPlay showThumbs={false} className='youtubeArrow'>

                        <YoutubeFrame vid={"pfssa1W8HFs"} />
                        <YoutubeFrame vid={"4NuZgpTKozY"} />




                    </Carousel>

                </div>

                <Suspense fallback={<p>loading</p>}>
                    <FlipAmazon />
                </Suspense>

                <div className="mb-5">
                    <h1 className="bg-[#d59c52] text-center pt-3 pb-1 text-2xl font-bold text-black">What Our Customers Say</h1>
                </div>

                <Carousel showStatus={false} infiniteLoop={true} autoPlay showThumbs={false} showIndicators={false} className='text-black'>
                    {reviewsData.map((e, key) => (
                        <div className="bg-gradient-to-b from-white from-15% via-[black] via-0% to-[black] to-85% h-full grid grid-flow-row justify-between px-5 border-white border " key={key}>

                            <div className='w-[6rem] mx-auto h-[6rem]' >
                                <Image src={e.profile_photo} alt="pic" width={100} height={100} className='rounded-lg' loading='lazy' loader={<p>wait</p>} />
                            </div>
                            <div className={`flex flex-col justify-between text-white ${poppins.className}`}>
                                <p className="px-3 mt-2 mb-5 ">{e.comment}</p>
                                <h3 className="py-3 border-t border-white font-semibold text-2xl">{e.name}</h3>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>


        </div>
    )
}
export default CustomerReview; 