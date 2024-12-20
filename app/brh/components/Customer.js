import React from 'react';
import { Noto_Serif_Devanagari, Poppins } from 'next/font/google';
import Image from 'next/image';


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


const customer_comment = (arr) => {
    return arr?.map((e, key) => {
        return <div className='mx-auto text-center w-full max-w-7xl py-3 bg-black my-12 rounded-xl' key={key}>
            <div className='-mt-12'>
                <Image className='mx-auto' src={e.customer_image} width={80} height={80} alt='customer_speaking_image' loading='lazy' />
            </div>
            <div className={`${poppins.className} text-[1.2rem] md:text-[1.5rem] py-2 font-semibold text-yellow-300`}>
                {e.customer_name}
            </div>
            <div className={`${noto.className} !italic text-white text-[1.1rem] md:text-[1.3rem] px-2`}>
                {e.customer_content}
            </div>
        </div>
    })
}


function Customer() {
    return (<div>
        <div className='bg-black'>
            <div className='mx-auto text-center w-full max-w-7xl py-2'>
                <div className={`${poppins.className} font-semibold text-[1.8rem] md:text-[2.8rem] text-red-500`}>
                    परिणाम से संतुष्ट ग्राहक
                </div>
            </div >
        </div>

        <div>
            {
                customer_comment([
                    {
                        customer_image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d138b4e0-56f7-4ef0-9d79-001362192700/public',
                        customer_name: 'Ravi Marangoni | 29 Years',
                        customer_content: 'Bull Rider का समस्या पर बहुत ही सकारात्मक प्रभाव है। इसमें कोई शर्मिंदगी की बात नहीं की पहले मैं शीघ्रपतन से पीड़ित था। फिर मुझे Bull Rider मिला, मैं इसे पिछले 3 महीने से नियमित इस्तेमाल कर रहा हूँ और आज मेरी सेक्स अवधि लगभग 45 मिनट से ज्यादा हो गयी है। इतना ही नहीं पहले एक बार डिस्चार्ज होने के बाद लिंग में उफान नहीं होता था पर अब के कड़कपन में बहुत अंतर है साथ ही साइज में भी वृद्धि हुई है जिससे मैं किसी भी लड़की को संतुष्ट कर सकता हूँ।'
                    },
                    {
                        customer_image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3d7e30e5-39ca-4b6e-4d0a-047750ab2500/public',
                        customer_name: 'Yash Sarvaiya | 32 Years',
                        customer_content: 'इस प्रोडक्ट की जितनी तारीफ करें उतना कम है। इसमें मेरे उदास जीवन में ख़ुशी भर दिया। दोस्तों, बुल राइडर के इस्तेमाल से कुछ ही दिनों में मेरे सेक्स अवधि और लिंग के कड़कपन में काफी वृद्धि हो गयी और मेरा सेक्स प्रदर्शन काफी अच्छा हो गया है। अब तो सब कुछ नॉनस्टॉप चलता है। बुल राइडर कैप्सूल का नियमित सेवन किसी भी कमजोर से कमजोर पुरुष को जोशीला और ऊर्जावान बना सकता है।'
                    }
                ])
            }
        </div>

    </div >
    )
}

export default Customer;