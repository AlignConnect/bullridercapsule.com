import Image from "next/image";

const Section3 = () => {

    const Intrest = [{
        title: 'लम्बा, मोटा फौलादी लिंग',
        image: '/main/hkart_images/gif1.gif'
    },
    {
        title: '45 मिनट से ज़्यादा सेक्स अवधि',
        image: '/main/hkart_images/gif2.gif'
    }, {
        title: 'जोरदार इरेक्शन जो घंटो बना रहे',
        image: '/main/hkart_images/gif3.gif'
    }, {
        title: 'जोश, उत्तेजना और इच्छा में वृद्धि',
        image: '/main/hkart_images/gif4.gif'
    }]

    return (
        <div className='w-full relative text-white'>

            <div className="relative z-10 max-w-6xl mx-auto ">
                <div className=" grid grid-cols-6 sm:gap-2 ">
                    <div className="col-span-3 sm:col-span-4 sm:pt-10">

                        <h1 className="italic text-3xl md:text-5xl font-bold fontPoppins sm:block hidden ">क्या आप ये चाहते है?</h1>

                        <div className="grid grid-cols-1 sm:grid-cols-2 py-2 sm:py-7 gap-x-4 gap-y-2 md:gap-y-4 text-center">
                            {Intrest.map((e, key) => {
                                return <div className="" key={key}>
                                    <img src={e.image} alt="pic" className="w-10/12 sm:w-11/12 mx-auto border border-white" loading="lazy" />

                                    <p className="mt-2 sm:mt-4 text-[4.2vw] sm:text-2xl">{e.title}</p>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className="col-span-3 sm:col-span-2 mt-auto h-full sm:h-fit">

                        <h1 className="italic text-[7.85vw] mr-5 font-bold fontPoppins sm:hidden block mb-1 sm:mb-10 text-center">क्या आप ये चाहते है?</h1>

                        <img src='/main/hkart_images/Layer1.png' alt="pic" className="w-full h-5/6 sm:h-fit" loading="lazy" />


                    </div>

                </div>
            </div>
            <Image src='/main/hkart_images/kya_aap_bg.jpg' fill alt="bg" className="absolute top-0 z-0" />

        </div>
    )
}
export default Section3;