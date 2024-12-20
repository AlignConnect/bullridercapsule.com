import dynamic from "next/dynamic";
import Image from "next/image"

const YoutubeFrame = dynamic(() => import('./YoutubeFrame'), {
    loading: () => <p>loader</p>
});

const Flip = dynamic(() => import('./FlipAmazon'), {
    loading: () => <p>loader</p>
});

function HowItsWork() {



    return (
        <div className="">

            <div className='w-full relative bg-[#272526]'>
                <div className=" py-5 text-center px-3 sm:px-5 text-white">

                    <div className="grid sm:grid-cols-2 ">
                        <img src='/main/brcexa_images/pro1.webp' alt="pic" width='100%' height='100%' loading="lazy" className="hidden sm:block" />
                        <div className="sm:text-end text-2xl sm:text-3xl">
                            <h1 className="text-[#272526] bg-yellow-500 px-2 py-1  font-bold inline-block fontPoppins">BULL RIDER CAPSULE</h1>
                            <p className="fontArya ">एक विशेष औषधि</p>

                            <img src='/main/brcexa_images/pro1.webp' alt="pic" width='100%' height='100%' loading="lazy" className=" sm:hidden mt-5" />

                            <p className="text-[1.15rem] text-justify leading-tight mt-4 indent-6"><span className="text-yellow-500">Bull Rider Capsule </span> इन जैसी 16 बेस्ट जड़ीबूटियों और भस्मों का बेस्ट संयोजन है। इसके लैब टेस्टिंग के दौरान पाया गया कि मार्केट में उपलब्ध कई प्रोडक्ट की तुलना में इसका फार्मूलेशन सबसे बेस्ट है। यह पुरुष यौन समस्या पर दूसरों की तुलना में ज्यादा सटीक असर करता है। यह नेचुरल तरीके से पुरुष प्रमुख सेक्सुअल हॉर्मोन टेस्टोस्टेरोन में बृद्धि करता है।</p>
                        </div>
                    </div>
                    <p className="text-[1.15rem] leading-tight mt-4 "><span className="text-yellow-500">Bull Rider Capsule </span> का नियमित सेवन करने पर पुरुष जोशीले बनने लगते है। पार्ट में लोहे के रॉड जैसी सख्ती मिलने लगती है जो घंटो तक बनी रहती है। टाइमिंग और स्टैमिना में जोरदार बढोत्तरी होती है जिससे कोई भी पुरुष नॉनस्टॉप प्रदर्शन कर सकता है। </p>
                </div>
            </div>
            <div className=' relative'>
                <div className=" relative z-10 py-5 text-center">
                    <p className="bg-red-600 py-1 fontArya text-2xl uppercase text-white font-bold">Bull Rider Capsule पर ग्राहकों की प्रतिक्रिया </p>
                    <div className=" px-3 sm:px-5 pb-5">
                        <p className="my-5 text-[1.1rem] sm:text-xl">समस्या पर अपने सटीक असर की वजह से Bull Rider Capsule ने ऑनलाइन मार्केट में धूम मचा दिया है। कमजोर पुरुष इसके मदद से जोश, स्टैमिना, टाइमिंग और कड़कपन बढ़ाकर असली मर्दानगी का अनुभव कर रहे है, ग्राहकों की प्रतिक्रिया आप खुद देख सकते है-</p>

                        <div className="grid sm:grid-cols-2 gap-y-5 sm:gap-5">
                            <YoutubeFrame vid="pfssa1W8HFs" />
                            <YoutubeFrame vid="4NuZgpTKozY" />
                        </div>
                    </div>

                   <Flip/>
                </div>
                <Image src='/main/brcexa_images/bg5.webp' fill loading="lazy"  alt='pic' />
            </div>
        </div>
    )
}

export default HowItsWork