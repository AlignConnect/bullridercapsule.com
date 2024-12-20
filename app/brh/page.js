"use client"
import './brh.css'
import React, { lazy, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { useGlobalContext } from '../statemanage/context';


const Header = dynamic(() => import('./newcompo/Header'));
const Sec1 = dynamic(() => import('./newcompo/Sec1'))
const Sec2 = dynamic(() => import('./newcompo/Sec2'));
const Sec3 = dynamic(() => import('./newcompo/Sec3'))
const Sec4 = dynamic(() => import('./newcompo/Sec4'));
const Footer = dynamic(() => import('@/app/commonUse/Footer'))
const Footerpop = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'))

const OrderNow = dynamic(() => import('./newcompo/Ordernow'));

const Bigts = dynamic(() => import('@/app/commonUse/bigbillion/Bigts'));

const page = () => {

    const { GetCallSetting, FetchWebCheckout, loading, callDetail, sc } = useGlobalContext();

    useEffect(() => {

        GetCallSetting(process.env.NEXT_APP_API_KEY_BRH);
        FetchWebCheckout(process.env.NEXT_APP_API_KEY_BRH, process.env.NEXT_APP_URL_BRH)

        localStorage.setItem("PATH_KEY", "/brh");

    }, [])


    return (

        <section className='w-full mx-auto sm:w-[580px]'>

            <Header />
            {/* <OrderNow /> */}
            <Bigts />
            <Sec1 />
            <OrderNow />
            <Sec2 />
            <OrderNow />
            <Sec3 />
            <OrderNow />
            <Sec4 />
            <Footer />
            <Footerpop />

        </section>

    )
}

export default page;