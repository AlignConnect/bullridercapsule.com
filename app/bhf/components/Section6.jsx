import { Benefitdata } from "./benefitData";
import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Section6 = () => {
  return (
    <section className={`${noto.className} bg-back2 bg-right bg-cover bg-no-repeat`}>
      <div className="bg-white">
        <h1 className="w-full md:max-w-5xl text-center text-2xl md:text-3xl font-semibold  pt-5  m-auto px-3 py-6 text-justify">
          "Bullrider capsule एक प्रूवेन फार्मूलेशन है। यह लैब टेस्टेड और आयुष
          मंत्रालय द्वारा प्रमाणित है जो सेक्स अवधि, शक्ति-स्फूर्ति और लिंग
          वृद्धि में मदद करता है।
        </h1>
      </div>
      <div className="w-full  md:max-w-7xl m-auto px-3">
        <h1 className=" text-center font-bold text-4xl py-5 pt-7">
          Bullrider Capsule खाने के बाद
        </h1>
        <div className="flex flex-col md:flex-row items-center md:gap-x-10 justify-center ">
          {Benefitdata.map((list, i) => {
            return (
              <div
                key={i}
                className="flex md:w-3/4 flex-col items-center  justify-center mb-6"
              >
                <div className="w-[80%] md:w-[100%] border-8 border-white rounded-lg overflow-hidden shadow-lg shadow-blue-400/30">
                  <img
                    alt="image1"
                    fetchPriority="high"
                    decoding="async"
                    loading="eager"
                    src={list.url}
                    className="w-full min-h-[300px]"
                  />
                </div>
                <div className="">
                  <h1 className="font-bold text-3xl pt-7">
                    {list.title}
                  </h1>
                  <p className=" text-xl pb-2  font-semibold">
                    {list.disc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Section6;
