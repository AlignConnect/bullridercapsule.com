
import { Noto_Serif_Devanagari } from 'next/font/google';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const LikeMen = () => {

    const LikeMenList = [
        {
            image: '/main/brk_images/gif1.mp4',
            content: 'जिनका लिंग लम्बा और मोटा हो'
        },
        {
            image: '/main/brk_images/gif2.mp4',
            content: 'लिंग चट्टान जैसा सख्त बना रहे'
        },
        {
            image: '/main/brk_images/gif3.mp4',
            content: 'सेक्स टाइम 45+ मिनट लम्बी हो'
        },
        {
            image: '/main/brk_images/gif4.mp4',
            content: 'जिनके हर शॉट से दर्द मिले'
        },
        {
            image: '/main/brk_images/gif5.mp4',
            content: 'दमदार स्टैमिना हो, हर पोज़ में ठोके'
        },
        {
            image: '/main/brk_images/gif6.mp4',
            content: 'सेक्स से उनका पानी निकाल दे'
        }
    ]

    return (

        <section className={noto.className}>
            <div className='w-full text-black px-3'>
                <div className='py-5'>
                    <div className='bg-gray-300 rounded-xl'>
                        <Carousel showStatus={false} infiniteLoop={true} autoPlay showThumbs={false}>
                            {LikeMenList.map((e, key) => {
                                return <div key={key} className=' pt-5 pb-10'>
                                    <div className='w-[85%] mx-auto'>

                                        <video className='w-full h-auto' autoPlay muted loop>
                                            <source src={e.image} type="video/mp4" />
                                        </video>
                                    </div>
                                    <h1 className='text-2xl mt-2 text-black font-bold'>{e.content}</h1>
                                </div>
                            })}
                        </Carousel>
                    </div>
                </div>

                <div className='text-black text-[1.15rem] text-justify md:text-xl font-semibold'>पर चिंता न करें अब ये सब दूर नहीं !! आयुर्वेद की सबसे महानतम खोज
                    <span className=' text-[#ff0103]'> Bull Rider Capsule</span>  से इस समस्या को जड़ से मिटायें और पाए लम्बा, मोटा और सुडौल लिंग के साथ जोरदार सेक्स स्टैमिना ! रीसर्च के मुताबिक महिलाये 13 से 26 मिनट लगातार लंड के झटके मिलने पर झड़ती है पर <span className=' text-[#ff0103]'> Bull Rider Capsule</span> की मदद से पुरुष उससे भी ज्यादा देर तक टिक कर सेक्स कर सकता है।
                </div>

            </div>
        </section>

    )
}
export default LikeMen;