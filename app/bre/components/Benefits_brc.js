import { Poppins } from 'next/font/google'
import Image from 'next/image';

import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

function Benefits_brc() {
    return (
        <div className={noto.className}>
            <div className='bg-[#0198e1] '>
                <div className='w-full max-w-7xl mx-auto'>
                    <div className={`${poppins.className} text-2xl md:text-4xl text-center text-white font-semibold py-3 md:py-5`}>
                        इसे खाये और पाए-
                    </div>
                </div>
            </div>
            <div className='w-full max-w-7xl mx-auto'>
                <video className='py-2 w-[100%] md:w-[80%] mx-auto ' autoPlay muted loop src={"/main/bre_images/benefits_video.mp4"} width={400} height={500} alt='bigger_penis' />
            </div>
            <div className="bg-cover relative z-10">

                <div className='absolute top-0 left-0 w-full h-full z-[-1]'>
                    <Image
                        src={'/main/bre_images/background.jpg'}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        alt="Position Background"
                        loading='lazy'

                    />
                </div>

                <div className=' w-full max-w-7xl mx-auto py-3'>
                    <div>
                        <span className={`${poppins.className} md:text-6xl text-2xl font-extrabold items-end`}>&rdquo;</span>
                        <div className={`${poppins.className} w-full font-extrabold px-2`}>
                            <span className={`${poppins.className} md:text-4xl text-xl`}>देर न करें</span><br /><span className='md:text-8xl text-5xl'>BULL RIDER</span><br /><span className='md:text-7xl text-5xl text-red-600'>CAPSULE</span>
                        </div>
                        <div className='-mt-8 md:-mt-40'>
                            {/* <Image className='py-2 mx-auto min-h-[150px]' src={"/main/bre_images/bull_rider_cap.png"} width={500} height={500} alt='bull_rider_cap' loading='lazy' /> */}

                            <img className='py-2 mx-auto min-h-[150px]' src={"/main/bre_images/bull_rider_cap.png"} alt='bull_rider_cap' loading='lazy' />

                        </div>

                        <div className='text-[1.4rem] md:text-5xl text-center pt-10 font-extrabold text-[#057880]'>के इस्तेमाल से उन पुरुषों में शामिल हो जाएँ जिन्हे अपने <span className='text-red-600'>सुडौल लिंग</span> और <span className='text-red-600'>दमदार सेक्स टाइमिंग </span>पर गर्व है।<span className={`${poppins.className} text-black md:text-5xl text-2xl`}>  &ldquo; </span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits_brc;