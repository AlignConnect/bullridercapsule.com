import '../hft.css'
import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const Header = () => {
    return (


        <section className={noto.className}>

            <div className='mainTD'>
                <div className='mainTitle text-center text-xl md:text-2xl'>जाने टाइमिंग, स्टैमिना और पार्ट में<br /><span className='text-[#ffc732]'>कड़कपन बढ़ाने की नं.1 औषधि के बारे में</span></div>
            </div>
            <div>
                <img src="/main/bra_images/main.jpg" alt="pic" className="w-full" loading='lazy' />
            </div>
            <div>
                <div className='mainPara px-2 pt-2 text-[15px] md:text-[18px]'>करें जोश, अवधि और खड़ापन में सुधार। टाइमिंग बढ़ाने, जोश, और स्टैमिना बढ़ाने के लिए एक प्रभावी और प्राकृतिक उत्पाद</div>
            </div>


        </section>

    )
}

export default Header