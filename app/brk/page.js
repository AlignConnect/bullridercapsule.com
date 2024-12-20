"use client";
import { useEffect } from 'react';
import { Noto_Serif_Devanagari } from 'next/font/google'
import dynamic from 'next/dynamic';


const HeaderPage = dynamic(() => import('./components/HeaderPage'), {
    loading: () => <p>loader</p>
});

const BottomPopupCall = dynamic(() => import('../commonUse/bottompopup/BottomPopupCall'), {
    loading: () => <p>loader</p>
});


const BottomPopupForm = dynamic(() => import('../commonUse/bottompopup/bottomPopupForm'), {
    loading: () => <p>loader</p>
});


const HomePage = dynamic(() => import('./components/HomePage'), {
    loading: () => <p>loader</p>
});


const FlipAmazon = dynamic(() => import('./components/FlipAmazon'), {
    loading: () => <p>loader</p>
});

const LikeMen = dynamic(() => import('./components/LikeMen'), {
    loading: () => <p>loader</p>
});


const BullWhy = dynamic(() => import('./components/BullWhy'), {
    loading: () => <p>loader</p>
});

const ExpertSayDivide = dynamic(() => import('./components/ExpertSayDivide'), {
    loading: () => <p>loader</p>
});

const Loading = dynamic(() => import('../commonUse/loader/Loading'), {
    loading: () => <p>loader</p>
});

const Experts = dynamic(() => import('./components/Experts'), {
    loading: () => <p>loader</p>
});


const Form = dynamic(() => import('./components/Form'), {
    loading: () => <p>loader</p>
});
const FinalResult = dynamic(() => import('./components/FinalResult'), {
    loading: () => <p>loader</p>
});
const CustomerReview = dynamic(() => import('./components/CustomerReview'), {
    loading: () => <p>loader</p>
});
const Footer = dynamic(() => import('../commonUse/Footer'), {
    loading: () => <p>loader</p>
});

const FooterP = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>loader</p>
});





const page = () => {



    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/brk");

    }, [])




    return (
        <div>
            {/* {loading && <Suspense fallback={<p>loader</p>}><Loading /></Suspense>} */}
            <div className={`bg-black text-white w-full mb-[4rem] sm:mb-0 `} id='footershow'>
                <div className='bg-white mx-auto w-[100%] sm:w-[27rem]'>


                    <HeaderPage />

                    <HomePage />

                    <FlipAmazon />

                    <LikeMen />


                    <FlipAmazon />


                    <BullWhy />


                    <FlipAmazon />


                    <Experts />


                    <FlipAmazon />



                    <ExpertSayDivide />


                    <FinalResult />


                    <Form />

                    <CustomerReview />


                    <Footer />


                    <FooterP />




                </div>
            </div>
        </div>
    )
}
export default page;