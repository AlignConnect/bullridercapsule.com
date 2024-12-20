"use client"
import dynamic from 'next/dynamic';
import { Noto_Serif_Devanagari } from 'next/font/google';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
const Header = dynamic(() => import('./component/Header'));
const Section1 = dynamic(() => import('./component/Section1'));
const Section2 = dynamic(() => import('./component/Section2'));
const Section3 = dynamic(() => import('./component/Section3'));

const Reasontotrust = dynamic(() => import('./component/SelectProduct'));

const BullriderOrderNow = dynamic(() => import('./component/Ordernow'));

const Foo = dynamic(() => import('./component/BottomPopup'))

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const page = () => {

    const productInfo = useSelector((state) => state.productInfo);

    const products = productInfo?.productsdata;

    useEffect(() => {

        localStorage.setItem("PATH", "bullridercapsule.com/brcgg")

    }, [])





    return (
        <div className={`${noto.className} mx-auto`}>


            <Header />
            <Section1 />

            <Section2 />
            {/* <BullriderOrderNow /> */}

            <Reasontotrust />

            <Section3 />

            <div className='text-center'>
                <div className='text-lg font-semibold fontPoppinsgl'>
                    We are Available on
                </div>


                <div className="flex justify-center items-center gap-7 py-3">
                    <a href="https://bit.ly/4fvUuiL">
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1369a0a5-d191-4392-bf47-5c170ecb8600/public" alt="" className='sm:w-40 w-32 mx-auto' />
                    </a>
                    <a href="https://amzn.to/3AuBqm8">
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3edacd08-1afb-49b1-9aba-2cdda7681400/public" alt="" className='sm:w-40 w-32 mx-auto ' />
                    </a>
                </div>

            </div>

            <div className="text-center mt-3 sm:pb-5 pb-16 bg-zinc-100">
                <img
                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/beba635f-ed41-4131-6f07-3aa09a652500/public"
                    alt="Logo"
                    className="w-28 mx-auto"
                    width="100%"
                    height="100%"
                    loading="lazy"
                />
                <p className="text-md mt-2 font-semibold fontPoppins">
                    {products?.vendor} Private Limited
                </p>
                <p className="text-sm mt-1 fontPoppins">
                    FF 14, Ujala Avenue, Sarkhej Road, Vishala, Ahmedabad Gujarat
                    (INDIA) - 380055
                </p>
            </div>




            <Foo />

        </div>
    )
}

export default page
