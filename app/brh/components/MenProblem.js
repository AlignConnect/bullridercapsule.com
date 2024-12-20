import Image from 'next/image';
import { Noto_Serif_Devanagari } from 'next/font/google';


const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const bullrider_benefits = (arr) => {
    return arr?.map((e, key) => {
        return <div className='' key={key}>
            <div className=''>
                <Image className='mx-auto min-h-[150px]' src={e.benefits_image} width={500} height={500} alt='benefits_image' loading='lazy' />
                <p className={`${noto.className} font-semibold text-center text-[0.9rem] md:text-[1.3rem] py-2 `}>{e.benefits_content}</p>
            </div>
        </div>
    })
}


function MenProblem() {
    return (<div>
        <div className='purush_background'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid md:grid-cols-2 grid-rows-1 gap-2 items-center'>
                    <div className='order-last md:order-first'>
                        <Image className='mx-auto min-h-[400px]' src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/db0af8b6-e35e-401b-b731-c8a9523dd400/public"} width={450} height={500} alt='sed_men' loading='lazy' />
                    </div>
                    <div className='py-3'>
                        <img className='mx-auto min-h-[180px] w-[80%] ' src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4ac98633-88a0-46c2-42cd-3dc93a87b100/public"} alt='sed_text_image' loading='lazy' />
                        <ul className={`${noto.className} py-4 px-2 font-semibold text-[1.2rem] md:text-[1.6rem] space-y-3  list-disc list-outside  `}>
                            <li>भारतीय पुरुषों का पेनिस साइज औसतन 4.9 इंच होता है जो की बहुत कम है। </li>
                            <li>उनकी सेक्स अवधि 6 मिनट से भी कम है जो महिलाओं की अपेक्षा काफी कम है। </li>
                            <li>विदेशी पुरुषो के मुकाबले जोश, उत्तेजना, ताकत तथा स्टैमिना काफी कम है। </li>
                            <li>भारतीय पुरुष कम उम्र में ही सेक्स से दूर होने लगते है, यानि कामेच्छा भी कम है।</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className='w-full max-w-7xl mx-auto'>
            <div className='py-4'>
                <img className='mx-auto px-2 min-h-[100px] w-full sm:w-[760px]' src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0639944f-3286-41b4-91f5-92286a9a0a00/public"} alt='bullrider_required_image' loading='lazy' />
            </div>


            <div className='grid grid-cols-2 grid-rows-1 gap-2 items-center'>
                <div>
                    {
                        bullrider_benefits([
                            {
                                benefits_image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cf359e15-f480-4534-e3f2-ce3afae85400/public', benefits_content: 'इसे खाने के बाद पेनिस की लम्बाई 22 CM यानि 9 इंच तक बढ़ सकती है।'
                            }
                        ])
                    }
                </div>
                <div>
                    {
                        bullrider_benefits([
                            {
                                benefits_image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/46f9410a-6823-44b5-bf64-31d46c65d500/public', benefits_content: 'अफ्रीकन पुरुषों की तरह ताकत, जोश और बॉडी में स्टैमिना का निर्माण होगा।'
                            }
                        ])
                    }
                </div>
                <div>
                    {
                        bullrider_benefits([
                            {
                                benefits_image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3a2c3a9c-1903-4c20-bee1-538ad348d700/public', benefits_content: 'क्योंकि यह 65 साल के पुरुष को भी उत्तेजित कर सेक्स की इच्छा जाग्रत कर दे।'
                            }
                        ])
                    }
                </div>
                <div>
                    {
                        bullrider_benefits([
                            {
                                benefits_image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a6e277c2-0071-4588-46d1-3d25bb2b9700/public', benefits_content: '2 मिनट से कम या लगभग 5-6 मिनट की अवधि उछल कर 45 मिनट से ज्यादा होगी।'
                            }
                        ])
                    }
                </div>
            </div>
        </div>
    </div>
    )
}

export default MenProblem;