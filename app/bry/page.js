"use client"
import './brh.css'
import React, { lazy, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { useGlobalContext } from '../statemanage/context';
import { Noto_Serif_Devanagari } from 'next/font/google';


const Header = dynamic(() => import('./newcompo/Header'));
const Sec1 = dynamic(() => import('./newcompo/Sec1'))
const Sec2 = dynamic(() => import('./newcompo/Sec2'));
const Sec3 = dynamic(() => import('./newcompo/Sec3'))
const Sec4 = dynamic(() => import('./newcompo/Sec4'));
const Footer = dynamic(() => import('@/app/commonUse/Footer'))
const Footerpop = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'))

const OrderNow = dynamic(() => import('./newcompo/Ordernow'));
const Big = dynamic(() => import('@/app/commonUse/bigbillion/Big'))



const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const page = () => {

    const { GetCallSetting, FetchWebCheckout, loading, callDetail, sc } = useGlobalContext();

    useEffect(() => {

        GetCallSetting(process.env.NEXT_APP_API_KEY_BRY);
        FetchWebCheckout(process.env.NEXT_APP_API_KEY_BRY, process.env.NEXT_APP_URL_BRY)

        localStorage.setItem("PATH_KEY", "/bry");

    }, [])


    

    return (

        <section className={`w-full mx-auto sm:w-[580px] ${noto.className}`}>

            <Header />
            {/* <OrderNow /> */}
            <Big />
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