import { CiDeliveryTruck, CiDiscount1 } from "react-icons/ci"
import { GiTakeMyMoney } from "react-icons/gi"
import { TbMoneybag } from "react-icons/tb"

const Section7 = () => {
    return (
        <div className="w-full">
            <div className="w-full bg-black">
                <div className=" max-w-5xl px-1 mx-auto  py-6 md:py-10 text-white">
                    <div>
                        <div className="text-center"><h1 className="font-bold  text-3xl text-center md:text-5xl border-b inline-block border-gray-500 fontPoppins pb-3 md:pb-5">विशेष सुविधा</h1></div>
                        <p className="mt-5 md:my-8 text-xl md:text-3xl text-center px-2 md:px-0"> कंपनी पुरुष स्वास्थ्य को प्राथमिकता देती है। समस्या जड़ से मिटाने के लिए एक्सपर्ट्स रोगी से जानकारी लेते है और उनके उम्र, लम्बाई और वजन का आंकलन कर के स्पेशल दवा तैयार करते है जो 100% गारन्टी के साथ असर करता है।</p>
                    </div>



                    <div className={`border border-[#ea8622] grid grid-cols-2 gap-y-3 text-black bg-white md:gap-y-0 md:grid-cols-3 justify-center py-3 px-2 rounded-lg mt-4 fontPoppins`}>
                        <div className="flex gap-2 items-center justify-center">
                            <CiDeliveryTruck className='text-5xl' />
                            <div className="">
                                <h6 className="font-bold text-[0.8rem] md:text-[1rem]">FREE SHIPPING</h6>
                                <p className="text-[0.7rem] md:text-[0.8rem]">Shipping on all prepaid orders</p>
                            </div>
                        </div>

                        <div className="flex gap-2 items-center justify-center">
                            <GiTakeMyMoney className='text-5xl' />
                            <div className="">
                                <h6 className="font-bold text-[0.8rem] md:text-[1rem]">COD Available</h6>
                                <p className="text-[0.7rem] md:text-[0.8rem]">Pay after recieving your pack</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center justify-center">
                            <TbMoneybag className='text-5xl' />
                            <div className="">
                                <h6 className="font-bold text-[0.8rem] md:text-[1rem]">Money Back Guarantee</h6>
                                <p className="text-[0.7rem] md:text-[0.8rem]">10 days money back guarantee</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center md:hidden justify-center">
                            <CiDiscount1 className='text-5xl' />
                            <div className="">
                                <h6 className="font-bold text-[0.8rem] md:text-[1rem]">Prepaid Offer</h6>
                                <p className="text-[0.7rem] md:text-[0.8rem]">Save extra 10% on prepaid orders</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="w-full bg-white fontPoppins px-3 py-5 ">
                <h1 className="italic text-red-600 text-[1.05rem] md:text-3xl font-bold text-center max-w-5xl mx-auto !leading-normal">
                    "बुलराइडर के इस्तेमाल से उन पुरुषों में शामिल हो जाये जो बेहतर सेक्स लाइफ जीते है और अपनी महिला पार्टनर को संतुष्ट रखते है"
                </h1>
            </div>

        </div>
    )
}
export default Section7