import React from 'react';
import Image from 'next/image';
import { useGlobalContext } from '@/app/statemanage/context';
import '@/app/commonUse/bottompopup/bottomPopup.css';
import { Oswald } from 'next/font/google'

const oswald = Oswald({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-oswald',
    weight: ['200', '300', '400', '500', '600', '700']
});

const bottomPopupCall = () => {
    const { callDetail } = useGlobalContext();

    return (
        <div className='w-full'>
            <div className={`text-black ${oswald.className}`} >
                <a href={`tel:+91${callDetail.phoneNumber}`} className="relative" id='hfkCall' >
                    <Image src="/common_images/call-gif.webp" width={1000} height={1000} alt="pic" loader={<p>Wait</p>} loading='lazy' />
                    <div className="absolute !transform !translate-x-[-50%] !translate-y-[-50%] !top-[35%] !left-[33%] text-[10vw] md:text-[2.6rem] font-bold">{callDetail.phoneNumber}</div>
                    <Image src="/common_images/callicon.webp" width={15} height={10} alt="pic" className='callicon faa-ring animated' loader={<p>Wait</p>} loading='lazy' />
                </a>
            </div>
        </div>
    )
}
export default bottomPopupCall;