import Image from "next/image"


const Section5 = () => {


    return (
        <div className='w-full py-2 md:py-5 px-3 '>

            <p className="text-justify text-xl md:text-2xl max-w-5xl mx-auto  mb-3 md:mb-0">बुलराइडर कैप्सूल" सेक्स अवधि, लिंग की लम्बाई-मोटाई और सख्ती बढ़ाने के साथ जोश और सेक्स इच्छा को उच्चतम स्तर पर पंहुचा कर महिला पार्टनर को चरमसुख से भेंट कराने की सबसे बेहतरीन फार्मूला है। आयुर्वेदिक इतिहास की 17 सबसे असरदार और विश्वसनीय जड़ीबूटियों से बना यह प्रोडक्ट पुरुष यौन समस्या को जड़ से उखाड़ फेंकने में सक्षम है।</p>

            <div className="max-w-4xl mx-auto  py-5 text-center md:pt-10 md:pb-5 relative ">

                <div className="relative z-10 ">
                    <a href="#form" className=""><img
                        src={"/main/hkart_images/dhamaka_offer.webp"}
                        loading='lazy'
                        decoding="async"
                        className='mx-auto foo animate-foo w-3/4 md:w-1/3'
                    /></a>

                    <h4 className="text-xl md:text-3xl font-semibold my-5 md:mt-10 mb-">जी हाँ, Summer "धमाका" Sale में ऑनलाइन पेमेंट पर प्रतिदिन 100 भाग्यशाली ग्राहकों को मिल रहा है बुलराइडर का पैक बिल्कुल फ्री! मौका हाथ से ना जाने दे, फ्री में बुलराइडर मंगाए। अगर आप भाग्यशाली हुए तो आपका भी पूरा पैसा आपके अकाउंट में ट्रांसफर कर दिया जायेगा!</h4>

                    <a href="#form" className="text-[1rem] md:text-2xl font-bold px-0 md:px-10 text-blue-600">(नोट- अन्य ग्राहकों के लिए 50% का बम्पर डिस्काउंट और ऑनलाइन पेमेंट पर 10% अतिरिक्त बचत उपलब्ध है।)</a>
                </div>

                <Image src='/main/hkart_images/winter_bg.jpg' fill alt="pic" className="absolute top-0 z-0 block md:hidden" />
            </div>

            <div className="w-full max-w-6xl mx-auto mt-5 md:mt-0">


                <div className="border-2 border-black py-2 px-2">
                    <p className='fontNoto text-xl md:text-2xl text-justify px-1 pb-1 md:py-5'>
                        <span style={{ color: "red", fontWeight: "700" }}>"Bullrider Capsule"</span> आयुष मंत्रालय भारत सरकार के सभी नियम और मापदंडो को अनुसरण कर तैयार किया गया है। यह सभी लैब परिक्षण में सफल हुआ और इस पर श्रेष्ठ यौनवर्धक और लिंग वर्धक सूत्रीकरण का मुहर लग गया। साल 2018 से यह यौन वर्धक श्रेणी में प्रथम स्थान पर काबिज है और लगातार बेहतरी के साथ पुरुष यौन कमजोरी को दूर कर उनके जीवन में खुशिया लौटा रहा है।
                    </p>

                    <img
                        className='w-full md:w-[90%] h-[100%] mx-auto '
                        src={"/main/hkart_images/expert_aword.jpg"}
                        alt='expert_aword'
                        loading="lazy"
                    />

                    <p className="fontPoppins font-semibold text-center text-sm md:text-xl py-1">( एक्सपर्ट टीम अवार्ड और प्रमाण पत्र स्वीकारते हुए )</p>
                </div>

                {/* <img
                    className='w-[90%]  sm:w-[50%] h-[100%] mx-auto mt-5 sm:my-5 '
                    src={"/main/hfkt_images/flipimg.webp"}
                    alt='expert_aword'
                    loading="lazy"
                /> */}
            </div>

        </div>
    )
}
export default Section5