import dynamic from "next/dynamic";
import Image from "next/image";
const FlipAmazon = dynamic(() => import('./FlipAmazon'), {
    loading: () => <p>load</p>
});

const Section6 = () => {

    const cusReview = [{
        title: 'रवि परिहार',
        title1: 'परिणाम देख हैरान था!',
        image: '/main/hkart_images/r1.png',
        para: 'मेरे पहले और बुलराइडर खाने के बाद के सेक्स प्रदर्शन का कोई तुलना ही नहीं है। बुलराइडर से वास्तविक परिणाम मिलता है। मैं छोटे लिंग और कम सेक्स अवधि की वजह से निराश था क्योंकि मैं किसी भी गर्ल फ्रेंड को संतुष्ट नहीं कर पाया था। लेकिन अब मेरे दमदार लिंग और लम्बी से अवधि से हर लड़की खुश होती है और खुल के मजे लेती है। मुझे मात्र 3 महीने के अंदर मनचाहा परिणाम मिल गया था।'
    },
    {
        title: 'चंद्रेश 26 वर्ष',
        title1: 'अब कोई समस्या नहीं!',
        image: '/main/hkart_images/r2.png',
        para: 'मेरे कमजोर सेक्स प्रदर्शन से कोई प्रेमिका  ज्यादा दिन रिलेशनशिप नहीं रखती थी। मैं परेशान हो चुका था। बहुत दवाइयां खाया पर समस्या में जरा भी सुधार नहीं हुआ। जब बुलराइडर खाया तो इससे मात्र 20 दिनों के अंदर मेरी समस्या में सुधार दिखने लगा और कमजोर लिंग रॉड जैसा मजबूत हो गया..बदहाल सेक्स टाइमिंग भी शानदार तरीके से बढ़ गयी। मेरी सोच से यह दुनिया का सबसे बेहतर दवा है।'
    }]

    return (
        <div className='w-full'>
            <div className="relative fontPoppins text-white">
                <div className="relative z-10 max-w-6xl mx-auto px-3 py-5">
                    <h1 className="text-2xl md:text-4xl text-center font-semibold">
                        परिणाम आपके सामने है !
                    </h1>
                </div>
                <Image src='/main/hkart_images/agar.jpg' fill className="w-full absolute top-0" />
            </div>

            <div className="max-w-6xl mx-auto ">
                <div className="relative z-10 px-3 xl:px-0">
                    {cusReview.map((e, key) => {
                        return <div className=" my-5 md:my-10   relative " key={key}>
                            <div className="px-5 pb-5 relative z-10">
                                <div className="flex items-center gap-3">
                                    <img src={e.image} alt="pic" className="w-20" loading="lazy" />
                                    <h1 className="text-2xl md:text-3xl font-bold fontPoppins relative bg-white px-1 ">{e.title}</h1>
                                </div>

                                <div className="relative ">
                                    <p className="text-center text-3xl font-bold text-[#0085ca] mt-3">{e.title1}</p>
                                    <p className="italic text-xl text-justify">{e.para}</p>
                                </div>
                            </div>
                            <div className="absolute border-[#0085ca] rounded-3xl w-full md:h-5/6 h-[91%]  bottom-0 border-4 z-0"></div>
                        </div>
                    })}
                </div>
            </div>





        </div>
    )
}
export default Section6;