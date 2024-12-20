import dynamic from 'next/dynamic';
import Image from 'next/image'
const Flip = dynamic(() => import('./FlipAmazon'), {
    loading: () => <p>loader</p>
});
function Hearbs() {

    const list4 = [
        {
            title: 'अश्वगंधा',
            para: 'इसके इस्तेमाल से नाइट्रिक ऑक्साइड का निर्माण होता है, टेस्टोस्टेरोन, पौरुष क्षमता और इरेक्शन में वृद्धि होती है।'
        },
        {
            title: 'शिलाजीत',
            para: 'नेचुरल वियाग्रा के नाम से मशहूर शिलाजीत पुरुषों में जोश, उत्तेजना, स्टैमिना और समय अवधि के विस्तार में मदद करता है।'
        },
        {
            title: 'सफेद मूसली',
            para: 'यह टेस्टोस्टेरोन बढ़ाता है, पार्ट के टिश्‍यूज को ताकत प्रदान करता है, इरेक्शन में सुधार करता है और टाइमिंग बढ़ाता है।'
        },
        {
            title: 'केसर',
            para: 'इसे आयुर्वेद में कामोत्तेजक और बलवर्धक माना गया है। या मूड और स्टैमिना बढ़ाता है जिससे अवधि बढ़ने में मदद करती है।'
        },
        {
            title: 'गोक्षुरा',
            para: 'यह पुरूषों में काम इच्छा को जागृत करता हैं, साथ ही शुक्राणुओं की गुणवत्ता बढ़ाने में भी गोक्षुरा अहम भूमिका निभाता हैं।'
        },
        {
            title: 'शतावरी',
            para: 'शतावरी के उपयोग से टेस्टोस्टेरोन हॉर्मोन, जोश और स्टैमिना में आश्चर्यजनक रूप से वृद्धि देखने को मिलती हैं।'
        },
    ]
    return (
        <div className='w-full relative'>
            <div className=" relative z-10 py-10 text-center px-2 sm:px-5 ">
                <div className="fontPoppins font-bold">
                    <p className=" bg-red-600 px-10 outline-1 inline text-2xl sm:text-4xl text-white py-2 sm:py-1 -outline-offset-4 outline-dashed outline-white">BULL RIDER CAPSULE</p>
                    <p className="text-xl sm:text-3xl mt-3 sm:mt-4 ">में मौजूद जड़ीबूटियां</p>
                </div>

                <div className="fontArya mt-5 space-y-3 sm:space-y-4 text-[1rem] sm:text-2xl">
                    {list4.map((e, key) => {
                        return <div className="" key={key}>
                            <p className="inline-block bg-green-700 py-1 text-white px-5 rounded-full  ">{e.title}</p>
                            <p className="mt-1 sm:mt-2">{e.para}</p>
                        </div>
                    })}
                </div>
                <div className="mt-5">

                <Flip/> 
                </div>
            </div>
            <Image src='/main/brcexa_images/bg3.webp' fill loading='lazy'  alt='pic' />
        </div>
    )
}

export default Hearbs