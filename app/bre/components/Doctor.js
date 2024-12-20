import Image from 'next/image'
import React from 'react'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


function Doctor() {
    return (

        <section className={noto.className}>
            <div className="relative">

                <div className='absolute top-0 left-0 w-full h-full z-[-1]'>

                    <Image
                        src={"/main/bre_images/doctor_background.png"}
                        fill
                        sizes='100vw'
                        style={{
                            height: "100%",
                            width: "100%"
                        }}
                        alt='no'
                        className='min-h-[400px]'
                        loading='lazy'
                    />

                </div>

                <div className='w-full max-w-7xl mx-auto py-4'>
                    <div className='bg-[#dbb508] md:w-1/4 w-3/4 mx-auto text-center font-extrabold text-3xl md:text-4xl pt-3 rounded-lg'>
                        डॉक्टर द्वारा प्रस्तावित
                    </div>

                    <Image className='mx-auto py-5 rounded-[50%] min-h-[200px]' src={"/main/bre_images/doctor_image.jpeg"} width={160} height={100} alt='doctor_image' loading='lazy' />

                    <div className='items-center flex justify-center'>
                        <div className={`${poppins.className}  text-white text-2xl text-center`}>
                            Dr. Abhinav Pandey&nbsp;
                        </div>
                        {/* <Image src={"/main/bre_images/verify.svg"} width={25} height={100} alt='doctor_image' loading='lazy' /> */}
                        <img src='/main/bre_images/verify.svg' alt='dsd' loading='lazy' width={25} height={25} />
                    </div>

                    <div className='flex justify-center items-center gap-2 py-2'>
                        <div className='border-r-[1px] px-2 text-center'>
                            <div className={`${poppins.className} text-white text-md md:text-xl font-semibold`}>
                                17 Yrs
                            </div>
                            <div className={`${poppins.className} text-white text-sm md:text-md`}>Experience</div>
                        </div>
                        <div className={`${poppins.className} text-white text-md md:text-xl font-semibold`}>
                            MBBS
                        </div>
                    </div>

                    <div className={`${poppins.className} text-center text-xl md:text-2xl text-white `}> General Physician, Sexologist</div>

                    <div className='text-[1.2rem] md:text-2xl py-7 px-2 text-justify text-white'>
                        Bull Rider Capsule एक प्रीमियम क्वालिटी प्रोडक्ट है जो स्टैमिना, सेक्स टाइमिंग और लिंग का तनाव करने में मदद करता है। इसके इस्तेमाल से शीघ्रपतन, इरेक्टाइल डिस्फक्शन या फिर चाहे किसी भी प्रकार की गुप्त बीमारी हो आसानी से मिट जाती है। इसमें मिश्रित प्रत्येक तत्व सेक्स कमजोरी में असरदार और भरोसेमंद है। इसे खाने से टेस्टोस्टेरोन लेवल बढ़ता है शरीर में ऊर्जा की वृद्धि होती है, बेजान पड़ी लिंग की नसों में ब्लड सर्क्युलेशन बढ़ता है जिससे नसों में जान आने लगती है और ढीले लिंग से राहत मिलती है तथा सेक्स टाइम में सुधार होता है। मैं उन पुरुषों को Bull Rider Capsule खाने की सलाह देता हूँ जो डॉक्टर कंसल्टेशन से घबराते या शर्माते है। इसकी मदद से आप घर बैठे अपनी समस्या जड़ से मिटा सकते है।
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Doctor;