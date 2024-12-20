"use client";
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react'
import './components/Home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>Header Loading</p>
});

const SexProblemHeader = dynamic(() => import('./components/SexProblemHeader'), {
    loading: () => <p>loader</p>
});

const Section1 = dynamic(() => import('./components/Section1'), {
    loading: () => <p>loader</p>
});

const Hearbs = dynamic(() => import('./components/Hearbs'), {
    loading: () => <p>loader</p>
});

const HowItsWork = dynamic(() => import('./components/HowItsWork'), {
    loading: () => <p>loader</p>
});


const WhyChoose = dynamic(() => import('./components/WhyChoose'), {
    loading: () => <p>loader</p>
});

const Sevan_kese_kare = dynamic(() => import('./components/Sevan_kese_kare'), {
    loading: () => <p>loader</p>
});




const Tab_Exp = dynamic(() => import('./components/Tab_Exp'), {
    loading: () => <p>loader</p>
});



const Review = dynamic(() => import('./components/CustomerReview'), {
    loading: () => <p>loader</p>
});


const Footer = dynamic(() => import('@/app/commonUse/Footer'), {
    loading: () => <p>loader</p>
});

const FooterP = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>loader</p>
});


function page() {


    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/brcexa")

    }, [])

    return (

        <div className='bg-zinc-500'>

        <div className='max-w-2xl mx-auto bg-white fontNoto'>

            <Header />

            <SexProblemHeader />

            <Section1 />

            <Hearbs />

            <HowItsWork />

            <WhyChoose />

            <Sevan_kese_kare />


            <Tab_Exp />

            <div className='w-full  mx-auto'>
                <Review />
            </div>

            <Footer />

            <FooterP />


            </div>

        </div >
    )
}

export default page