
const Section2 = () => {

    const manNoEffect = [{
        title: 'पति का छोटा, पतला और टेढ़ा लिंग',
        image: '/main/hkart_images/icon01.png'
    },
    {
        title: 'शीघ्रपतन, 1-5 मिनट की सेक्स अवधि',
        image: '/main/hkart_images/icon02.png'
    }, {
        title: 'कमजोर स्टैमिना, जल्दी थकावट',
        image: '/main/hkart_images/icon03.png'
    }, {
        title: 'जोश, उत्तेजना और सेक्स इच्छा की कमी',
        image: '/main/hkart_images/icon04.png'
    }]

    return (

        <div className=" w-full">
            <div className="bg-[#222931] w-full">
                <div className="max-w-6xl px-2 md:px-0 text-white text-center mx-auto">

                    <p className="pt-4 font-semibold text-[1rem]  bg-white text-black rounded-3xl md:hidden block">सर्वे के आंकड़ों के मुताबिक 80- 84% भारतीय महिलाएं<br /> सेक्स के दौरान चरम सुख नहीं पाती !</p>

                    <div className="  fontPoppins">
                        <p className="text-[1.2rem] -mx-3 md:text-4xl text-[#ffeb04] pt-5 md:py-5 font-bold">महिलाओं को चरम सुख न मिलने की वजह </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 py-5 md:py-5 gap-x-4 gap-y-4 ">
                            {manNoEffect.map((e, key) => {
                                return <div className="" key={key}>
                                    <img src={e.image} alt="pic" className="w-1/2 mx-auto" loading="lazy" />

                                    <p className="mt-2 md:mt-4 text-[1rem] md:text-2xl">{e.title}</p>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-3 sm:mx-auto pt-5">
                <p className="text-xl md:text-2xl text-justify">टेड़ा, ढ़ीला, पतला लिंग और 2 मिनट की सेक्स अवधि आपकी पार्टनर के लिए संतोषजनक नहीं है। एक्सपर्ट कहते है की खुशहाल रिलेशनशिप के लिए सेक्स में पुरुष तथा महिला दोनों के चरमानंद का ख्याल रखना चाहिए पर अधिकांश पुरुष 2 या अधिकतम 5 मिनट के अंदर चरमानंद की प्राप्ति कर अपनी महिला पार्टनर को अधूरा छोड़ देते है।</p>

                <p className="text-xl md:text-2xl mt-4 text-justify">यह रोज-रोज का अधूरापन आपके रिश्ते में तनाव और कड़वाहट का विष घोल सकता है। अगर आप अपने लव लाइफ या मैरिटल लाइफ में महिला पार्टनर से लॉयलिटी चाहते है तो सबसे पहले उनकी खुशियों का ध्यान रखना जरुरी है।</p>
            </div>

        </div>
    )
}
export default Section2;