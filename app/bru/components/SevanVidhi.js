import { Noto_Serif_Devanagari, Poppins } from 'next/font/google';
import Image from 'next/image';

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const poppins = Poppins({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});



function SevanVidhi() {
    return (<div>
        <div className='sevanvidhi'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='py-3 '>
                    <div className={`${poppins.className} w-1/2 py-1 md:w-1/5 mx-auto bg-black text-[#d2ac19] text-center font-semibold text-[2rem] md:text-[3rem]`}>
                        सेवन<span className='text-black bg-[#d2ac19] px-1'>विधि</span>
                    </div>
                </div>
                <Image className='mx-auto px-2 py-5 min-h-[100px]' src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/64e3ee96-a577-4b1f-e379-bced8c208b00/public"} width={1000} height={500} alt='bullrider_product_image' loading='lazy' />
                <p className={`${noto.className} px-2 py-4 text-center text-[1.2rem] md:text-[1.5rem] font-semibold !italic`}>"इसका सेवन बहुत ही आसान है। बेहतर सेक्स टाइमिंग, रॉक हार्ड इरेक्शन और शारीरिक शक्ति के लिए 1 कैप्सूल सुबह-शाम 1 गिलास गुनगुने दूध या पानी के साथ लें ! बेहतर परिणाम के लिए दूध के साथ इस्तेमाल का सुझाव दिया गया है।"</p>
            </div>
        </div>

        <div className='bg-black'>
            <div className='w-full max-w-7xl mx-auto '>
                <Image className='mx-auto px-2 py-5 min-h-[100px]' src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/268177cf-552f-47b7-1873-4c183de48600/public"} width={200} height={500} alt='special_service' loading='lazy' />
                <div className='grid md:grid-cols-2 grid-rows-1 gap-3 items-center justify-center'>
                    <Image className='mx-auto px-2 py-5 min-h-[300px]' src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/028ba234-ba6b-4dee-8592-efeb73bfd700/public"} width={400} height={500} alt='bull_rider_capsule' loading='lazy' />
                    <p className={`${noto.className} text-white px-2 py-4 text-center text-[1.2rem] md:text-[1.8rem] font-semibold`}>उन पुरुषों की लिए जिनकी समस्या गंभीर है और सामान्य गोली असर नहीं कर रही उनके लम्बाई, वजन और उम्र का आंकलन कर हमारे एक्सपर्ट्स द्वारा कस्टमाइज्ड दवा तैयार की जाती है जो समस्या को गारंटी के साथ हल करती है।</p>
                </div>
            </div>
        </div>
    </div>


    )
}

export default SevanVidhi;