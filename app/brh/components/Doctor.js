import Image from 'next/image';
import { Noto_Serif_Devanagari, Poppins } from 'next/font/google';

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const poppins = Poppins({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
function Doctor() {
    return (<div className='doctorBG'>
        <div className='w-full max-w-7xl mx-auto pt-10'>
            <div className='grid md:grid-cols-2 grid-rows-1 gap-3 items-center justify-center'>
                <div className=''>
                    <div className={`${noto.className} !italic font-extrabold text-red-500 text-[2rem] md:text-[3rem] `}>डॉक्टर्स द्वारा सुझाया</div>
                    <p className={`${noto.className} px-2 py-2 text-justify text-[1.1rem] md:text-[1.5rem] border-solid border-1`}>Bull Rider के इस्तेमाल से लिंग के नर्वस प्रकोष्ठ फैलते है, ब्लड सर्कुलेशन तेज होता है लिंग की नसों में भरपूर रक्त पहुँचता है जिससे ग्लैंस बढता है तथा पुरे लिंग में चट्टान जैसी सख्ती मिलती है। इससे लिंग के लम्बाई, मोटाई और सेक्स अवधि में अद्भुत वृद्धि देखे गए है। मैं उन पुरुषों को Bull Rider Capsule खाने की सलाह देता हूँ जो डॉक्टर कंसल्टेशन से घबराते या शर्माते है। इसकी मदद से आप घर बैठे अपनी समस्या जड़ से मिटा सकते है।</p>
                    <div className={`${poppins.className} hidden md:block  doctorname rounded-xl mx-auto md:mx-0 py-1 w-80 md:w-1/2`}>
                        <div className='text-center'>
                            <span className='font-semibold text-[1.3rem]'>Dr. Abhinav Pandey</span><br />
                            <span>17 Years of experience | MBBS</span><br />
                            <span>General Physician, Sexologist</span>
                        </div>
                    </div>
                </div>
                <div className='mx-auto'>
                    <Image className='min-h-[200px]' src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1dd2302f-9f12-4a56-8a53-6efda0653400/public"} width={300} height={500} alt='doctor' loading='lazy' />
                    <div className={`${poppins.className} mb-2 block md:hidden  doctorname rounded-xl mx-auto md:mx-0 py-1 w-80 md:w-1/2`}>
                        <div className='text-center'>
                            <span className='font-semibold text-[1.3rem]'>Dr. Abhinav Pandey</span><br />
                            <span>17 Years of experience | MBBS</span><br />
                            <span>General Physician, Sexologist</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >
    )
}

export default Doctor;