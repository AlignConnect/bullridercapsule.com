
import { Poppins } from 'next/font/google';
import Image from 'next/image';


const poppin = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Section1 = () => {

    const listAsk = [
        { title: 'छोटा लिंग और स्तंभन दोष' },
        { title: 'शीघ्रपतन, टाइमिंग की समस्या ' },
        { title: 'जोश, स्टेमिना,और उर्जा की कमी' },
        { title: 'लो लीबीडो, कामेच्छा की कमी' },
        { title: 'धातु रोग की समस्या' },
        { title: 'परफॉरमेंस का तनाव' }
    ]

    const listproductBene = [
        { title: '10 लाख + संतुष्ट ग्राहक', image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3d432b06-80f3-420b-2ebb-5814cb132800/public' },
        { title: 'मनी बैक गारंटी', image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3a326e7b-2986-4032-55f8-ee3fa442fd00/public' },
        { title: 'COD पेमेंट सुविधा', image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ad346ec8-8fdd-435f-73f7-33ed59d73900/public' },
        { title: '100% सुरक्षित', image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/be41bab8-1689-4c0f-658d-a3b7e5276000/public' }
    ]

    return (
        <div className='w-full '>
            <div className=" bg-repeat-x  bg-blend-screen px-4 md:px-0" style={{ backgroundImage: 'url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9000f967-d2ea-4d2a-feff-1ee9a9ca6e00/public),url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/91713f3d-08fb-4261-c018-297c51056200/public)', backgroundPosition: 'top center, bottom center ' }}>



                <div className=' md:w-[47rem] mx-auto w-full '>
                    <Image src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/def1d3a6-5554-456b-e2e0-fc31f88beb00/public' alt='first' width={500} height={500} className='w-full pt-6 relative z-10' fetchPriority='high' />

                    <div className="relative z-0  -mt-16">
                        <div className="relative z-10">
                            <div className='bg-[#e28601] rounded-2xl rounded-es-none rounded-ee-none p-8' ></div>
                            <div className="md:p-8 py-8 px-4">
                                <h3 className="font-semibold text-2xl text-justify">क्या आप भी उन पुरुषों में से है जो ये यौन समस्याए महसूस करते है सेक्स से बीवी या गर्लफ्रेंड को संतुष्टि नहीं दे पाते और सेक्स लाइफ में निराश है। </h3>
                                <div className='grid md:grid-cols-2 grid-cols-1 md:gap-1 border-2 border-black md:p-8 rounded-lg  py-2 px-4'>
                                    {listAsk.map((e, key) => {
                                        return <div className="flex items-center md:gap-4 gap-3 bg-inherit md:p-0 py-2 pr-2 " key={key}>
                                            <div className="w-6">
                                                <Image src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/57400817-1481-4f92-5d2c-6aeacbc57300/public" alt="second" width={500} height={500} loading='lazy' />
                                            </div>
                                            <p className={`text-black m-0 text-[1.1rem] md:text-xl font-bold leading-tight ${poppin.className}`}>{e.title}</p>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full">

                            <img src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/12519427-9a56-4b54-4adc-036b6b7e1b00/public' alt="pic" width='100%' height='100%' loading='lazy' className='h-full rounded-2xl ' />
                        </div>
                    </div>

                    <div>
                        <div className="grid justify-around md:grid-cols-4 grid-cols-2 gap-4 md:py-12 md:px-8 px-4 pt-6 pb-6">
                            {listproductBene.map((e, key) => {
                                return <div className="flex md:gap-6 gap-3 flex-col text-center" key={key}>
                                    <div className="md:w-20 w-16 mx-auto">
                                        <Image src={e.image} alt={`list`} width={500} height={500} className="w-full" loading='lazy' />
                                    </div>
                                    <hr className="text-black opacity-100 border-t-2 border-black" />
                                    <h2 className="text-black font-bold text-xl md:text-3xl px-2">{e.title}</h2>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Section1;