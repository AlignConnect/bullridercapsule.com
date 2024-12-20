import { data } from "./servicesData";
import { Noto_Serif_Devanagari, Poppins } from "next/font/google";



const noto = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const pop = Poppins({
  subsets: ['devanagari'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Section3 = () => {
  return (
    <section className={`${noto.className} bg-[#f9f6e3] pb-6 md:p-10`}>
      <h1 className={`${pop.className} text-center text-4xl md:text-5xl px-3 font-bold pt-5 md:pt-1 pb-8`}>
        Why Trust on BullRider Capsule
      </h1>
      <div className="w-full md:max-w-7xl  m-auto px-3">
        <div className="grid md:grid-cols-3 grid-cols-2 gap-2 md:gap-y-10 md:gap-4">
          {data.map((item, i) => {
            return (
              <div
                key={i}
                className="md:w-1/2 md:mx-auto flex flex-col items-center justify-center text-center rounded-xl border-2 border-zinc-800 p-3"
              >
                <img
                  src={item.url}
                  width={100}
                  height={100}
                  alt="image1"
                  loading="lazy"
                />
                <p className="text-xl font-semibold pt-4">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Section3;
