"use client";
import dynamic from "next/dynamic";
import { CustomerDataValue } from "@/app/commonUse/FormDataValidation";
import { useGlobalContext } from "@/app/statemanage/context";
import { CustomerDataValidator } from '@/app/commonUse/FormDataValidation';
import axios from 'axios';
import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Load = dynamic(() => import("@/app/commonUse/loader/Loading"), {
    loading: () => <p>df</p>
})

const AmaFlipDialog = dynamic(() => import('@/app/commonUse/AmaFlipDialog/AmaFlipDialog'), {
    loading: () => <p>loading</p>
});

const Form = () => {

    const handleChange = async (e) => {
        setCustomerData({ ...CustomerData, [e.target.name]: e.target.value })
    }

    const { CustomerData, setCustomerData, loading, checkoutDetail, setLoading, remainingSeconds, openPopup, minutes } = useGlobalContext();





    const handleFormSubmit = async (e) => {

        e.preventDefault();

        try {
            const getCustomData = CustomerDataValidator.JoiValidator(CustomerData);

            let check = await axios.get('https://api.ipify.org?format=json').then(response => {
                return response.data.ip
            }).catch(error => console.log(error))

            const formdata = new FormData();
            formdata.append("name", getCustomData.name);
            formdata.append("phone", getCustomData.phone);
            formdata.append("address", getCustomData.address);
            formdata.append("post", "bullridercapsule.com/MG");
            formdata.append("ip", check ? check : "");
            formdata.append("product_name", "BullRiderCap-W3")
            formdata.append("checkout_toogle", checkoutDetail.checkoutChecked);
            formdata.append("blog_url", process.env.NEXT_APP_URL_MG ?? "bullridercapsule.com/MG");



            try {
                const form = await fetch(`https://bullridercapsule.com/submitdata.php`, { body: formdata, method: "POST" })
                const data = await form.json();

                const blogWebId = data.blogWebId ?? null;
                if (data.ok) {
                    setLoading(false);
                    // openPopup();
                    let destination = decodeURI(data.destination)
                    let name = destination.split("?name=")[1].split("&")[0]
                    let phone = destination.split("&phone=")[1].split("&")[0]
                    // return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=${name}&phone=${phone}`
                    return window.location.href = `/thankyou`
                }
                setLoading(false);
                // return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=&phone=`
                return window.location.href = `/thankyou`
            } catch (err) {
                setLoading(false);
                // openPopup();
                return window.location.href = checkoutDetail.checkoutUrl;
            }
        } catch (error) {
            setLoading(false);
            return alert(error);
        }

    }

    return (
        <div className={noto.className} id="form">

            {
                loading && <Load />
            }

            <AmaFlipDialog />


            <h4 className='text-center font-bold text-[#f00000] text-xl pt-3'>
                10 Days Money Back Guarantee
            </h4>
            <h4 className='text-center font-bold text-lg'>
                प्रीपेड आर्डर करें और भारी बचत पाए !
            </h4>
            <h4 className='text-center font-bold text-lg'>
                Free Delivery All Over India
            </h4>
            <h4 className='text-center font-bold text-lg'>
                ऑफर ख़त्म  होने से पहले  ऑर्डर करे
            </h4>


            <center className="my-4 text-white">
                <h2 className='inline pt-2 px-[50px] text-xl' style={{ borderRadius: "25px", background: "red" }}>
                    00:{minutes}:{remainingSeconds}
                </h2>
            </center>

            <div className={`max-w-2xl border bg-slate-100 rounded-xl py-4 mx-auto  mt-4 p-3 text-white `}>
                <div>

                    <h4 className='text-center mb-0 text-black text-2xl font-bold py-4'>
                        एक्सपर्ट्स से सलाह लेने के लिए निचे दिया गया फॉर्म भरें !
                    </h4>

                    <form className="space-y-3" >

                        {CustomerDataValue?.map((data, key) => {
                            return <div className="flex flex-col" key={key}>
                                <label className="font-semibold text-xl py-1 text-black">{data.label}</label>
                                <div className="relative">
                                    <input {...data.inputValue} className={`p-1 text-black py-5 border w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${data.icon ? 'pl-[3.5rem]' : ''}`} onChange={handleChange} value={CustomerData[data.inputValue.name]} />
                                    {data.icon && <span className="absolute text-black ransform translate-x-[-50%] translate-y-[-50%] top-1/2 left-5 border-r border-black px-2">{data.icon}</span>}
                                </div>
                            </div>
                        })}

                        <div className="flex justify-center items-center pt-5">
                            <button
                                type="submit"
                                className={`bg-red-700 text-xl font-bold pt-4 pb-2 w-full rounded-lg hover:bg-red-600 transition-colors text-white flex justify-center items-center`}
                                onClick={handleFormSubmit}
                            >
                                ORDER NOW
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;
