"use client"
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

const Ordernow = () => {

    const router = useRouter();
    const searchParams = useSearchParams();


    const exoclick_tracking = searchParams.get('bullriderorders');
    // console.log('exoclick_tracking: ', exoclick_tracking);

    return (
        <div className='text-center'>

            {/* <Link href={{ pathname: "/checkouts/", query: { "bullriderorders": exoclick_tracking } }}
                className='cursor-pointer fontPoppins px-8 py-1 bg-black inline-block order-now text-white sm:text-xl text-[1rem] font-semibold rounded hover:bg-gray-600 my-3 '>
                ORDER NOW
            </Link> */}
            <div className="p-0 w-full mx-auto">
                <h5 className="purchaseProduct leading-tight text-center pt-2 mb-0">BULL RIDER CAPSULE खरीदने के लिए निचे क्लिक करें</h5>
                <div className="grid grid-cols-2 items-center justify-center gap-1 py-1">
                    <div className="">
                        <a href="https://bit.ly/3zt7mqH" className="w-full d-grid leading-none">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cd5c76b5-eacd-44c0-97c8-e26301f37600/public" alt="pic" className="w-[160px] md:w-[300px] mx-auto " loading='lazy' />
                        </a>
                    </div>
                    <div className="">
                        <a href="https://amzn.to/47I4CCA" className="w-full d-grid leading-none">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f80384a2-95de-44ba-1509-c69d0d2df500/public" alt="pic" className="w-[164px] md:w-[300px] mx-auto mb-2" loading='lazy' />
                        </a>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Ordernow