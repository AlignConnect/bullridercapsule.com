import dynamic from "next/dynamic";
import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Bullflip = dynamic(() => import('./FlipkartandAmazon'), {
    loading: () => <p>loader</p>
})

const Sec1 = () => {
    return (

        <section className={noto.className}>
            <div className="px-3 bg-[#fbf6f0] text-black font-semibold text-lg" >
                <div className="pt-3">
                    <p className="" style={{ textIndent: "50px" }}>दोस्तों, दशकों से आज तक कई सर्वे होते आ रहे है जिसमे पुरुष भाग लेते है। इस सर्वे में ये पता चला है की पुरुषों में शीघ्रपतन, पार्ट में ढीलापन, स्टैमिना और एनर्जी की कमी जैसी यौन समस्या तेजी से बढ़ रही है। ऐसे में पुरुषों की को चाहिये Bull Rider Capsule जैसी असरदार औषधि जो समस्या पर तेजी से असर करें और इसे जड़ से उखाड़ फेके। </p>
                </div>

                {/* <div className="w-full text-center my-1" >
                    <a href="#form"><img src="/main/hft_images/ordernow_00000.gif" alt="pic" className="w-[45%] md:w-[30%] mx-auto" /></a>
                </div> */}


                <Bullflip />

                <div className="header_para_style"  >
                    <p className=""><span className="text-[#ea8360]" >Bull Rider Capsule</span> एक शुद्ध नेचुरल और आयुर्वेदिक औषधि है। आयुर्वेद को सदियों से सबसे सफल और दुष्प्रभाव मुक्त चिकित्सा पद्धति के तौर पर जाना जाता है। आयुर्वेद का अनुसरण और जड़ीबूटियों का रिसर्च कर यह औषधि तैयार की गयी है। <span className="text-[#ea8360]" >Bull Rider Capsule</span> पुरुष यौन कमजोरी का सबसे प्रभावी समाधान बनकर उभरा है, क्योंकि इसमें आयुर्वेद की सबसे मशहूर जड़ीबूटियों की उच्चतम क्वालिटी इस्तेमाल में लिया गया है।
                    </p>
                </div>
            </div>


            <div className='pb-2 relative overflow-hidden'>
                <div className='absolute flex transform trnaslate-x-[-50%] translate-y-[-50%] top-[30%] md:top-[45%] right-[-5.7rem] md:right-[-4rem]'>
                    <img src="/main/bra_images/google-min.png" alt="no" className='w-1/2' loading="lazy" />
                </div>

                <div className='w-full title_x'>
                    <div className='_25_width'>
                        <img src="/main/bra_images/pro4.webp" alt="no" loading="lazy" className="text-center" />
                    </div>
                    <div className='text-white text-xl pt-2 pb-2 text-center w-[85%]' style={{ fontFamily: 'Poppins, sans-serif' }}>
                        <span className="text-[1.2rem] italic font-bold" >50% OFF</span>
                        <span className="block text-[1.1rem]" >Order now and<br /> avail the offer</span>
                    </div>
                </div>
            </div>


        </section>

    )
}

export default Sec1