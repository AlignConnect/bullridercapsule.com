import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


function FlipAmazon() {
    return (
        <section className={noto.className}>
            {/* <div className="py-3 text-center bg-white w-full px-3 min-h-[120px]">
                <a href="https://flipkart.la/4cl8uLH" className="w-full grid leading-none min-h-[100px]">
                    <h5 className="purchaseProduct leading-tight text-center pt-2 mb-0">BULL RIDER CAPSULE खरीदने के लिए निचे क्लिक करें</h5>
                    <img src="/common_images/bullriderGif.gif" alt="pic" className="mx-auto w-56" loading='lazy' />
                </a>
            </div> */}

            <div className="bg-white">
                <div className="p-0 sm:w-[45%] mx-auto text-center">
                    <h5 className="purchaseProduct leading-tight text-center pt-2 mb-0">BULL RIDER CAPSULE खरीदने के लिए निचे क्लिक करें</h5>
                    <div className="grid grid-cols-2 items-center justify-center gap-1 py-1">
                        <div className="">
                            <a href="https://bit.ly/47FR8qM" className="w-full d-grid leading-none">
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cd5c76b5-eacd-44c0-97c8-e26301f37600/public" alt="pic" className="w-[160px] md:w-[300px] mx-auto " loading='lazy' />
                            </a>
                        </div>
                        <div className="">
                            <a href="https://amzn.to/3TI4sVR" className="w-full d-grid leading-none">
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f80384a2-95de-44ba-1509-c69d0d2df500/public" alt="pic" className="w-[164px] md:w-[300px] mx-auto mb-2" loading='lazy' />
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </section>

    )
}

export default FlipAmazon;