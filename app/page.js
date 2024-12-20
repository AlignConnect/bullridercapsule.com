"use client"
import './brj/brj.css';
import React, { Suspense, lazy, useEffect } from 'react';
import { useGlobalContext } from './statemanage/context';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Noto_Serif_Devanagari } from 'next/font/google';
const Section1 = lazy(() => import('./brj/components/Section1'));
const Section2 = lazy(() => import('./brj/components/Section2'));
const Section3 = lazy(() => import('./brj/components/Section3'));
const Section4 = lazy(() => import('./brj/components/Section4'));
const FlipAmazon = lazy(() => import('./brj/components/FlipAmazon'));
const Experts = lazy(() => import('./brj/components/Experts'));
const CustomerReview = lazy(() => import('./brj/components/CustomerReview'));
const Loading = lazy(() => import('./commonUse/loader/Loading'));
const Footer = lazy(() => import('./commonUse/Footer'));
const FormDetails = lazy(() => import('./component_main/FormDetails'));
const BottomPopupCall = lazy(() => import('./commonUse/bottompopup/bottomPopupCall'));
const BottomPopupForm = lazy(() => import('./commonUse/bottompopup/bottomPopupForm'));


const noto = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});



export default function Home() {

  const { GetCallSetting, FetchWebCheckout, loading, callDetail, sc } = useGlobalContext();

  useEffect(() => {

    GetCallSetting(process.env.NEXT_APP_API_KEY);
    FetchWebCheckout(process.env.NEXT_APP_API_KEY, process.env.NEXT_APP_URL)

    localStorage.setItem("PATH_KEY", "/");

  }, []);

  return (

    <section className={noto.className}>
      <div>
        {loading && <Suspense fallback={<p>wait</p>}><Loading /></Suspense>}
        <div className={`bg-white text-black w-full mb-[4rem] sm:mb-0`} id='footershow'>

          <Suspense fallback={<p>Header Loading</p>}>
            <Section1 />
          </Suspense>

          <Suspense fallback={<p>Amazon Flip Loading</p>}>
            <div className='md:w-[47rem] mx-auto w-full'>
              <FlipAmazon />
            </div>
          </Suspense>

          <Suspense fallback={<p>Like Men Loading</p>}>
            <Section2 />
          </Suspense>

          <Suspense fallback={<p>Amazon Flip Loading</p>}>
            <div className='md:w-[47rem] mx-auto w-full'>
              <FlipAmazon />
            </div>
          </Suspense>

          <Suspense fallback={<p>After Before Loading</p>}>
            <Section3 />
          </Suspense>

          <Suspense fallback={<p>Expert Video Loading</p>}>
            <Experts />
          </Suspense>

          <Suspense fallback={<p>Amazon Flip Loading</p>}>
            <div className='md:w-[47rem] mx-auto w-full'>
              <FlipAmazon />
            </div>
          </Suspense>

          <Suspense fallback={<p>Product Certification Loading</p>}>
            <Section4 />
          </Suspense>

          <Suspense fallback={<p>Amazon Flip Loading</p>}>
            <div className='md:w-[47rem] mx-auto w-full'>
              <FlipAmazon />
            </div>
          </Suspense>

          <Suspense fallback={<p>Product Certification Loading</p>}>
            <FormDetails />
          </Suspense>

          <Suspense fallback={<p>Customer Review Loading</p>}>
            <CustomerReview />
          </Suspense>

          <Suspense fallback={<p>Footer Loading</p>}>
            <Footer />
          </Suspense>

          <div className={`w-full block text-white sm:hidden ${sc > 50 ? "tt" : 'xx'} fixed z-[10000]`}>
            {callDetail.callStatus ? <Suspense fallback={<p>Footer Loading</p>}>
              <BottomPopupCall />
            </Suspense> :
              <Suspense fallback={<p>Footer Loading</p>}>
                <BottomPopupForm />
              </Suspense>
            }
          </div>
        </div>
      </div>



    </section>

  )
}
