import { Noto_Serif_Devanagari } from 'next/font/google';
import Image from 'next/image';
const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const FinalResult = () => {
    return (
        <section className={noto.className}>
            <div className='w-full'>
                <div className="bg-[#212123] px-3 py-4 text-[1.15rem] md:text-xl">
                    <h4 className="text-white text-center font-bold">तो इन सभी चरणों के बाद आपको मिलता है लम्बा, मोटा फौलादी लिंग एवं जोरदार सेक्स टाइमिंग और आप बन जाते है दमदार सेक्स परफ़ॉर्मर !! आपकी बीवी आपकी चुदाई को एन्जॉय करती है। आप यक़ीन नहीं करेंगे इसे खाने के बाद आप जिस लड़की के साथ सेक्स करेंगे वो आपसे बार-बार सेक्स की चाहत करेंगी।</h4>
                </div>
                <Image className='py-5' src={'/main/brk_images/product_font.png'} alt={'productImage'} width={500} height={500} loading='lazy' loader={<p>wait</p>} />

                <div className="grid grid-cols-3 gap-1 px-3 text-white text-center font-bold">
                    <div className="uppercase text-[0.8rem] md:text-[1rem] bg-gradient-to-r from-[#2b2b2b] to-[#4e4e4e] pt-5 pb-3 rounded-xl border-dashed border border-white">10 Days<br /> Money Back<br /> Guarantee</div>
                    <div className="text-[0.8rem] md:text-[1rem] bg-gradient-to-r from-[#2b2b2b] to-[#4e4e4e] pt-5 pb-3 rounded-xl border-dashed border border-white">
                        PREPAID <br /> HUGE SAVINGS<br /> ON ORDER
                    </div>
                    <div className="text-[0.8rem] md:text-[1rem] px-1  bg-gradient-to-r from-[#2b2b2b] to-[#4e4e4e] pt-5 pb-3 rounded-xl border-dashed border border-white">FREE<br /> DELIVERY ALL<br /> OVER INDIA</div>
                </div>

                <h1 className="text-[#212123] text-center px-5 font-extrabold text-2xl mt-5">तो हो जाये तैयार प्रीमियम फार्मूलेशन के साथ, प्रीमियम सेक्स प्रदर्शन के लिए !</h1>
            </div>
        </section>
    )
}
export default FinalResult;