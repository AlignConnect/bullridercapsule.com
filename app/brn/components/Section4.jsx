import Image from 'next/image';

const Section4 = () => {
    return (
        <div>
            <div className="w-full z-10 relative bg-center bg-no-repeat bg-cover py-5 md:py-10 ">

                <div className='absolute z-[-1] w-full h-full top-0 left-0'>
                    <Image
                        src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/91713f3d-08fb-4261-c018-297c51056200/public"}
                        fill
                        style={{
                            height: "100%",
                            width: "100%"
                        }}
                        loader={<p>wait</p>}
                        loading='lazy'
                        alt='pic'
                    />
                </div>


                <div className=" md:w-[47rem] mx-auto w-full px-2 text-center">
                    <h3 className=" text-black text-xl md:text-3xl">अगर आप भी फौलादी लिंग चाहते है और लम्बी सेक्स टाइमिंग से बीवी को खुश करना चाहते हैं, तो </h3>
                    <h1 className=" font-bold text-[#d54b00] text-3xl md:text-5xl mt-3 md:mt-5" >BULL RIDER CAPSULE का सेवन जल्द से जल्द शुरू करें!</h1>



                    <div className="w-[5rem] mx-auto ">
                        <Image src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/dc098e36-95f4-43bf-ae84-897930e47500/public" alt="pic" width={500} height={500} loader={<p>Wait</p>} loading='lazy' />
                    </div>

                    <div className="w-100  my-5">
                        <Image src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/076df543-2943-4aac-7b43-e53f3fd3e900/public" alt="pic" width={500} height={500} loader={<p>Wait</p>} loading='lazy' />
                    </div>
                    <div className="grid grid-cols-3 gap-1 text-red-600 text-center font-bold">
                        <div className="uppercase text-[0.8rem] md:text-[1rem] bg-white pt-5 pb-3 rounded-xl border-dashed border border-black">10 Days<br /> Money Back<br /> Guarantee</div>
                        <div className="text-[0.8rem] md:text-[1rem] bg-white pt-5 pb-3 rounded-xl border-dashed border border-black">
                            PREPAID <br /> HUGE SAVINGS<br /> ON ORDER
                        </div>
                        <div className="text-[0.8rem] md:text-[1rem] px-1  bg-white pt-5 pb-3 rounded-xl border-dashed border border-black">FREE<br /> DELIVERY ALL<br /> OVER INDIA</div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Section4;