import React, { Suspense, lazy } from 'react'
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const LazyYoutube = lazy(() => import('./YoutubeLink'));

const Experts = () => {

    return (
        <div>
            <div className="w-full z-10 relative bg-center bg-no-repeat bg-cover py-5">

                <div className='absolute w-full h-full top-0 left-0 z-[-1]'>
                    <Image
                        src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/12519427-9a56-4b54-4adc-036b6b7e1b00/public"}
                        fill
                        style={{
                            height: "100%",
                            width: "100%"
                        }}
                        loading='lazy'
                        loader={<p>wait</p>}
                        alt='no'
                    />
                </div>

                <div className=" md:w-[47rem] mx-auto w-full px-2">
                    <h1 className='pt-4 text-black text-center text-2xl md:text-[2.15rem] mb-3 leading-tight font-bold'>क्या कहते है एक्सपर्ट्स<br />
                        <span className='text-[#b00000]'> BULL RIDER CAPSULE</span><br /> के बारे में
                    </h1>
                    <div className='pt-5 '>
                        <Carousel showStatus={false} infiniteLoop={true} autoPlay showThumbs={false} showArrows={false} className='youtubeArrow'>

                            <Suspense fallback={<p>load</p>}>
                                <LazyYoutube vid={"Lq6M5zPmhOc"} />
                            </Suspense>

                            <Suspense fallback={<p>load</p>}>
                                <LazyYoutube vid={"rpt_5bkicpY"} />
                            </Suspense>

                        </Carousel>

                    </div>
                </div>
            </div>



            <div className="w-full bg-black py-5">
                <div className=" md:w-[47rem] mx-auto w-full px-2">
                    <h1 className='  pt-4 text-white text-center text-2xl md:text-4xl mb-3 font-bold'>Expert's Opinions & Recommendations
                    </h1>
                    <div className='px-3 py-5 bg-white '>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                            <div className="text-center">
                                <Image src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c95e2289-c0fa-4aba-e8a3-63dd95a70300/public' className='w-[80%] mx-auto md:w-full mb-4' width={500} height={500} alt='expertPic' loader={<p>wait</p>} loading='lazy' />
                                <h1 className="text-2xl font-bold">Dr. Arun Kumar</h1>
                                <p>33 years of experience</p>
                                <p>MD - Alternate Medicine,</p>
                                <p>BAMS Ayurveda, Sexologist</p>
                            </div>
                            <div className=" md:col-span-2">
                                <h1 className="text-[1rem] text-justify md:text-xl  text-black">Bull Rider Capsule is a Powerful sex timing and penis size booster, Most important, it has no chemical substance and is totally natural formulation. It has all herbs with aphrodisiac properties that help to boost testosterone, produce nitric oxides, and improve blood flow in the penis as a result men get rock-hard erections and sex better. You can trust one and see results yourself.</h1>
                                <div className="flex w-1/2 items-center gap-3 mt-4 ml-auto">
                                    <div className="w-full">
                                        <Image src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/36188b07-6960-47ec-47d3-17ae155dd100/public' width={1000} height={1000} alt='certi' loader={<p>Wait</p>} loading='lazy' />
                                    </div>
                                    <div className="w-full">
                                        <Image src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b4bc8792-3f22-4470-90da-cb1c6ed97200/public' width={1000} height={1000} alt='sign' loader={<p>Wait</p>} loading='lazy' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-2xl md:text-5xl mt-7 md:mt-10 font-extrabold leading-tight md:leading-snug text-center text-white">आपको निर्णय लेना होगा अभी तुरंत ही नीचे दिए हुए फॉर्म में जानकारी भरें और BULL RIDER ऑर्डर करें</h1>
                </div>
            </div>
        </div>
    )
}
export default Experts;