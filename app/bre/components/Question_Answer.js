import { Poppins } from 'next/font/google'


const Accordion = dynamic(() => import('./Accordion'), {
    loading: () => <p>loader</p>
})

import { Noto_Serif_Devanagari } from "next/font/google";
import dynamic from 'next/dynamic';

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

function Question_Answer() {

    const items = [
        {
            title: 'क्या इससे नुकसान भी हो सकता है?',
            content: "जी नहीं, Bull Rider Capsule एक pure आयुर्वेदिक दवा है... इसमें किसी प्रकार के केमिकल का इस्तेमाल नहीं किया गया है इसलिए मात्रा में इस्तेमाल करने से इसका कोई दुष्प्रभाव नहीं है कृपया ओवरडोज़ से बचें।"
        },
        {
            title: 'Bull Rider की अनुशंसित खुराक क्या है?',
            content: "1 कैप्सूल सुबह-शाम भोजन के बाद गुनगुने दूध या पानी के साथ लें।"
        },
        {
            title: 'Bull Rider के एक पैकेट में कितने गोली होती हैं?',
            content: "Bull Rider के एक पैकेट में 60 कैप्सूल होते है जो एक महीने का कोर्स है।"
        },
        {
            title: 'क्या मैं दवा पाने के बाद पैसे दे सकता हूँ?',
            content: "जी हाँ, आप दवा रिसीव करने के बाद भुगतान कर सकते है। आप निश्चिंत रहे अपना सही प्रोडक्ट पाने के बाद भुगतान की सुविधा भी है और आप ऑनलाइन खरीद पर बचत भी कर सकते है।"
        },
        {
            title: 'क्या इसे विदेश से मंगवाया जा सकता है?',
            content: "जी नहीं, यह उत्पाद सिर्फ भारत में डिलीवर किया जाता है, इसे भारत के किसी भी कोने से आर्डर कर सकते है।"
        },
        {
            title: 'यह मुझे कितने दिन में मिल जायेगा?',
            content: "इस कंपनी की डिलीवरी सुविधा काफी अच्छी है आप इसे आर्डर करने के 4 के अंदर पुरे सुरक्षित पैक को रिसीव करेंगे। "
        },
        {
            title: 'इससे कितन लाभ मिल सकता है?',
            content: "वैसे तो यह प्रत्येक रोगी पर अलग-अलग प्रभाव डालता है परन्तु फिर भी सभी को कुछ ही दिनों में अंतर महसूस होने लगता है। मैं आप लोगों को इसका बेहतर परिणाम पाने के लिए लगातार 3 महीने सेवन करने की सलाह दूंगा।"
        },
        {
            title: 'क्या सेक्स की अवधि बढ़ जाएगी?',
            content: "जी हाँ, इसे खाने के बाद लिंग की नसे अच्छे से पंप होंगी लिंग में शानदार सख्ती मिलेगी  जो लम्बे समय तक बनी रहेगी। इससे वीर्य स्खलन की अवधि बढ़ जाएगी और आप लम्बे समय तक सेक्स कर सकते है। "
        },
    ];

    return (

        <section className={noto.className}>
            <div className='bg-gray-200'>
                <div className='w-full max-w-7xl mx-auto '>
                    <div className='md:grid grid-cols-2 items-center justify-center py-4'>
                        {/* <Image className='px-2 min-h-[200px]' src={"/main/bre_images/sevan_vidhi_brc.png"} width={500} height={500} alt='sevan_vidhi_brc' loading='lazy' /> */}
                        <img className='px-2 min-h-[200px]' src={"/main/bre_images/sevan_vidhi_brc.png"} alt='sevan_vidhi_brc' loading='lazy' />
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

            <div className='bg-[#ffeac1]'>
                <div className={`${poppins.className} text-3xl md:text-4xl text-[#a10000] text-center font-semibold py-5`}>
                    मरीजों द्वारा सर्वाधिक पूछे जाने वाले प्रश्न !
                </div>
                <div className='w-full max-w-5xl mx-auto '>

                    <Accordion items={items} />

                </div>
            </div>
        </section>

    )
}

export default Question_Answer;