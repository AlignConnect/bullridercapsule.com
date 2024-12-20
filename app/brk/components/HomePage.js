

import { Noto_Serif_Devanagari } from 'next/font/google';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const HomePage = () => {
    return (
        <div className={noto.className}>
            <div className='px-3 text-black text-[1.15rem] text-justify md:text-xl font-semibold'>
                <span className='text-3xl font-semibold text-[#ca0000]'>दोस्तों,</span> सेक्स उतना आसान है नहीं जितना आप ब्लू फिल्मो में देखते है। सेक्स एक बहुत ही मुश्किल और मेहनत भरी प्रक्रिया होती है ऊपर से महिला पार्टनर को संतुष्ट करने का प्रेशर! महिला को सेक्स सुख देना बड़ा ही मुश्किल है। महिलाओं का पानी निकालने में पुरुषों का तेल निकल जाता है।
            </div>

            <div className="slider_wrapper">
                <div>
                    <Carousel transitionTime={500} infiniteLoop={true} emulateTouch={true} autoPlay selectedItem={true} showThumbs={false} swipeable showArrows={false} showStatus={false} showIndicators={false} >
                        <div className='w-[500%]  translate-x-0 transform translate-y-0 translate-z-0    min-h-[400px]'>
                            <Image src="/main/brk_images/long1.jpg" alt="slide1"
                                width={500}
                                height={500}
                                loading='lazy'
                            />
                        </div>
                        <div className='w-[500%] transform translate-x-[99%] translate-y-0 translate-z-0  min-h-[400px] '>
                            <Image src="/main/brk_images/long1.jpg" alt="slide2"
                                width={500}
                                height={500}
                                loading='lazy'

                            />
                        </div>
                        <div className='w-[500%] transform translate-x-[200%] translate-y-0 translate-z-0  min-h-[400px]  '>
                            <Image src="/main/brk_images/long1.jpg" alt="slide3"
                                width={500}
                                height={500}
                                loading='lazy'

                            />
                        </div>
                        <div className='w-[500%]  transform translate-x-[300%] translate-y-0 translate-z-0   min-h-[400px] '>
                            <Image src="/main/brk_images/long1.jpg" alt="slide4"
                                width={500}
                                height={500}
                                loading='lazy'

                            />
                        </div>
                        <div className='w-[500%] transform translate-x-[400%] translate-y-0 translate-z-0  min-h-[400px]'  >
                            <Image src="/main/brk_images/long1.jpg" alt="slide5"
                                width={500}
                                height={500}
                                loading='lazy'

                            />
                        </div>
                    </Carousel>
                </div>

            </div>
        </div>
    )
}
export default HomePage;