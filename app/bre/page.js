"use client";
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Noto_Serif_Devanagari } from 'next/font/google';
import './bre.css';


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


const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const page = () => {


    useEffect(() => {


        localStorage.setItem("PATH_KEY", "/bre");

    }, [])




    return (

        <section className={noto.className}>
            <section>

                <Header />

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
        // <>
        //     <Header />
        //     <GetBiggerPenis />
        //     <FlipAmazon />
        //     <WomenNeed />
        //     <FlipAmazon />
        //     <Premium_bull_rider />
        //     <Percentage_bull_rider />
        //     <FlipAmazon />
        //     <Expert />
        //     <Doctor />
        //     <FlipAmazon />
        //     <Question_Answer />
        //     <Benefits_brc />
        //     <FlipAmazon />
        //     <Vishesh_suvidha />
        //     <Form />
        //     <CustomerReview />
        //     <Footer />
        //     <FooterP />
        // </>

        // <div className={`${noto.className}`}>
        //     {/* {loading && <Suspense fallback={<p>loader</p>}><Loading /></Suspense>} */}
        //     <div>
        //         <Suspense fallback={<p>Header Loading....</p>}>
        //             <Header />
        //         </Suspense>

        //         <Suspense fallback={<p>Loading......</p>}>
        //             <GetBiggerPenis />
        //         </Suspense>

        //         <Suspense fallback={<p>Loading......</p>}>
        //             <FlipAmazon />
        //         </Suspense>

        //         <Suspense fallback={<p>Loading......</p>}>
        //             <WomenNeed />
        //         </Suspense>

        //         <Suspense fallback={<p>Loading......</p>}>
        //             <FlipAmazon />
        //         </Suspense>

        //         <Suspense fallback={<p>Loading......</p>}>
        //             <Premium_bull_rider />
        //         </Suspense>

        //         <Suspense fallback={<p>Loading......</p>}>
        //             <Percentage_bull_rider />
        //         </Suspense>

        //         <Suspense fallback={<p>Loading......</p>}>
        //             <FlipAmazon />
        //         </Suspense>

        //         <Suspense fallback={<p>Loading......</p>}>
        //             <Expert />
        //         </Suspense>

        //         <Suspense fallback={<p>Loading......</p>}>
        //             {/* <Doctor /> */}
        //         </Suspense>

        //         <Suspense fallback={<p>Loading......</p>}>
        //             <FlipAmazon />
        //         </Suspense>


        //         {/* ---------------------------------------------------------------------- */}
        //         {/* <Suspense fallback={<p>Loading......</p>}>
        //             <Sevan_vidhi />
        //         </Suspense> */}
        //         {/* ---------------------------------------------------------------------- */}

        //         <Suspense fallback={<p>Loading......</p>}>
        //             <Question_Answer />
        //         </Suspense>

        //         <Suspense fallback={<p>Loading......</p>}>
        //             <FlipAmazon />
        //         </Suspense>

        //         <Suspense fallback={<p>Loading......</p>}>
        //             <Benefits_brc />
        //         </Suspense>

        //         <Suspense fallback={<p>Loading......</p>}>
        //             <FlipAmazon />
        //         </Suspense>

        //         <Suspense fallback={<p>Loading......</p>}>
        //             <Vishesh_suvidha />
        //         </Suspense>

        //         <Suspense fallback={<p>Form Loading</p>}>
        //             <Form />
        //         </Suspense>

        //         <Suspense fallback={<p>Customer Review Loading</p>}>
        //             <CustomerReview />
        //         </Suspense>

        //         <Suspense fallback={<p>Footer Loading</p>}>
        //             <Footer />
        //         </Suspense>
        //     </div>

        //     <div className={`w-full block sm:hidden ${sc > 50 ? "tt" : 'xx'} fixed z-[11111111] text-white`}>
        //         {callDetail.callStatus ? <Suspense fallback={<p>wait</p>}><BottomPopupCall /></Suspense> :
        //             <Suspense fallback={<p>wait</p>}><BottomPopupForm /></Suspense>}
        //     </div>
        // </div>

    )
}

export default page;