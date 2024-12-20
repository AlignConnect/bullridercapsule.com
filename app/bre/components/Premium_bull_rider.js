import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

function Premium_bull_rider() {
    return (
        <section className={noto.className}>
            <div className='bg-[#fff5d2]'>
                <div className='w-full max-w-7xl mx-auto min-h-[250px]'>
                    {/* <Image className='py-2 mx-auto min-h-[250px]' src={"https://staticcontent.bullridercapsule.com/bre/bull_rider_premium.png"} width={500} height={500} alt='bull_rider_premium' loading='lazy' /> */}
                    <img className='py-2 mx-auto min-h-[250px]' width={400} src={"/main/bre_images/bull_rider_premium.png"} alt='bull_rider_premium' loading='lazy' />
                </div>
                <div className='w-full max-w-7xl mx-auto text-[1.2rem] md:text-2xl py-7 px-2 text-justify'>
                    <span className='font-extrabold text-red-600'>Bull Rider Capsule</span> एक प्रीमियम फार्मूलेशन है जिसमें अश्वगंधा, शिलाजीत, सफ़ेद मूसली, गोखुरा जैसी 13 उत्कृष्ट जड़ीबूटियों और भस्मों की शक्तियों समाहित है। ये टेस्टोस्टेरोन हॉर्मोन लेवल बढ़ाकर, शरीर में एनर्जी और स्टैमिना बढ़ाने, लिंग में भरपूर उफान बढ़ाने तथा सेक्स टाइमिंग उस लेवल तक बढ़ाने में मदद करता है जितने में आप अपने महिला पार्टनर को सेक्स का असली सुख दे सकें।
                </div>
            </div>
        </section>
    )
}

export default Premium_bull_rider;