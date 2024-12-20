import dynamic from "next/dynamic"
import { Noto_Serif_Devanagari } from "next/font/google";

const Bullflip = dynamic(() => import('./FlipkartandAmazon'), {
    loading: () => <p>loader</p>
})


const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const YoutubV = dynamic(() => import('@/app/commonUse/Youtubefile/YoutubeFrame'), {
    loading: () => <p>loading</p>
});

const Youtube = () => {
    return (


        <section className={noto.className}>

            <section className="p-[2px] mt-2">
                <div className='text-center pt-2 bg-[#051127]'>
                    <div className='py-2 text-[1.4rem] font-bold specing-[2rem]'>
                        <span className="text-white">जानिए क्या कहते है सेलिब्रिटी <br />Bull Rider Capsule के बारे में</span>
                    </div>

                    <div className="w-full px-2 pb-3" >
                        <div className='w-full rounded-[10px] m-0' style={{ border: "2px solid #e75b10" }}>
                            <div style={{ border: "1px solid #e75b10" }} className="rounded-[10px] m-0">
                                <YoutubV vid={"KMLDM3VjJFE?si=8hKBHhC8sSaWzuyk"} />
                            </div>
                        </div>
                    </div>
                </div>


                <section>
                    <div className='pb-2 relative '>
                        <div className='absolute flex justify-end right-[-7.9rem] md:right-[-7rem] top-[-30%]' style={{ transform: "translate(-50% , -50%)" }}>
                            <img src="/main/bra_images/Untitled-4-min.png" alt="no" className='w-1/2' loading="lazy" />
                        </div>

                        <div className='w-full title_x_1'>
                            <div className='_25_width'>
                                <img src="/main/bra_images/pro4.webp" alt="no" loading="lazy" />
                            </div>
                            <div className='text-black text-[15px] py-2 text-center w-[85%]' style={{ fontFamily: 'Poppins, sans-serif' }}>
                                <span className="italic block font-bold text-2xl">Place your<br /> order today!</span>
                                <span className="text-sm block">Hurry!! Suplies are limited! order now and avail the offer</span>
                            </div>
                        </div>
                    </div>

                </section>


                {/* <div className="w-full text-center my-2">
                    <a href="#form"><img src="/main/hft_images/ordernow_00000.gif" alt="pic" className="w-[45%] md:w-[30%] mx-auto" loading='lazy' /></a>
                </div> */}

                <Bullflip />

                <p className="px-2 text-lg font-semibold">
                    <span className="text-[#ea8360]" >Bull Rider Capsule </span>
                    का नियमित सेवन करने पर पुरुष जोशीले बनने लगते है। पार्ट में किसी लोहे के रॉड जैसी सख्ती मिलने लगती है जो घंटो तक बनी रहती है। टाइमिंग और स्टैमिना में जोरदार बढोत्तरी होती है जिससे कोई भी पुरुष नॉनस्टॉप प्रदर्शन कर सकता है।
                </p>

            </section>
        </section>

    )
}

export default Youtube