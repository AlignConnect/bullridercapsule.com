import Image from 'next/image';

const FlipAmazon = () => {
    return (


        <div className='px-3'>


            {/* <div className="py-3 bg-inherit w-100 px-3">
                <a href="https://bit.ly/46L48JO" className="w-full d-grid leading-none">
                    <h5 className="purchaseProduct text-center pt-2">BULL RIDER CAPSULE खरीदने के लिए निचे क्लिक करें</h5>
                    <Image src="/common_images/bullriderGif.gif" width={500} height={500} alt="pic" className="w-[80%] mx-auto -mt-3" loader={<p>Wait</p>} loading='lazy' />
                </a>
            </div> */}

            <div className="p-0  w-100">
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
export default FlipAmazon;