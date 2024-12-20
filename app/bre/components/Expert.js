import dynamic from 'next/dynamic';
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader



const YoutubeFrame = dynamic(() => import('../../commonUse/Youtubefile/YoutubeFrame'), {
    loading: () => <p>loader</p>
})

function Expert() {
    return (<div>
        <div className="bg-center bg-no-repeat bg-cover py-5 relative">
            <div className='absolute top-0 left-0 w-full h-full z-[-1]'>
                <Image
                    src={'/main/bre_images/youtube_expert_background.jpg'}
                    alt="Position Background"
                    fill
                    className='min-h-[300px]'
                    loading='lazy'

                />
            </div>


            <div className="md:w-[47rem] mx-auto w-full">
                <h1 className=' pt-4 text-black text-center text-2xl md:text-[2.15rem] mb-3 leading-tight font-bold'>क्या कहते है एक्सपर्ट्स<br />
                    <span className='text-[#b00000]'> BULL RIDER CAPSULE</span><br /> के बारे में
                </h1>
                <div className='pt-5 '>
                    <Carousel showStatus={false} infiniteLoop={true} autoPlay showThumbs={false} className='youtubeArrow' showArrows={false}>

                        <YoutubeFrame vid={"Lq6M5zPmhOc"} />

                        <YoutubeFrame vid={"rpt_5bkicpY"} />

                    </Carousel>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Expert;