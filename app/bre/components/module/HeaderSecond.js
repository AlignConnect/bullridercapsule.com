import { Poppins } from 'next/font/google';
import Image from 'next/image'

const poppins = Poppins({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const HeaderSecond = () => {
    return (
        <div className='relative'>
            <div className='w-full'>
                {/* <Image className='hidden md:block w-full min-h-[350px]' src={"/main/bre_images/header_desktop_image.jpg"} width={500} height={500} alt='header_desktop_image' loading='eager' fetchPriority='high' />
                <Image className='block md:hidden w-full min-h-[350px]' src={"/main/bre_images/header_mobile_image.jpg"} height={500} width={500} alt='header_mobile_image' loading="eager" fetchPriority='high' /> */}

                <img className='block md:hidden w-full min-h-[350px]' src={"/main/bre_images/header_mobile_image.jpg"} alt='header_desktop_image' loading='eager' fetchPriority='high' />
                <img className='hidden md:block w-full min-h-[350px]' src={"/main/bre_images/header_desktop_image.jpg"} alt='header_desktop_image' loading='eager' fetchPriority='high' />

            </div>
            <div className='absolute rounded-xl md:bottom-72 text-center md:left-72 bottom-20 left-2'>
                <div className="">
                    <a href="https://bit.ly/46L48JO">
                        <div className="purchaseProduct_header pt-2"><span>BULL RIDER CAPSULE</span><br /> खरीदने के लिए निचे क्लिक करें</div>
                        {/* <Image src="/main/bre_images/flipkart_old.gif" height={500} width={500} alt="pic" className="md:mx-auto w-[45%] md:w-3/4" loader={<p>Wait</p>} loading='lazy' /> */}
                        <img src="/main/bre_images/flipkart_old.gif" className=" md:mx-auto w-[45%] md:w-3/4" loading='lazy' />
                    </a>
                </div>
            </div>
            <div className='absolute bottom-5 md:bottom-10 md:left-10 left-3'>
                <div className=" text-white font-semibold text-md md:text-[2.9rem]">
                    <span className={`${poppins.className} text-red-700`}>BULL RIDER</span> से अपनी शीघ्रपतन और ढीले लिंग की समस्या को मिटायें, हाई पावर और स्टैमिना से करें घंटो सेक्स!
                </div>
            </div>
        </div>
    )
}

export default HeaderSecond;