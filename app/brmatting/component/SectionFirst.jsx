import { Noto_Serif_Devanagari, Poppins } from 'next/font/google';
import FlipAmazon from './FlipAmazon';
import dynamic from 'next/dynamic';

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

const Big = dynamic(()=> import('@/app/commonUse/bigbillion/Big'));

const SectionFirst = () => {
    return (
        <section className={noto.className}>

            <div className='pt-3 pb-0 px-4 text-2xl bg-[#fff001] text-center font-bold'>
                <span className='text-red-500'>Bull Rider Capsule</span>  से अपनी शीघ्रपतन और ढीले लिंग की समस्या को मिटायें, हाई पावर और स्टैमिना से करें घंटो सेक्स!
            </div>

            <div className="w-full bg-white pt-5 mx-auto mb-2">
                <div className="text-center">
                    <div className="  inline-block text-left" >
                        {/* <a className={`${poppin.className} bg-[#213361] text-lg font-semibold  py-3 px-8 w-full rounded-full hover:bg-[#1e2f5a] shadow-lg shadow-[#213361]/50 transition-colors text-white`} href='#form'>
                            ORDER NOW
                        </a> */}
                        {/* <FlipAmazon /> */}

                            <Big />


                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 itams-center px-2 py-5 min-h-[200px]'>
                <div><img src="/main/brgwhiz_images/girl.webp" alt="sadasd" loading='lazy' className='w-[80%] mx-auto' /></div>
                <div><img src="/main/brgwhiz_images/newline.webp" alt="sadasd" loading='lazy' className='w-full' /></div>
            </div>


            <div className='px-4'>
                <p className='text-[#3494fe] font-bold text-xl text-center'>
                    "अगर पार्टनर के सामने शर्मिंदगी से बचना चाहते है तो आजमायें बुलराइडर , पाएं फौलादी लिंग और लम्बी से टाइमिंग"
                </p>

                <p className='text-xl py-4'>
                    ज्यादातर महिलाएं अपने पुरुष पार्टनर के सेक्स प्रदर्शन से संतुष्ट नहीं होती क्योंकि उनकी लिंग में दम नहीं होता या उनकी सेक्स टाइमिंग कम होती है फिर भी रिश्ते के लिए खुश रहने का नाटक करती है। वही कुछ महिलाये वास्तविक सेक्स संतुष्टि के लिए अपने पार्टनर को धोखा देकर दूसरे पुरुष के साथ सम्बन्ध बना लेती है। ऐसे में प्रत्येक पुरुष को चाहिए की वो बेड पर अपना दमखम दिखाएँ जिससे उनकी महिला पार्टनर संतुष्ट रहे और रिश्ते में प्यार बना रहे।
                </p>
            </div>



        </section>)
}

export default SectionFirst