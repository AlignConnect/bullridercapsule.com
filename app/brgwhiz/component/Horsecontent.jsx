import dynamic from 'next/dynamic';
import { Noto_Serif_Devanagari, Poppins } from 'next/font/google';
import FlipAmazon from './FlipAmazon';

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const poppin = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const OrderNow = dynamic(() => import('./OrderNow'), {
    loading: () => <p>loader</p>
})


const Horsecontent = () => {
    return (

        <section className={noto.className}>

            <section className='bg-[url("/main/brgwhiz_images/secondbg.webp")]  mx-auto py-5 bg-no-repeat bg-cover'>

                <h1 className='text-xl font-semibold text-center md:w-[80%] mx-auto'>"<span className='text-red-700 font-bold'>Bull Rider Capsule</span> बनाये आपको इस काबिल ताकि आप कर सके पूरी रात धमाकेदार सेक्स और निकाल सके महिला पार्टनर की चीख"</h1>

                <img src="/main/brgwhiz_images/web02.webp" alt="asd" loading='lazy' className='w-[80%] md:w-[60%] mx-auto py-[20px] relative -left-5' />

               

                <FlipAmazon/>

               


                <p className='px-3 text-xl pt-3'>
                    <span className='text-red-700 font-bold'>Bull Rider Capsule</span> एक प्रीमियम फार्मूलेशन है जिसमें अश्वगंधा, शिलाजीत, सफ़ेद मूसली, गोखुरा जैसी 17 उत्कृष्ट जड़ीबूटियों और भस्मों की शक्ति समाहित है। ये टेस्टोस्टेरोन हॉर्मोन लेवल बढ़ाकर, शरीर में एनर्जी और स्टैमिना बढ़ाने, लिंग में भरपूर उफान बढ़ाने तथा सेक्स टाइमिंग उस लेवल तक बढ़ाने में मदद करता है जितने में आप अपने महिला पार्टनर को सेक्स का असली सुख दे सकें।
                </p>

            </section>


            <h1 className={`${poppin.className} pt-3 pb-1 text-white font-bold bg-red-700 text-center text-3xl`}>
                BULL RIDER CAPSULE
            </h1>

            <h1 className={`${poppin.className} pt-4 pb-2 text-center text-2xl font-semibold`}>अन्य उत्पादों से तुलना</h1>


            <section>
                <div className='p-1'>
                    <div className='grid grid-cols-2'>
                        <div>
                            <div>
                                <img src="/main/brgwhiz_images/pclose.webp" alt="asdasd" loading='lazy' className='mx-auto' />
                            </div>
                            <p className='text-center font-bold text-2xl p-3 text-blue-500'>
                                अन्य उत्पाद
                            </p>
                        </div>
                        <div>
                            <div>
                                <img src="/main/brgwhiz_images/ptick.webp" alt="asdasd" loading='lazy' className='mx-auto' />
                            </div>
                            <p className='text-center font-bold text-2xl pt-4 text-blue-500'>
                                बुलराइडर 
                            </p>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <p className='text-2xl text-center font-bold text-red-600 py-1'>सुरक्षित</p>
                    <div className='grid grid-cols-2 items-center text-center text-lg pt-3 pb-1 bg-[#f2f2f2]'>
                        <p>कह नहीं सकते</p>
                        <p>100% सुरक्षित </p>
                    </div>
                </div>

                <div className='py-2'>
                    <p className='text-2xl text-center font-bold text-red-600 py-2'>प्रभावशाली</p>
                    <div className='grid grid-cols-2 items-center text-center text-lg  pt-3 pb-1 bg-[#f2f2f2]'>
                        <p>नहीं, पैसो की बर्बादी </p>
                        <p> वैज्ञानिक रूप से सिद्ध </p>
                    </div>
                </div>

                <div className='py-2'>
                    <p className='text-2xl text-center font-bold text-red-600 py-2'>सफलता की गारंटी</p>
                    <div className='grid grid-cols-2 items-center text-center text-lg  pt-3 pb-1 bg-[#f2f2f2]'>
                        <p>कुछ नहीं</p>
                        <p>100% नहीं तो पैसे वापिस</p>
                    </div>
                </div>

                <div className='py-2'>
                    <p className='text-2xl text-center font-bold text-red-600 py-2'>हर्ब्स</p>
                    <div className='grid grid-cols-2 items-center text-center text-lg  pt-3 pb-1 bg-[#f2f2f2]'>
                        <p>खराब क्वालिटी</p>
                        <p>उच्च क्वालिटी शोधित हर्ब्स</p>
                    </div>
                </div>

                <div className='pt-2 pb-4'>
                    <p className='text-2xl text-center font-bold text-red-600 py-2'>ट्रस्ट फैक्टर</p>
                    <div className='grid grid-cols-2 items-center text-center text-lg  pt-3 pb-1 bg-[#f2f2f2]'>
                        <p>फेक लिस्टिंग, <br /> कोई ऑफिसियल वेबसाइट नहीं</p>
                        <p>ऑफिसियल वेबसाइट, Amazon, Flipkart पर लिस्टिंग</p>
                    </div>
                </div>

            </section>

            <section>



            </section>

        </section>

    )
}

export default Horsecontent