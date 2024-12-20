"use client"
import React, { Suspense, lazy, useEffect } from 'react';
import './brb.css';
import { useGlobalContext } from '../statemanage/context';
const Order = lazy(() => import('./component/Order'));
const BullVertificate = lazy(() => import('./component/BullVertificate'));
const BrbHeader = lazy(() => import('./component/BrbHeader'));
const Imtitle = lazy(() => import('./component/Imtitle'));
// const Ayurveda = lazy(() => import('./component/Ayurveda'));
// const Im = lazy(() => import('./component/Im'));
const Youtube = lazy(() => import('./component/Youtube'));
const BullRiderCapsule = lazy(() => import("./component/BullRiderCapsule"));
const GifComponent = lazy(() => import('./component/GifComponent'));
const Imp = lazy(() => import('./component/Imp'));
const Form = lazy(() => import('./component/form'));
const ReviewYoutube = lazy(() => import('./component/ReviewVideo'));
const ReviewCompo = lazy(() => import('./component/ReviewCompo'));
const Footer = lazy(() => import('./component/Footer'));
const BottomPopupCall = lazy(() => import('../commonUse/bottompopup/bottomPopupCall'));
const BottomPopupForm = lazy(() => import('../commonUse/bottompopup/bottomPopupForm'));


const page = () => {


    const { GetCallSetting, FetchWebCheckout, callDetail, sc } = useGlobalContext();


    useEffect(() => {

        GetCallSetting(process.env.NEXT_APP_URL_BRB);
        FetchWebCheckout(process.env.NEXT_APP_API_KEY_BRB, process.env.NEXT_APP_URL_BRB);

        localStorage.setItem("PATH_KEY", "/brb");

    }, []);

    return (
        <div className='w-full md:w-1/3 mx-auto'>

            <Suspense fallback={<p>Header</p>}>
                <BrbHeader />
            </Suspense>

            <Suspense fallback={<p>Header</p>}>
                <Order />
            </Suspense>

            <Suspense fallback={<p>Bull Certificate</p>}>
                <BullVertificate />
            </Suspense>

            <Suspense fallback={<p>Bull black</p>}>
                <Imtitle />
            </Suspense>

            <Suspense fallback={<p>Order Loading</p>}>
                <Order />
            </Suspense>

            {/* 
            <Suspense fallback={<p>Ayurveda Loading</p>}>
                <Ayurveda />
            </Suspense> */}


            <Suspense fallback={<p>Youtube Loading</p>}>
                <Youtube />
            </Suspense>

            <Suspense fallback={<p>Bull Rider Loading</p>}>
                <BullRiderCapsule />
            </Suspense>


            <Suspense fallback={<p>Order Loading</p>}>
                <Order />
            </Suspense>


            {/* <Suspense fallback={<p>Im Loading</p>}>
                <Im />
            </Suspense> */}


            <Suspense fallback={<p>Gif Loading</p>}>
                <GifComponent />
            </Suspense>

            <Suspense fallback={<p>Imp Loading</p>}>
                <Imp />
            </Suspense>

            <Suspense fallback={<p>Form Loading</p>}>
                <Form />
            </Suspense>

            <Suspense fallback={<p>Review Youtube Loading</p>}>
                <ReviewYoutube />
            </Suspense>

            <Suspense fallback={<p>Review Compo Youtube Loading</p>}>
                <ReviewCompo />
            </Suspense>

            <Suspense fallback={<p>Footer Loading</p>}>
                <Footer />
            </Suspense>

            <div className={`w-full block text-white sm:hidden ${sc > 50 ? "tt" : 'xx'} fixed z-[11111111]`}>
                {callDetail.callStatus ? <Suspense fallback={<p>Order Loading</p>}>
                    <BottomPopupCall />
                </Suspense>
                    :
                    <Suspense fallback={<p>Order Loading</p>}>
                        <BottomPopupForm />
                    </Suspense>
                }
            </div>


        </div>
    )
}

export default page;