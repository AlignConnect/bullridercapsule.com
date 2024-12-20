"use client"
import '@/app/brc/components/home.css'
import React, { useEffect, Suspense, lazy } from 'react'
import dynamic from "next/dynamic"
import { useGlobalContext } from "../statemanage/context";
import { Noto_Serif_Devanagari } from 'next/font/google';
import Big from '../commonUse/bigbillion/Big';


const BottomPopupCall = lazy(() => import('../commonUse/bottompopup/bottomPopupCall'));
const BottomPopupForm = lazy(() => import('../commonUse/bottompopup/bottomPopupForm'));




// Header
const Header = dynamic(() => import('../brh/components/Header'), {
    loading: () => <p>Loading...</p>
})


const Increasetime = dynamic(() => import('../brh/components/Increacetime'), {
    loading: () => <p>Loading...</p>
})

const FlipkartandAmezon = dynamic(() => import('./component/FlipkartandAmezon'), {
    loading: () => <p>Loading...</p>
})

const Science = dynamic(() => import('../brh/components/Science'), {
    loading: () => <p>Loading...</p>
})

const Fourweek = dynamic(() => import('../brh/components/Fourweek'), {
    loading: () => <p>Loading...</p>
})


const Doctor = dynamic(() => import('../brh/components/Doctor'), {
    loading: () => <p>Loading...</p>
})

const Customer = dynamic(() => import('../brh/components/Customer'), {
    loading: () => <p>Loading...</p>
})

const TryBullRider = dynamic(() => import('../brh/components/TryBullRider'), {
    loading: () => <p>Loading...</p>
})

const MenProblem = dynamic(() => import('../brh/components/MenProblem'), {
    loading: () => <p>Loading...</p>
})

const SevanVidhi = dynamic(() => import('../brh/components/SevanVidhi'), {
    loading: () => <p>Loading...</p>
})

const Form = dynamic(() => import('./component/BrgForm'), {
    loading: () => <p>Loading...</p>
})

const Reviews = dynamic(() => import('../brh/components/Reviews'), {
    loading: () => <p>Loading...</p>
})
const Footer = dynamic(() => import('../commonUse/Footer'), {
    loading: () => <p>Loading...</p>
})


// const Header = dynamic(() => import("./components/Header"), {
//     loading: () => <p>Header is Loading...</p>,
// });

// const Recommendation = dynamic(() => import("./components/Recommendation"), {
//     loading: () => <p>Loading...</p>,
// });

// const Feel = dynamic(() => import("./components/Feel"), {
//     loading: () => <p>Loading...</p>,
// });


// const Active_Life = dynamic(() => import("./components/Active_Life"), {
//     loading: () => <p>Loading...</p>,
// });

// const Key_benifits = dynamic(() => import("./components/Key_benifits"), {
//     loading: () => <p>Loading...</p>,
// });

// const Use_it = dynamic(() => import("./components/Use_it"), {
//     loading: () => <p>Loading...</p>,
// });

// const Sevan_kare = dynamic(() => import("./components/Sevan_kare"), {
//     loading: () => <p>Loading...</p>,
// });

// const Footer = dynamic(() => import("./components/new_footer/Footer"), {
//     loading: () => <p>Loading...</p>,
// });




// const FooterP = dynamic(() => import('../commonUse/bottompopup/BottomHandler'), {
//     loading: () => <p>loader</p>
// });


// const Big = dynamic(() => import('@/app/commonUse/bigbillion/Big'));



const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});





const page = () => {


    const { GetCallSetting, FetchWebCheckout, loading, callDetail, sc } = useGlobalContext();

    useEffect(() => {

        GetCallSetting(process.env.NEXT_APP_API_KEY_BRO);
        FetchWebCheckout(process.env.NEXT_APP_API_KEY_BRO, process.env.NEXT_APP_URL_BRO)

        localStorage.setItem("PATH_KEY", "/bro");

    }, [])



    return (
        <div>
            <Header />
            <Increasetime />
            {/* <FlipkartandAmezon /> */}
            <Big />
            <Science />
            <FlipkartandAmezon />
            <Fourweek />
            <Doctor />
            <FlipkartandAmezon />
            <Customer />
            <TryBullRider />
            <FlipkartandAmezon />
            <MenProblem />
            <FlipkartandAmezon />
            <SevanVidhi />
            <FlipkartandAmezon />
            <Form />
            <Reviews />
            <Footer />

            <div className={`w-full block text-white sm:hidden ${sc > 50 ? "tt" : 'xx'} fixed z-[11111111]`}>
                {callDetail.callStatus ? <Suspense fallback={<p>Footer Loading</p>}>
                    <BottomPopupCall />
                </Suspense> :
                    <Suspense fallback={<p>Footer Loading</p>}>
                        <BottomPopupForm />
                    </Suspense>}    
            </div>

        </div>

        // <section className={noto.className}>
        //     <section>

        //         <Header />

        //         {/* <Big /> */}
        //         <Recommendation />

        //         <Feel />

        //         <Active_Life />

        //         <Key_benifits />



        //         <Use_it />

        //         <Sevan_kare />

        //         <Footer />

        //         <FooterP />
        //     </section>



        // </section>

    )
}

export default page;