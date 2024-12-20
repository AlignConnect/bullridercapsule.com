import { Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


function WomenNeed() {
    return (
        <div className={noto.className}>
            <div className='bg-gray-100'>
                <div className='w-full max-w-7xl mx-auto text-[1.2rem] md:text-2xl py-7 px-2 text-justify'>
                    ज्यादातर महिलाएं अपने पुरुष पार्टनर के सेक्स प्रदर्शन से संतुष्ट नहीं होती क्योंकि उनकी लिंग में दम नहीं होता या उनकी सेक्स टाइमिंग कम होती है फिर भी रिश्ते के लिए खुश रहने का नाटक करती है। वही कुछ महिलाये वास्तविक सेक्स संतुष्टि के लिए अपने पार्टनर को धोखा देकर दूसरे पुरुष के साथ सम्बन्ध बना लेती है। ऐसे में प्रत्येक पुरुष को चाहिए की वो बेड पर अपना दमखम दिखाएँ जिससे उनकी महिला पार्टनर संतुष्ट रहे और रिश्ते में प्यार बना रहे।
                </div>
            </div>

            <div className='bg-blue-500'>
                <div className='w-full max-w-7xl mx-auto text-center'>
                    <div className='py-4'>
                        <div className='md:w-1/2 w-80 pt-3 font-semibold mx-auto text-2xl md:text-4xl text-white  border-solid border-2 border-white-600 rounded-md'>
                            ज्यादात्तर महिलाये चाहती है
                        </div>
                    </div>
                    <ol className='list-decimal list-inside text-xl md:text-2xl text-white'>
                        <li className='leading-10'>
                            लम्बा मोटा सुडौल लिंग
                        </li>
                        <li className='leading-10'>
                            नॉनस्टॉप सेक्स प्रदर्शन
                        </li>
                        <li className='leading-10'>
                            दमदार, ऊर्जावान पुरुष
                        </li>
                        <li className='leading-10'>
                            पुरुष जो उन्हें संतुष्टि दे
                        </li>
                    </ol>
                </div>
            </div>

            <div className='relative'>

                <div className='absolute top-0 left-0 w-full min-h-[300px] z-[-1]'>
                    {/* <Image
                        src={'/main/bre_images/position_background.png'}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        alt="Position Background"
                        loading='lazy'
                    /> */}

                    <img
                        src={'/main/bre_images/position_background.png'}
                        alt='ddfkjjn'
                        loading='lazy'
                        className='w-full min-h-[550px]'
                    />

                </div>


                <div className='w-full max-w-7xl mx-auto py-8'>
                    <div>
                        <span className={`${poppins.className} md:text-6xl text-2xl font-extrabold items-end`}>&rdquo;</span>
                        <div className={`${poppins.className} w-full font-extrabold px-2`}>
                            <span className='md:text-8xl text-5xl'>BULL RIDER</span><br /><span className='md:text-7xl text-5xl text-red-600'>CAPSULE</span>
                        </div>
                        <div className='mt-8 md:-mt-40 min-h-[160px]'>
                            {/* <Image className='py-2 mx-auto ' src={"/main/bre_images/bull_rider_cap.png"} width={500} height={100} alt='bull_rider_cap' loading='lazy' /> */}
                            <img className='py-2 mx-auto  w-full md:w-1/2 min-h-[150px]' src={"/main/bre_images/bull_rider_cap.png"} alt='bull_rider_cap' loading='lazy' />
                        </div>

                        <div className='text-[1.4rem] md:text-5xl text-center pt-10 font-extrabold text-[#057880]'>बनाये आपको इस काबिल ताकि आप कर सके <span className='text-red-600'>नॉनस्टॉप धुआंधार सेक्स</span> और निकाल सके महिला पार्टनर की <span className='text-red-600'>चीख</span><span className={`${poppins.className} text-black md:text-5xl text-2xl`}>  &ldquo; </span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WomenNeed;