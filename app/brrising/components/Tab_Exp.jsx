import dynamic from 'next/dynamic';
import Image from 'next/image'
import React from 'react'

const Form = dynamic(() => import('./Form'), {
    loading: () => <p>loader</p>
});

function Tab_Exp() {
    return (
        <div className="">

            <div className=" text-[1.05rem] sm:text-2xl font-bold text-center leading-relaxed px-3 bg-yellow-400 py-5 fontArya">
                तो देर किस बात की यौन जीवन में खुशहाली की तरफ अपना पहला कदम बढ़ाएं, एक्सपर्ट से फ्री में सलाह पाए !
            </div>

            <div className="relative ">
                <div className='relative z-10 w-full py-5 sm:py-10 max-w-md mx-auto px-3'>

                    <h1 className=" text-3xl sm:text-4xl text-white  text-center  font-extrabold">कॉल पर विशेषज्ञ डॉक्टरों से मुफ्त सलाह के लिए फॉर्म भरें!</h1>

                    <div className=" max-w-5xl mx-auto  mt-5">
                        <Form />
                    </div>

                </div>
                <Image src='/main/brcexa_images/bg6.webp' fill loading='lazy'  alt='pic' />
            </div>
        </div>
    )
}

export default Tab_Exp