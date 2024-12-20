import { Noto_Serif_Devanagari } from "next/font/google";


const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const BullWhy = () => {
    return (
        <section className={noto.className}>
            <div className='px-3 pt-5 text-black'>

                <img src='/main/brk_images/probull.png' alt='ndo' className='w-full min-h-[150px]' loading='lazy' />

                <h1 className='text-5xl text-[red] font-extrabold mb-2 mt-6 text-center'>ही क्यों?</h1>

                <ul className='list-disc list-inside text-xl font-bold'>
                    <li className="">यह 100% सुरक्षित और आयुष मंत्रालय भारत सरकार से प्रमाणित है। </li>
                    <li className="">आप इसको COD पेमेंट सुविधा के साथ आर्डर कर सकते है।</li>
                    <li className="">दस दिनों की मनी बैक गारंटी सुविधा उपलब्ध है।</li>
                    <li className="">समस्या ज्यादा गंभीर होने पर कस्टम प्रोडक्ट तैयार किया जाता है। </li>
                    <li className="">भारत का भरोसेमंद उत्पाद जिसका खुद का ऑफिसियल वेबसाइट है।</li>
                </ul>

                <div className='w-full my-4 relative'>

                    <img src='/main/brk_images/poster.jpg' alt='ndo' className='w-full min-h-[200px]' loading='lazy' />

                    <a className=' text-xl decoration-none absolute text-black bg-[#ffb000] pt-2 px-2 transform translate-x-[-50%] translate-y-[-50%] top-3/4 left-3/4 text-center font-bold w-[8.2rem]'>ऑर्डर करें</a>
                </div>

                <div className='text-black text-[1.15rem] text-justify md:text-xl font-semibold'><span className='text-[#ff0103]'> Bull Rider Capsule</span> एक प्रीमियम क्वालिटी उत्पाद है। यह अन्य उत्पादों से ज्यादा प्रभावशाली और भरोसेमंद है। यह समस्या को जड़ से मिटाने पर काम करता है। <span className=' text-[#ff0103]'> Bull Rider Capsule</span> सभी लैब रिसर्चो में सफल रहा है और पाया गया की इसके सभी तत्व यौन कमजोरी मिटाकर सेक्स टाइमिंग और लिंग का साइज बढ़ाने में उपयोगी है।
                </div>
            </div>
        </section >
    )
}
export default BullWhy;