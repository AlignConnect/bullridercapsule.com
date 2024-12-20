import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});



const Section2 = () => {



  return (
    <div className={noto.className}>
      <div className="bg-[#e4d638] py-5">
        <div className="w-full md:max-w-7xl m-auto px-3 text-center font-black text-xl">100% Secure + 100% Powerfull</div>
      </div>
      <section className="bg-white">
        <div className="w-full md:max-w-7xl m-auto px-2 text-lg">
          <p className="pt-4 italic md:text-2xl">
            "बुल राइडर कैप्सूल एक महत्वपूर्ण आयुर्वेदिक औषधि है जो पुरुष यौन रोग
            जैसे शीघ्रपतन, इरेक्टाइल डिसफंक्शन यानि लिंग का ढ़ीलापन, शारीरिक
            ऊर्जा और स्टैमिना की कमी जैसी समस्याओं को जड़ से मिटाकर पुरुषों को
            असली मर्दानगी का एहसास कराता है।"
          </p>
          <div className="flex flex-col md:flex-row max-w-5xl m-auto  justify-center items-center md:p-4 mt-5">
            <div className="w-72 h-80 rounded-lg overflow-hidden flex-none">
              <img
                alt="image1"
                fetchPriority="high"
                decoding="async"
                loading="eager"
                src="/main/bhf_images/pe.jpg"
                className="shrink-0 min-h-[300px]"
              />
            </div>
            <div className="ml-3">
              <h1 className="md:text-7xl text-5xl pt-5 font-bold">
                क्यों है जरुरत ?
              </h1>
              <p>
                आज के समय में पुरुषों में यौन समस्या सबसे तेजी से बढ़ रहा है।
                सर्वे की माने तो दुनियाभर के लगभग 40% लोग इरेक्टाइल डिसफंक्शन से
                और 30% लोग शीघ्रपतन से परेशान है और इस आंकड़ों में सबसे ज्यादा
                संख्या भारतीय पुरुषों का है।
              </p>
              <p className="mt-2">
                आज की समय में यह समस्या रिलेशनशिप में तनाव, ब्रेकअप और शादीशुदा
                जीवन में तलाक की सबसे बड़ी वजह मानी जा रही है। गौरतलब है की आज की
                शिक्षित और मॉडर्न सोच रखने वाली लड़किया अपने पुरुष पार्टनर की
                कमजोरी बताने में नहीं हिचकती है। हर बार सेक्स के दौरान यौन
                संतुष्टि न मिलने से वे दुखी होती है और धीरे- धीरे रिश्ते में
                प्यार के जगह झगडा और तनाव बढ़ने लगता है।
              </p>

              <p className="mt-2">
                इसलिए रिश्ते में बढ़ रही कड़वाहट को मिटाकर प्यार बढ़ाने के लिए तैयार
                किया गया है भारत का सर्वश्रेष्ठ सेक्स पावर बूस्टर bull rider capsule.
                यह पुरुषों में टेस्टोस्टेरोन हॉर्मोन बढाकर लिंग मे रक्त प्रवाह को
                सुधारता है। इसकी मदद से 60 साल के व्यक्ति का ढीला लिंग भी जबरदस्त
                तरीके से सख्त हो सकता है। किसी भी उम्र से कमजोर स्टैमिना व शीघ्रपतन
                से परेशान पुरुष "बुल राइडर कैप्सूल" की मदद से घंटो तक जोरदार सेक्स
                करने के काबिल बन सकते है।
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section2;
