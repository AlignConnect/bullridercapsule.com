import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Section7 = () => {
  return (
    <section className={`${noto.className} bg-slate-100 relative z-20`}>
      <div className="w-full md:max-w-4xl m-auto py-4 px-3">
        <div className=" flex flex-col md:flex-row justify-center items-center">
          <img
            src="/main/bhf_images/suvidha.webp"
            width={320}
            height={320}
            alt="image1"
            loading="lazy"
          />
          <p className="font-bold text-2xl pl-4 pt-5">
            कंपनी पुरुष स्वास्थ्य को प्राथमिकता देती है। समस्या
            जड़ से मिटाने के लिए एक्सपर्ट्स रोगी से जानकारी लेते है और उनके उम्र,
            लम्बाई और वजन का आंकलन कर के स्पेशल दवा तैयार करते है जो 100%
            गारन्टी के साथ असर करता है।
          </p>
        </div>
        <div className="bg-green-600 text-white text-center p-3 mt-5  pt-7 rounded-lg">
          <h1 className="font-bold text-5xl"> सेवन विधि</h1>
          <p className="text-xl">
            Bullrider capsule का सेवन बहुत ही आसान है। बेहतर सेक्स टाइमिंग, रॉक
            हार्ड इरेक्शन, जोश-स्टैमिना और शारीरिक शक्ति के लिए 1 कैप्सूल
            सुबह-शाम 1 गिलास गुनगुने दूध या पानी के साथ लें ! बेहतर परिणाम के
            लिए दूध के साथ इस्तेमाल का सुझाव दिया गया है।
          </p>
        </div>
        <div>
          <div className="flex justify-center items-center pt-10">
            <img
              src="/main/bhf_images/productcerti.webp"
              className="md:w-3/4 w-full mb-6"
              width={384}
              alt="image1"
              loading="lazy"
            />
          </div>
          <div className="bg-white p-3 text-center shadow-lg rounded-xl relative mt-10">
            <h1 className="text-justify text-xl pt-12 ">
              जी हाँ, Summer "धमाका" Sale में ऑनलाइन पेमेंट पर प्रतिदिन 100
              भाग्यशाली ग्राहकों को मिल रहा है बुल राइडर का पैक बिल्कुल फ्री!
              मौका हाथ से ना जाने दे फ्री में बुल राइडर मंगाए। अगर आप भाग्यशाली
              हुए तो आपका भी पूरा पैसा आपके अकाउंट में ट्रांसफर कर दिया जायेगा !
            </h1>
            <div className="absolute md:w-1/2 md:m-auto  border-dashed border-2 border-white font-bold rounded-xl top-0 bg-red-500 -translate-y-2/4 -translate-x-2/4  inline py-1">
              <p className="text-white text-4xl md:text-4xl px-4 pt-3 md:px-0 ">
                Free...Free...Free
              </p>
              <p className="text-2xl"> Summer Dhamaka Offer</p>
            </div>
          </div>
          <p className="text-blue-600 text-start font-bold pt-3 md:pt-6 md:text-3xl text-base">
            नोट- अन्य ग्राहकों के लिए 50% का बम्पर डिस्काउंट और ऑनलाइन पेमेंट पर
            10% अतिरिक्त बचत उपलब्ध है।
          </p>
          <h2 className="text-center text-xl font-semibold italic pt-5 ">
            "लाखों पुरुष बुल राइडर के इस्तेमाल से लिंग बृद्धि और मनचाही सेक्स
            अवधि पाकर लाइफ को मजेदार बना चुके है ! आप किस इंतजार में है
            एक्सपर्ट्स से संपर्क करें अपनी समस्या बताएं और प्रोडक्ट आर्डर कर
            अपनी कमजोरी से छुटकारा पाएं।"
          </h2>
        </div>
      </div>

      <div className="md:w-[500px] w-80  md:h-[500px] h-60 -z-10 bg-violet-600 absolute top-24 md:top-10 opacity-30 rounded-full blur-3xl md:blur-[7rem] "></div>
      <div className="md:w-[500px] w-80  md:h-[500px] h-60 -z-10 bg-yellow-500 absolute top-1/2 md:top-1/2 inset-x-0 opacity-30 rounded-full blur-3xl md:blur-[7rem] "></div>
      <div className="md:w-[500px] w-80  md:h-[500px] h-60 -z-10 bg-red-600 absolute bottom-10 right-20 opacity-30 rounded-full blur-3xl md:blur-[7rem] "></div>
    </section>
  );
};

export default Section7;
