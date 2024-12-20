import Image from 'next/image'
import React from 'react'

function Sevan_vidhi() {
    return (
        <div className='bg-gray-200'>
            <div className='w-full max-w-7xl mx-auto '>
                <div className='md:grid grid-cols-2 items-center justify-center py-4'>
                    <Image className='px-2' src={"/main/bre_images/sevan_vidhi_brc.png"} width={500} height={500} alt='sevan_vidhi_brc' loader={<p>wait</p>} loading='lazy' />
                    <div className='px-1'>
                        <div className='text-4xl md:text-5xl py-2 font-extrabold'>
                            सेवन विधि-
                        </div>
                        <div className='text-[1.2rem] md:text-2xl text-justify'>
                            Bull Rider Capsule का सेवन बहुत ही आसान है। बेहतर सेक्स टाइमिंग, रॉक हार्ड इरेक्शन और शारीरिक शक्ति के लिए 1 कैप्सूल सुबह-शाम 1 गिलास गुनगुने दूध या पानी के साथ लें ! बेहतर परिणाम के लिए दूध के साथ इस्तेमाल का सुझाव दिया गया है।
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sevan_vidhi