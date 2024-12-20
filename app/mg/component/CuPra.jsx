import dynamic from 'next/dynamic';
import { Noto_Serif_Devanagari } from "next/font/google";


const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const YoutubV = dynamic(() => import('@/app/commonUse/Youtubefile/YoutubeFrame'), {
    loading: () => <p>loading</p>
});



const CuPra = () => {
    return (
        <section className={noto.className}>

            <div className='bg-[#051127] p-[2px]' >
                <div className='text-center pt-2'>
                    <div className='pb-2 text-[1.3rem] font-black specing-[2rem]' style={{ textTransform: "uppercase" }}>
                        <span style={{ color: "#df4d00" }}>Horse Fire Tablet
                        </span><br /><span style={{ color: "white" }}>
                            पर ग्राहकों की प्रतिक्रिया </span>
                    </div>
                    <div style={{ color: "white", fontSize: "1rem" }} className='px-2 pb-2 text-start'>समस्या पर अपने सटीक असर की वजह से Horse Fire Tablet ने ऑनलाइन मार्केट में धूम मचा दिया है। कमजोर पुरुष इसके मदद से जोश, स्टैमिना, टाइमिंग और कड़कपन बढ़ाकर असली मर्दानगी का अनुभव कर रहे है, ग्राहकों की प्रतिक्रिया आप खुद देख सकते है-</div>
                    <div className='pb-2 text-[1.2rem] font-black specing-[2rem]'>
                        <span className='text-[#df4d00]'>CUSTOMER'S REVIEW VIDEO</span>
                    </div>

                    <div className="w-full px-2 pb-5 review_Cus" >

                        <YoutubV vid={"7hjpQDXeD1c"} />



                    </div>
                </div>
            </div>

        </section>
    )
}

export default CuPra