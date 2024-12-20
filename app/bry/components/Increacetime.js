import Image from 'next/image';
import { Noto_Serif_Devanagari } from 'next/font/google';
const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
function Increacetime() {
    return (
        <div className='w-full bg-cream'>
            <div className={`${noto.className} pt-3 md:pt-4 pb-1 bg-black text-center text-white font-extrabold text-[1.2rem] md:text-3xl`}>
                "साइज और टाइम बढ़ाएं 100% गारंटी के साथ"
            </div>
            <div className='pt-3 md:pt-3 mx-1 relative min-h-[500px]'>
                <Image className='hidden md:block mx-auto' src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/86094468-6a13-4d57-5af8-b4f6cbee0900/public"} width={1200} height={500} alt='large_ling_desktop' loading='lazy' />
                <Image className='block md:hidden' src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c96f6565-49a8-47c9-11f3-16c75b27bd00/public"} width={500} height={500} alt='large_ling_mobile' loading='lazy' />
                <div className='md:absolute md:bottom-40 md:left-[450px] bottom-0'>
                    <div className={`${noto.className} pt-5 text-orange-900 text-center font-extrabold text-[1.1rem] md:text-[1.4rem]`}>
                        अफ्रीकन मूल की जड़ीबूटियों से बने Bull Rider से पाएं अफ्रीकन पुरुषों जैसा लिंग साइज!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Increacetime;