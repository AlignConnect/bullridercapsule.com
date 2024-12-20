import dynamic from 'next/dynamic';
import React from 'react'
const Flip = dynamic(() => import('./FlipAmazon'), {
    loading: () => <p>loader</p>
});
function Section1() {

    const list1 = ["अद्भुत, असरदार और अविश्वसनीय", "10 दिनों की मनी बैक गारंटी सुविधा", "100% संतोषजनक परिणाम नहीं तो पैसा वापिस", "अभी आर्डर करें और 50% से ज्यादा की बचत करें !", "प्रीपेड खरीदारी पर 10% की अतिरिक्त बचत"]

    const list2 = [
        {
            image: '/main/brcexa_images/ic2.webp',
            title: 'Side Effects'
        },
        {
            image: '/main/brcexa_images/ic1.webp',
            title: 'Guaranted Benefits'
        },
        {
            image: '/main/brcexa_images/ic1.webp',
            title: 'Satisfaction Guarantee'
        },
    ]

    return (
        <div className='w-full'>
            <div className="px-3 sm:px-5 py-5 sm:py-10 text-[1rem] sm:text-xl text-center fontPoppins">
                <div className="bg-black fontArya text-white rounded-lg  ">
                    <a href="#form" className="px-5 bg-green-600 rounded-lg relative -top-3 sm:-top-4 border-2 border-white">विशेष</a>
                    <p className="p-3 sm:p-5 pt-2">ये सभी कामोत्तेजक जड़ीबूटियां वैज्ञानिक रूप से प्रमाणित है और Bull Rider Capsule भी आयुष मंत्रालय भारत सरकार द्वारा प्रमाणित उत्पाद है। </p>
                </div>

                <div className="relative inline-block mt-5">
                    <h1 className=" z-10 relative font-bold text-5xl sm:text-8xl leading-none uppercase">We Offer</h1>
                    <div className="absolute bottom-[0.5rem] sm:bottom-4  bg-yellow-400 h-1/3 left-[1%] w-[98%]"></div>
                </div>
                <h2 className="text-2xl  sm:text-4xl uppercase">Extra <span className="text-blue-500  font-bold"> For You!</span></h2>
                <img src='/main/brcexa_images/zinpro.webp' alt="pic" width='100%' height='100%' loading="lazy" className='mt-5 sm:mt-8' />
                <Flip/>
                <div className="text-start fontNoto sm:text-2xl grid justify-center my-3 sm:my-5">
                    {list1.map((e, key) => {
                        return <div className="flex flex-grow gap-3" key={key}>
                            <div className="">&#9989;</div>{e}
                        </div>
                    })}
                </div>
                <div className="max-w-md mx-auto px-5 sm:px-0">
                    <div className=" grid grid-cols-3 gap-5 sm:gap-20 font-bold">
                        {list2.map((e, key) => {
                            return <div className="" key={key}>
                                <img src={e.image} alt="pic" width='100%' height='100%' loading="lazy" />
                                <p className="">{e.title}</p>
                            </div>
                        })}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Section1