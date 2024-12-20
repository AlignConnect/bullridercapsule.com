import { Bebas_Neue, Noto_Serif_Devanagari } from "next/font/google";
import Image from 'next/image';
import { useGlobalContext } from '@/app/statemanage/context';

const bebas = Bebas_Neue({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400']
});

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const ExpertSayDivide = () => {

    const { hours, minutes, remainingSeconds } = useGlobalContext();


    const listAsk = [
        { title: 'टेस्टोस्टेरोन का निर्माण करें', content: 'इस्तेमाल से पहले ही दिन से यह टेस्टिकल्स को मजबूती देना शुरू करता है और टेस्टोस्टेरोन हॉर्मोन के निर्माण को तीव्र करता है। ये हॉर्मोन लिंग में हार्ड इरेक्शन पाने और लिंग बृद्धि के लिए उपयोगी होता है।', image: '/main/brk_images/pb_1.gif' },
        { title: 'पुरानी समस्या से रिकवरी शुरू', content: 'यह धीरे-धीरे परन्तु समस्या को जड़ से मिटाने के लिए प्रथम चरण से रिकवरी शुरू करता है। इसके प्रत्येक गुणकारी तत्व कमजोरी मिटाकर शरीर को जोशीला और ताकतवर बनाते है।', image: '/main/brk_images/pb_2.gif' },
        { title: 'सेक्स टाइम बढ़ाए', content: 'अब सेक्स टाइमिंग बढ़ाने का चरण चालू है। दिमाग मे सेरोटॉनिन रिलीज होना, सेक्स में फोकस बढ़ाना और सेक्स टाइमिंग को निचली स्तर से उच्च स्तर पे ले जाना जिससे पुरुष सेक्स को बेहतर तरीके से एन्जॉय करे।', image: '/main/brk_images/pb_3.gif' },
        { title: 'लिंग आकार में वृद्धि', content: 'इस चरण तक सभी जरुरी हॉर्मोन बन जाते है। नाइट्रिक ऑक्साइड का लेवल बढ़ता है। लिंग की कमजोर नसे मजबूत होकर ज्यादा फूलती है। लिंग की तंग चमड़ी ग्रो करती है व लिंग का साइज और कड़कपन बढ़ने लगता है।', image: '/main/brk_images/pb_4.gif' },
    ]

    return (
        <section className={noto.className}>
            <div className='w-full my-5'>
                <h1 className=' bg-[#212123] pt-4 text-white text-center text-3xl md:text-[2.15rem] mb-0 leading-tight font-bold'>एक्सपर्ट्स ने बुल राइडर के <br /> प्रभाव को 4 चरण में बांटा है। </h1>

                {listAsk.map((e, key) => {
                    return <div className="py-5 mx-3 rounded my-5 border-b-2 border-black text-black" key={key}>

                        <div className="flex items-center justify-between w-100">
                            <div className="flex items-center gap-2">
                                <div className={`text-[#e00000] ${bebas.className}`}>
                                    <h1 className="font-bold text-[4rem] text-center m-0 leading-none">{key + 1} </h1>
                                    <h4 className="m-0 font-bold -mt-2">चरण</h4>
                                </div>
                                <h5 className="text-black text-[1.9rem] font-extrabold m-0 ">{e.title}</h5>
                            </div>
                            <div className="">
                                <Image src={e.image} alt={`icon${key}`} width={110} height={110} className='rounded-full' style={{ transform: key === 3 ? 'scaleX(-1)' : '' }}
                                    loading='lazy'
                                />
                            </div>
                        </div>
                        <p className="m-0 mt-3 font-bold text-[1.1rem] text-center">{e.content}</p>
                    </div>
                })}

                <img
                    src={'/main/brk_images/product5.jpg'} alt={'productImage'}
                    loading="lazy"
                    className="w-full min-h-[250px]"
                />

                <h1 className='text-[#d59c52] text-2xl font-bold text-center mt-5'>Hurry Up... <span className='text-black'> Limited Offer</span></h1>
                <h1 className='text-[red] text-2xl font-bold text-center'>{`${hours}:${minutes}:${remainingSeconds}`}</h1>


            </div>
        </section>

    )
}
export default ExpertSayDivide;
