import { Poppins } from 'next/font/google';
import Image from 'next/image';


const poppin = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
const Section3 = () => {

    const before = [
        { title: 'छोटा लिंग', image: '/main/brj_images/1a.mp4' },
        { title: 'शीघ्रपतन', image: '/main/brj_images/2a.mp4' },
        { title: 'दुखी पार्टनर', image: '/main/brj_images/3a.mp4' }
    ];

    const after = [
        { title: 'बढ़ जाता है', image: '/main/brj_images/1b.mp4' },
        { title: '45+ मिनट सेक्स', image: '/main/brj_images/2b.mp4' },
        { title: 'संतुष्ट पार्टनर', image: '/main/brj_images/3b.mp4' }
    ];

    return (
        <div className='w-full'>
            <div className="relative bg-center bg-no-repeat bg-cover py-7 md:py-10 z-[2]">

                <div className='absolute w-full h-full top-0 left-0 z-[-1]'>
                    <Image
                        src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/12519427-9a56-4b54-4adc-036b6b7e1b00/public"}
                        fill
                        style={{
                            height: "100%",
                            width: "100%"
                        }}
                        loader={<p>wait</p>}
                        loading='lazy'
                        alt='no'
                    />
                </div>


                <div className=' md:w-[47rem] mx-auto w-full px-2'>
                    <div className={`w-[90%] mx-auto text-center text-black`}>
                        <h2 className="mb-0 text-2xl md:text-3xl font-semibold" style={{ lineHeight: "inherit" }}>पर चिंता न करें <span className="font-black text-[1.6rem] md:text-[2.8rem]">Bull Rider Capsule</span> इन सभी समस्याओं को जड़ से उखाड फेकने के लिए बेस्ट क्वालिटी हर्ब्स और भस्मो के मिश्रण से बनाया गया है। रिसर्चो में यह अन्य प्रोडक्ट से बेहतर साबित हुआ है। <span className="font-black  text-[1.6rem] md:text-[2.8rem]">Bull Rider Capsule</span> यौन समस्या में बहुत बेहतर है। </h2>

                    </div>
                </div>



            </div>

            <div className="bg-[#e0e0e0] relative md:py-8 py-2 text-black">
                <div className=" md:w-[47rem] mx-auto w-full px-2">
                    <div className="grid grid-cols-2 md:grid-cols-1 items-center gap-2 md:gap-5 ">
                        <div className=" ">
                            <h1 className="text-center mt-4 md:mt-5 mb-0 font-black text-2xl md:text-5xl">BULL RIDER CAPSULE <br /> <span className='text-xl md:text-4xl'>लेने से पहले!!</span></h1>
                            <div className="border-white border-2 text-center mt-4 mb-8 ">
                                <h1 className={`inline-block py-2 px-4 font-bold text-white mb-3 text-3xl md:text-4xl beforeTitle ${poppin.className}`}>BEFORE</h1>
                                {before.map((e, key) => {
                                    return <div key={key} className='my-9 px-4 md:px-0' style={{ marginBottom: (key + 1) === before.length ? '1rem' : '2.3rem' }}>
                                        <div className="text-center w-full md:w-72 m-auto relative">

                                            <video className='w-full h-full rounded-full' autoPlay muted loop>
                                                <source src={e.image} type="video/mp4" />
                                            </video>

                                            <h3 className="absolute transform translate-x-[-50%] translate-y-[-50%] top-[1%] left-1/2 beforeKey pt-4 px-5 pb-1 rounded-full text-2xl font-bold">{key + 1}</h3>
                                        </div>
                                        <h2 className="mt-4 font-bold text-[6vw] sm:text-5xl">{e.title}</h2>
                                    </div>
                                })}
                            </div>
                        </div>
                        <div className=" ">
                            <h1 className="text-center mt-4 md:mt-5 mb-0 font-black text-2xl md:text-5xl">BULL RIDER CAPSULE <br /> <span className='text-xl md:text-4xl'>लेने के बाद!!</span></h1>
                            <div className="border-white border-2 text-center mt-4 mb-8 ">
                                <h1 className={`inline-block py-2 px-4 font-bold text-white mb-3 text-3xl md:text-4xl afterTitle ${poppin.className}`}>AFTER</h1>
                                {after.map((e, key) => {
                                    return <div key={key} className='my-9 px-4 md:px-0' style={{ marginBottom: (key + 1) === before.length ? '1rem' : '2.3rem' }}>
                                        <div className="text-center w-full md:w-72 m-auto relative">
                                            <video className='w-full h-full rounded-full' autoPlay muted loop>
                                                <source src={e.image} type="video/mp4" />
                                            </video>
                                            <h3 className="absolute transform translate-x-[-50%] translate-y-[-50%] top-[1%] left-1/2 afterKey pt-4 px-5 pb-1 rounded-full text-2xl font-bold">{key + 1}</h3>
                                        </div>
                                        <h2 className="mt-4 font-bold text-[6vw] sm:text-5xl">{e.title}</h2>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section3;