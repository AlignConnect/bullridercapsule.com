import Image from 'next/image'
import React from 'react'

function Sevan_kese_kare() {

  


    return (
        <div className='w-full relative'>
            <div className='relative z-10 py-5 sm:py-10 px-5 sm:px-7 '>
                <div className="text-center">
                    <p className="bg-red-600 text-white text-3xl font-bold pt-3 px-10 inline-block clippath">सेवन विधि-</p>
                </div>

                <h1 className="font-bold text-[10vw] sm:text-7xl mt-10 leading-none "> BULL RIDER</h1>
                <div className="grid sm:grid-cols-12 items-end">
                    <div className="sm:col-span-5">
                        <p className="text-[9vw] sm:text-6xl font-normal sm:mt-5">CAPSULE</p>

                        <p className="text-[1.1rem] sm:text-xl text-justify"><span className="text-red-600 font-bold ">Bull Rider Capsule </span> का सेवन बहुत ही आसान है। बेहतर सेक्स टाइमिंग, रॉक हार्ड इरेक्शन, जोश-स्टैमिना और शारीरिक शक्ति के लिए 1 कैप्सूल सुबह-शाम 1 गिलास गुनगुने दूध या पानी के साथ लें ! बेहतर परिणाम के लिए दूध के साथ इस्तेमाल का सुझाव दिया गया है। </p>
                    </div>
                    <div className="sm:col-span-7 ">

                    <img src='/main/brcexa_images/prod.webp' alt="pic" width='100%' height='100%' loading='lazy' className='mt-5 sm:mt-0' />
                    </div>
                </div>

            </div>
            <Image src='/main/brcexa_images/bg7.webp' fill loading='lazy'  alt='pic' />
        </div>
        //  <div className="text-center text-white font-bold ">
        //  <a href="#form" className="inline-block text-xl bg-gradient-to-t from-red-500 to-red-700 px-1 rounded-full py-3 pop_imagehfv">
        //      <span className=" bg-gradient-to-b from-red-500 to-red-700 px-5 rounded-full py-2">ORDER NOW</span>
        //  </a>
        // </div>
    )
}

export default Sevan_kese_kare