"use client"
import './components/home.css';
import React, { Suspense, lazy, useEffect } from 'react';
import { useGlobalContext } from '../statemanage/context';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Noto_Serif_Devanagari } from 'next/font/google';
import dynamic from 'next/dynamic';
const Header = dynamic(() => import("./components/Header"), {
    loading: () => <p>Header is Loading...</p>,
});

const Recommendation = dynamic(() => import("./components/Recommendation"), {
    loading: () => <p>Loading...</p>,
});

const Feel = dynamic(() => import("./components/Feel"), {
    loading: () => <p>Loading...</p>,
});


const Active_Life = dynamic(() => import("./components/Active_Life"), {
    loading: () => <p>Loading...</p>,
});

const Key_benifits = dynamic(() => import("./components/Key_benifits"), {
    loading: () => <p>Loading...</p>,
});

const Use_it = dynamic(() => import("./components/Use_it"), {
    loading: () => <p>Loading...</p>,
});

const Sevan_kare = dynamic(() => import("./components/Sevan_kare"), {
    loading: () => <p>Loading...</p>,
});

const Footer = dynamic(() => import("./components/new_footer/Footer"), {
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



export default function Home() {

    const { GetCallSetting, FetchWebCheckout, loading, callDetail, sc } = useGlobalContext();

    useEffect(() => {

        GetCallSetting(process.env.NEXT_APP_API_KEY_BRC);
        FetchWebCheckout(process.env.NEXT_APP_API_KEY_BRC, process.env.NEXT_APP_URL)

        localStorage.setItem("PATH_KEY", "/brc");

    }, []);

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

    )
}
