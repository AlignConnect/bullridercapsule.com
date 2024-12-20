import Image from 'next/image';
import { Noto_Serif_Devanagari, Poppins } from 'next/font/google';



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

function Science() {
    return (<div>
        <div className='bg-lightblue'>
            <div className='w-full max-w-7xl mx-auto px-3 py-8'>
                <p className={`${noto.className} text-justify text-[1.1rem] md:text-[1.5rem]`}>
                    जी हाँ दोस्तों, अगर लिंग छोटा, ढ़ीला, पतला है या फिर सेक्स करते समय कुछ ही झटको में वीर्य निकल जाता है तो आपको चाहिए Bull Rider Capsule का साथ। यह कोई आम औषधि नहीं है। इसे विशेष तौर पर लिंग साइज और सेक्स अवधि बढ़ाने के लिए अफ्रीकन मूल की प्रीमियम क्वालिटी जड़ीबूटियों से तैयार किया गया है।
                </p>

                <div className='grid md:grid-cols-2 grid-rows-1 gap-3 items-center justify-center text-center'>
                    <div className='ml-auto'>
                        <Image className='min-h-[200px]' src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b15a493b-6d72-42b6-7f7e-823c3de72d00/public"} width={550} height={500} alt='bullrider_img' loading='lazy' />
                    </div>
                    <div className=''>
                        <div className={`${poppins.className} md:leading-10 leading-9`}><span className='font-extrabold text-[1.7rem] md:text-[2rem]'>इस वजह से हुआ</span><br />
                            <span className='text-orange-900 italic font-extrabold text-[2.7rem] md:text-[3.2rem]'>BULL RIDER</span><br /><span className='font-extrabold text-[1.7rem] md:text-[2rem]'> का निर्माण-</span></div>
                    </div>
                </div>

                <ul className={`${noto.className} py-3 text-[1.1rem] md:text-[1.5rem] space-y-3  list-disc list-outside text-justify `}>
                    <li>
                        हमारे विज्ञानिको ने रिसर्च किया की आखिर अफ्रीकन पुरुषों के लम्बे-मोटे लिंग का राज क्या है तो पता चला की वहां की प्राकृतिक बूटियां उनके बड़े लिंग और फौलादी बॉडी का निर्माण करती है।
                    </li>
                    <li>
                        जी हाँ Withania somnifera, Asphaltum, Chlorophytum borivilianum, Crocus sativus, Tribulus terrestris नामक कुछ विशेष जड़ीबूटियां है जिनका इस्तेमाल वह के पुरुष करते है और लम्बे-मोटे लिंग से अपनी महिला पार्टनर को असली चरमसुख देते है।
                    </li>
                    <li>
                        भारतीय पुरुषों के लिंग में ताकत भरने के लिए एवं शीघ्रपतन की समस्या मिटाने के लिए इन जड़ीबूटियों को एक्सपोर्ट कराकर भारत में इस दवा को बनाया गया ताकि फौलादी लिंग के साथ हमारे लोग भी लम्बे समय तक सेक्स कर पाए और अपनी महिला साथी को संतुष्टि दे सकें।
                    </li>
                </ul>

            </div>
        </div>
    </div>
    )
}

export default Science;