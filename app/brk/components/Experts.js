import { Carousel } from 'react-responsive-carousel';


import { Noto_Serif_Devanagari } from "next/font/google";
import dynamic from 'next/dynamic';

const YouTubeFrame = dynamic(() => import('./../../commonUse/Youtubefile/YoutubeFrame'), {
    loading: () => <p>loader</p>
});

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Experts = () => {



    return (
        <section className={noto.className}>
            <div className='w-full py-5'>
                <h1 className=' bg-[#212123] pt-4 text-white text-center text-2xl md:text-[2.15rem] mb-0 leading-tight font-bold'>क्या कहते है एक्सपर्ट्स<br />
                    <span className='text-[#f1bc78]'> BULL RIDER CAPSULE</span><br /> के बारे में
                </h1>
                <div className='px-3 pt-5 bg-gray-400'>
                    <Carousel showStatus={false} infiniteLoop={true} autoPlay showThumbs={false} className='youtubeArrow'>

                        <YouTubeFrame vid={"Lq6M5zPmhOc"} />
                        <YouTubeFrame vid={"rpt_5bkicpY"} />

                    </Carousel>

                </div>

                <div className='my-5 md:mx-5 mx-3'>
                    <h1 className='text-center text-3xl md:text-4xl pt-5 pb-1 font-bold bg-[#212123]'>हेल्थ एक्सपर्ट्स का सुझाया</h1>
                </div>

                <img src="/main/brk_images/expert.jpg"
                    alt="expert"
                    loading='lazy'
                    className='w-full min-h-[200px]'
                />

            </div>
        </section>
    )
}
export default Experts