import dynamic from "next/dynamic";
import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const First = dynamic(() => import('./Precomponent/First'), {
  loading: () => <p>loader</p>
})

const Section1 = () => {
  return (
    <div className={noto.className}>

      <section className="md:bg-web1 bg-mobile1 md:h-screen bg-cover bg-center md:bg-right bg-no-repeat">
        <div className="text-center block md:hidden">
          <h1 className={`fontPoppins md:text-3xl py-3 text-xl font-medium`}>
            INDIA'S Top Selling Product
          </h1>
          <h1 className="md:text-[7rem] text-5xl  text-red-600 font-black uppercase pt-3">
            Bull Rider <br /> <span className="text-black"> Capsule </span>
          </h1>
        </div>

        <First />

        <div className="pb-3 w-full text-center">
          <a href={"#form"} className="block md:hidden text-center bg-red-600 md:w-1/3 w-2/3 mx-auto pt-4 pb-2 font-semibold text-white rounded-full text-xl shadow-lg shadow-red-500/60">
            ORDER NOW
          </a>
        </div>

      </section>
    </div>
  );
};

export default Section1;
