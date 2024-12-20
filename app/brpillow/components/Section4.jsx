import Image from "next/image";

const Section4 = () => {
    return (
        <section className=' w-full'>
            <div className="relative fontPoppins text-white">
                <div className="relative z-10 max-w-6xl mx-auto px-3 py-5">
                    <h1 className="text-xl md:text-4xl text-center font-semibold !leading-normal">
                        अगर आपको ये सब चाहिए तो आजमाए <span style={{ color: "yellow" }}>"Bullrider Capsule"</span> और अपने सेक्स प्रदर्शन में पाए अद्भुत वृद्धि।
                    </h1>
                </div>
                <Image src='/main/hkart_images/agar.jpg' fill className="w-full absolute top-0" />
            </div>
            <div className="w-full bg-black">
                <div className="max-w-6xl mx-auto">
                    <img src="/main/hkart_images/harde.webp" alt="pic" className="w-full h-full  md:block hidden" loading="lazy" />
                    <img src="/main/hkart_images/harderMob.webp" alt="pic" className="w-full h-full block md:hidden" loading="lazy" />
                </div>
            </div>
        </section>
    )
}
export default Section4;