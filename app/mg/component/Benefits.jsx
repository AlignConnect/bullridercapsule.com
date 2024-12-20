import React from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Noto_Serif_Devanagari } from "next/font/google";
import dynamic from 'next/dynamic';

const Bullflip = dynamic(() => import('./FlipkartandAmazon'), {
    loading: () => <p>loader</p>
})

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});



const Benefits = () => {
    return (

        <section className={noto.className}>

            <div style={{ background: "#e75b10" }}>
                <h4 className='text-center pt-3 font-bold text-white text-xl' >Bull Rider Capsule के<br /> चमत्कारी लाभ</h4>
                <div style={{ background: "#ffe7ae", fontWeight: "bolder", fontSize: "1.2rem" }} className='text-start px-1 py-2'>

                    <div className='px-3'>
                        <div className='p-1 flex' >
                            <MdKeyboardDoubleArrowRight className='text-[#e75b10] mr-[5px] text-2xl' />
                            यह पुरुष यौन हॉर्मोन टेस्टोस्टेरोन बढ़ाए
                        </div>
                        <div className='p-1 flex'>
                            <MdKeyboardDoubleArrowRight className='text-[#e75b10] mr-[5px] text-2xl' />
                            पार्ट में ढीली पड़ी नसों की मरम्मत करे
                        </div>
                        <div className='p-1 flex'>
                            <MdKeyboardDoubleArrowRight className='text-[#e75b10] mr-[5px] text-2xl' />
                            पार्ट में रॉड जैसी सख्ती और शक्ति दे
                        </div>
                        <div className='p-1 flex'>
                            <MdKeyboardDoubleArrowRight className='text-[#e75b10] mr-[5px] text-2xl' />
                            2 मिनट की टाइमिंग को घंटो ने बदले
                        </div>
                        <div className='p-1 flex'>
                            <MdKeyboardDoubleArrowRight className='text-[#e75b10] mr-[5px] text-2xl' />
                            स्ट्रेंथ, एनर्जी और स्टैमिना बूस्ट करे
                        </div>
                        <div className='p-1 flex'>
                            <MdKeyboardDoubleArrowRight className='text-[#e75b10] mr-[5px] text-2xl' />
                            शारीरिक तथा मानसिक थकान दूर करे
                        </div>
                        <div className='p-1 flex'>
                            <MdKeyboardDoubleArrowRight className='text-[#e75b10] mr-[5px] text-2xl' />
                            मर्दानगी बढ़ाकर यौन प्रदर्शन सुधारे
                        </div>
                        <div className='p-1 flex'>
                            <MdKeyboardDoubleArrowRight className='text-[#e75b10] mr-[5px] text-2xl' />
                            धातु संबंधित अन्य यौन रोगों में असरदार
                        </div>
                    </div>

                    <section>
                        <div className='pb-2 relative '>
                            <div className='absolute flex justify-end right-[-7.9rem] md:right-[-7rem] top-[-25%]' style={{ transform: "translate(-50% , -50%)" }}>
                                <img src="/main/bra_images/Untitled-4-min.png" alt="ngfho" className='w-1/2' loading="lazy" />
                            </div>

                            <div className='w-full title_x_1'>
                                <div className='_25_width'>
                                    <img src="/main/bra_images/pro5.webp" alt="no" loading="lazy" />
                                </div>
                                <div className='text-black text-[15px] py-2 text-center w-[85%]' style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    <span className="italic block font-bold text-[22px]">Place your<br /> order today!</span>
                                    <span className="text-sm block">Hurry!! Suplies are limited! order now and avail the offer</span>
                                </div>
                            </div>
                        </div>

                    </section>

                </div>
            </div>

            {/* <div className="w-full text-center my-3">
                <a href="#form"><img src="/main/hft_images/ordernow_00000.gif" alt="pic" className="w-[45%] md:w-[30%] mx-auto" loading='lazy' /></a>
            </div> */}

            <Bullflip />

            <div className='pt-3' style={{ textAlign: "center" }}>
                <div className='flex items-center justify-center gap-2  w-100'>
                    <img src="/main/bra_images/100.png" alt="no" className='mx-1' style={{ width: "13%" }} />
                    <p className="text-start w-[70%] text-[19px]" >100%  Ayurvedic Product</p>
                </div>
                <div className='flex items-center justify-center gap-2 mb-1 mt-2 w-100'>
                    <img src="/main/bra_images/effects.png" alt="no" className='mx-1' style={{ width: "13%" }} />
                    <p className="text-start w-[70%] text-[19px]" >No side effects</p>
                </div>
                <div className='flex items-center justify-center gap-2 w-100'>
                    <img src="/main/bra_images/certified.png" alt="no" className='mx-1' style={{ width: "16%" }} />
                    <p className="text-start w-[70%] text-[19px]" >Certified by Ayus, GMP, ISO</p>
                </div>
            </div>

            <div className="mt-3" style={{ background: "#fef7dd", border: "1px solid #ffad00", borderRadius: "10px" }} >
                <p className="p-2 font-bold text-lg">तो देर किस बात की यौन जीवन में खुशहाली की तरफ अपना पहला कदम बढ़ाएं, एक्सपर्ट से फ्री में सलाह पाए !</p>
            </div>





        </section>
    )
}

export default Benefits