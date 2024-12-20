
import { useGlobalContext } from "@/app/statemanage/context";
import './Ama.css';
import Image from "next/image";


const AmaFlipDialog = ({ type }) => {
    const { isPopupOpen, closePopup } = useGlobalContext();

    let closeurl = "https://bit.ly/3XHyf22";
    let checkoutUrl = "https://bit.ly/3XHAvqb"
    let amacheckoutUrl = "https://amzn.to/47GqsWX"




    if (type == "exo") {
        checkoutUrl = "https://bit.ly/4gRvNz1"
        closeurl = "https://bit.ly/4em8DPC";
        amacheckoutUrl = "https://amzn.to/4gDkzxB"

    }

    // else if (type == "evadev") {
    //     checkoutUrl = "https://flipkart.la/3VDekSu"
    //      closeurl = "https://flipkart.la/4anhT3C";
    // }

    else {
        closeurl = " https://bit.ly/3XHyf22";
        checkoutUrl = " https://bit.ly/3XHAvqb"
        amacheckoutUrl = "https://amzn.to/47GqsWX"
    }



    return (
        <div>

            {isPopupOpen && (
                <div className="overlay">
                    <div className="bg-[white] p-2 rounded-xl w-[95%] md:w-[500px] ">


                        <section className="text-end p-1" style={{ fontFamily: "sans-serif" }}>
                            <button className="text-xl" onClick={() => {
                                closePopup();
                                window.location.href = closeurl;

                            }}>
                                X
                            </button>


                            <div className='text-center'>

                                <section className="w-full py-2">
                                    <Image src="/common_images/productcerti.png" alt="no" width={500} height={500} loader={<p>wait</p>} loading="lazy" />
                                </section>

                                <section className="p-2 bg-[white] text-center font-bold border border-white rounded-[5px] mx-2 flex justify-center items-center gap-2" >
                                    <div className='w-[3rem] md:w-[5rem]'  >
                                        <Image src="/common_images/secure.png" alt="no" width={500} height={500} loader={<p>wait</p>} loading="lazy" />
                                    </div>

                                    <div className='text-md'>
                                        Buy from Trusted Website
                                    </div>


                                </section>





                                <div className='text-lg' >
                                    Flipkart से खरीदने के लिए निचे क्लिक करें
                                </div>


                                <div className="grid justify-center my-1">
                                    <div className="flex items-center gap-2">
                                        <div className="fingImg11 !w-[30%]">
                                            <Image src="/common_images/fingure.png" alt="no" height={1000} width={1000} loader={<p>wait</p>} loading="lazy" />
                                        </div>

                                        <div className="AmaFlipPop" style={{ paddingTop: '-0.5rem' }}>
                                            <a href={checkoutUrl} style={{ textDecoration: 'none' }}><img src="/common_images/flipkart.png" className='OrderNowPopAmaFlip' alt="pic" style={{ width: '75%' }} /></a>
                                        </div>


                                        <div className="fingImg !w-[30%]">
                                            <Image src="/common_images/fingure.png" alt="noimage" height={100} width={1000} loader={<p>wait</p>} loading="lazy" />
                                        </div>
                                    </div>
                                </div>

                                <div className='text-lg py-6' >
                                    Amazon से खरीदने के लिए निचे क्लिक करें
                                </div>


                                <div className="grid justify-center my-1">
                                    <div className="flex items-center gap-2">
                                        <div className="fingImg11 !w-[30%]">
                                            <Image src="/common_images/fingure.png" alt="no" height={1000} width={1000} loader={<p>wait</p>} loading="lazy" />
                                        </div>

                                        <div className="AmaFlipPop" style={{ paddingTop: '-0.5rem' }}>
                                            <a href={amacheckoutUrl} style={{ textDecoration: 'none' }}><img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f80384a2-95de-44ba-1509-c69d0d2df500/public" className='OrderNowPopAmaFlip' alt="pic" style={{ width: '75%' }} /></a>
                                        </div>


                                        <div className="fingImg !w-[30%]">
                                            <Image src="/common_images/fingure.png" alt="noimage" height={100} width={1000} loader={<p>wait</p>} loading="lazy" />
                                        </div>
                                    </div>
                                </div>



                                <div className='bg-[#ffa800] py-4 my-4 rounded-md text-center font-bold text-md'>आपकी यौन समस्या का 100% गारंटीड इलाज</div>

                            </div>

                        </section>
                    </div>
                </div>
            )}



        </div>
    )
}

export default AmaFlipDialog;