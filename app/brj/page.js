"use client"
import '@/app/brc/components/home.css'
import dynamic from "next/dynamic";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Noto_Serif_Devanagari } from 'next/font/google';
import './brj.css';
import { useGlobalContext } from "../statemanage/context";
import { useEffect } from "react";

// const noto = Noto_Serif_Devanagari({
//   subsets: ['devanagari'],
//   display: 'swap',
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
// });


// const FlipAmazon = dynamic(() => import('./components/FlipAmazon'), {
//   loading: () => <p>loader</p>
// });

// const Section1 = dynamic(() => import('./components/Section1'), {
//   loading: () => <p>loader</p>
// });

// const Section2 = dynamic(() => import('./components/Section2'), {
//   loading: () => <p>loader</p>
// });

// const Section3 = dynamic(() => import('./components/Section3'), {
//   loading: () => <p>loader</p>
// });

// const Experts = dynamic(() => import('./components/Experts'), {
//   loading: () => <p>loader</p>
// });

// const Section4 = dynamic(() => import('./components/Section4'), {
//   loading: () => <p>loader</p>
// });

// const Form = dynamic(() => import('./components/Form'), {
//   loading: () => <p>loader</p>
// });

// const CustomerReview = dynamic(() => import('./components/CustomerReview'), {
//   loading: () => <p>loader</p>
// });

// const Footer = dynamic(() => import('../commonUse/Footer'), {
//   loading: () => <p>loader</p>
// });



const Header = dynamic(() => import("./componentnew/Header"), {
  loading: () => <p>Header is Loading...</p>,
});

const Recommendation = dynamic(() => import("./componentnew/Recommendation"), {
  loading: () => <p>Loading...</p>,
});

const Feel = dynamic(() => import("./componentnew/Feel"), {
  loading: () => <p>Loading...</p>,
});


const Active_Life = dynamic(() => import("./componentnew/Active_Life"), {
  loading: () => <p>Loading...</p>,
});

const Key_benifits = dynamic(() => import("./componentnew/Key_benifits"), {
  loading: () => <p>Loading...</p>,
});

const Use_it = dynamic(() => import("./componentnew/Use_it"), {
  loading: () => <p>Loading...</p>,
});

const Sevan_kare = dynamic(() => import("./componentnew/Sevan_kare"), {
  loading: () => <p>Loading...</p>,
});

const Footer = dynamic(() => import("./componentnew/new_footer/Footer"), {
  loading: () => <p>Loading...</p>,
});




const FooterP = dynamic(() => import('../commonUse/bottompopup/BottomHandler'), {
  loading: () => <p>loader</p>
});


const Big = dynamic(() => import('@/app/commonUse/bigbillion/Big'));



const noto = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});




const page = () => {



  const { GetCallSetting, FetchWebCheckout, loading, callDetail, sc } = useGlobalContext();

  useEffect(() => {

    GetCallSetting(process.env.NEXT_APP_API_KEY_BRJ);
    FetchWebCheckout(process.env.NEXT_APP_API_KEY_BRJ, process.env.NEXT_APP_URL_BRJ)

    localStorage.setItem("PATH_KEY", "/brj");

  }, [])



  return (

    // <div className={`bg-white text-black w-full mb-[4rem] sm:mb-0 ${noto.className}`} id='footershow'>

    //   <Section1 />

    //   <div className='md:w-[47rem] mx-auto w-full'>
    //     <FlipAmazon />
    //   </div>

    //   <Section2 />

    //   <div className='md:w-[47rem] mx-auto w-full'>
    //     <FlipAmazon />
    //   </div>

    //   <Section3 />

    //   <Experts />

    //   <div className='md:w-[47rem] mx-auto w-full'>
    //     <FlipAmazon />
    //   </div>

    //   <Section4 />

    //   <div className='md:w-[47rem] mx-auto w-full'>
    //     <FlipAmazon />
    //   </div>

    //   <Form />

    //   <CustomerReview />

    //   <Footer />


    // </div>

    <section className={noto.className}>
      <section>

        <Header />

        {/* <Big /> */}
        <Recommendation />

        <Feel />

        <Active_Life />

        <Key_benifits />



        <Use_it />

        <Sevan_kare />

        <Footer />

        <FooterP />
      </section>



    </section>


  )
}

export default page;