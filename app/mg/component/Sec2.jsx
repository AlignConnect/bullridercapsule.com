import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Noto_Serif_Devanagari } from "next/font/google";
import dynamic from 'next/dynamic';


const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Bullflip = dynamic(() => import('./FlipkartandAmazon'), {
    loading: () => <p>loader</p>
})


const aryurvedic_list = [
    {
        id: 1,
        name: 'अश्वगंधा',
        nameId: 'ashwagandha',
        image: 'as-min.png',
        content: 'इसके इस्तेमाल से नाइट्रिक ऑक्साइड का निर्माण होता है, टेस्टोस्टेरोन, पौरुष क्षमता और इरेक्शन में वृद्धि होती है। '
    },

    {
        id: 2,
        name: 'शिलाजीत',
        nameId: 'shilajit',
        image: 'shilajit-min.png',
        content: ' नेचुरल वियाग्रा के नाम से मशहूर शिलाजीत पुरुषों में जोश, उत्तेजना, स्टैमिना और समय अवधि के विस्तार में मदद करता है।'
    },
    {
        id: 3,
        name: 'सफेद मूसली',
        nameId: 'safedmusli',
        image: 'safed-min.png',
        content: 'यह टेस्टोस्टेरोन बढ़ाता है, पार्ट के टिश्‍यूज को ताकत प्रदान करता है, इरेक्शन में सुधार करता है और टाइमिंग बढ़ाता है।'
    },
    {
        id: 4,
        name: 'केसर ',
        nameId: 'keshar',
        image: 'kesar-min.png',
        content: 'इसे आयुर्वेद में कामोत्तेजक और बलवर्धक माना गया है। यह मूड बनाता है तथा स्टैमिना और समय अवधि भी बढाता है ।'
    },

    {
        id: 5,
        nameId: 'gokshura',
        name: 'गोक्षुरा',
        image: 'gokshura-min.png',
        content: 'यह पुरूषों में काम इच्छा को जागृत करता हैं, साथ ही शुक्राणुओं की गुणवत्ता बढ़ाने में भी गोक्षुरा अहम भूमिका निभाता हैं।'
    },

    {
        id: 6,
        nameId: 'satavari',
        name: 'शतावरी',
        image: 'shatavari-min.png',
        content: 'शतावरी के उपयोग से टेस्टोस्टेरोन हॉर्मोन, जोश और स्टैमिना में आश्चर्यजनक रूप से वृद्धि देखने को मिलती हैं। '
    },

]


const Sec2 = () => {
    return (
        <section className={noto.className}>

            {/* <div className="w-full text-center my-1">
                <a href="#form"><img src="/main/hft_images/ordernow_00000.gif" alt="pic" className="w-[45%] md:w-[30%] mx-auto" loading='lazy' /></a>
            </div> */}

            <Bullflip />

            <div>

                <div className='text-center'>
                    <div className='text-[1.3rem] font-black specing-[2rem] '>
                        <span className='text-[#df4d00]' >Bull Rider Capsule
                        </span><br />
                        में मौजूद जड़ीबूटियां
                    </div>
                </div>


                <section>

                    <Carousel interval={3000} showStatus={false} autoPlay infiniteLoop>

                        {aryurvedic_list.map((item, key) => {
                            return <div key={key}>
                                <div key={key}>
                                    <div className="arherb_1" style={{ border: "1px solid #fb8501" }} >
                                        <img src={`/main/bra_images/${item.image}`} alt="pic" className="h-[150px] !w-[150px]" loading='lazy' />
                                        <div className='flex justify-center m-2 h-[50%]'>
                                            <div className='rounded-[5px] w-[60%]'>
                                                <h1 className="text-center pt-2 text-[1.7rem] text-black m-0 font-bold" >{item.name}</h1>
                                            </div>
                                        </div>
                                        {/* <h1 className="mt-3 ">{item.name}</h1> */}
                                        <div className="text-center rounded-[10px] p-[6px] text=[1.1rem] bg-[#fb8501] text-white font-black" >{item.content}</div>
                                    </div>
                                </div> </div>
                        })}


                    </Carousel>


                </section>

                <section>

                    <div className='text-center'>
                        <div className='text-[1.3rem] font-bold specing-[2rem] py-2'>
                            <span className='text-[#df4d00] text-2xl' >Bull Rider Capsule
                            </span><br />
                            एक विशेष औषधि
                        </div>

                        <p className="text-lg font-semibold px-2 text-start"><span style={{ color: "#ea8360" }} >Bull Rider Capsule</span> इन जैसी 16 बेस्ट जड़ीबूटियों और भस्मों का बेस्ट संयोजन है। इसके लैब टेस्टिंग के दौरान पाया गया कि मार्केट में उपलब्ध कई प्रोडक्ट की तुलना में इसका फार्मूलेशन सबसे बेस्ट है। यह पुरुष यौन समस्या पर दूसरों की तुलना में ज्यादा सटीक असर करता है। यह नेचुरल तरीके से पुरुष प्रमुख सेक्सुअल हॉर्मोन टेस्टोस्टेरोन में बृद्धि करता है।</p>
                    </div>

                </section>

                {/* <div className="w-full text-center my-1">
                    <a href="#form"><img src="/main/hft_images/ordernow_00000.gif" alt="pic" className="w-[45%] md:w-[30%] mx-auto" loading='lazy' /></a>
                </div> */}

                <Bullflip />

            </div>

        </section>
    )
}

export default Sec2