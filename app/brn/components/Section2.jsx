const Section2 = () => {

    const likeMen = [
        { title: "जिनका लिंग बड़ा और सख्त हो", para: "आपके लिंग में रक्त प्रवाह बढ़ा कर लिंग में कड़कपन और तनाव बढ़ाता है।", image: '/main/brj_images/gif_1.mp4' },
        { title: "जिनमे घोड़े जैसी स्टैमिना हो", para: "आपके अंदर एक नया जोश और यौन शक्ति बढ़ाएगा। बिना थके लम्बा सेक्स कर पाएंगे", image: '/main/brj_images/gif_2.mp4' },
        { title: "कम से कम 30+ मिनट सेक्स करे", para: "आपके धातु त्याग पर रोक लगता है और आपको लम्बे समय तक टिकाता है।", image: '/main/brj_images/gif_3.mp4' },
    ]

    return (
        <div className='w-full py-4 md:py-8 bg-gray-800'>
            <div className=' md:w-[47rem] mx-auto w-full px-2'>

                <div className="w-full">
                    <div className="px-6 ">
                        <h4 className="text-justify my-4 text-white text-[1.3rem] md:text-2xl">अगर आप इन सब से परेशान है, तो समझिये धुआंधार चुदाई करने में नाकाम है। ऐसे में आप अपनी महिला पार्टनर को सेक्स के चरम उत्कर्ष पे नहीं पंहुचा सकते है। ऐसे में उनके दिल से आपके लिए प्यार धीरे-धीरे कम हो सकता है।</h4>

                        <h1 className="text-[#efd100] font-bold text-[2.7rem] md:text-5xl leading-tight">क्योंकि महिलाएं ऐसे मर्द चाहती है-</h1>
                    </div>
                    <div className="leading-tight text-[#303030] font-semibold text-xl md:text-[1.38rem] text-justify md:text-left ">
                        {likeMen.map((e, key) => {
                            return <div className="my-4 md:my-6 grid sm:grid-cols-2 grid-cols-1 bg-[#fbefb3] gap-1 md:gap-0" key={key}>
                                <div className={`w-full h-full ${key == 1 ? 'md:order-1' : ''}`}>
                                    <video className='w-full h-full' autoPlay muted loop>
                                        <source src={e.image} type="video/mp4" className='h-full' />
                                    </video>
                                </div>
                                <div className="w-full px-3 md:px-3">
                                    <h1 className="mb-2 md:mb-4 mt-4 md:mt-5 font-black text-center text-[#bc3e03] text-2xl md:text-[2.5rem] ">&ldquo;{e.title}&rdquo;</h1>
                                    <h3 className="mb-2  ">{e.para}</h3>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section2