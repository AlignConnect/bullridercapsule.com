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

const AmaFlipDialog = dynamic(() => import('@/app/commonUse/AmaFlipDialog/AmaFlipDialog'), {
    loading: () => <p>loading</p>
});

const Load = dynamic(() => import("@/app/commonUse/loader/FormLoader"), {
    loading: () => <p>df</p>
})
const Section3 = () => {

    const handleChange = async (e) => {
        setCustomerData({ ...CustomerData, [e.target.name]: e.target.value })
    }

    const { CustomerData, setCustomerData, loading, checkoutDetail, setLoading, remainingSeconds, openPopup, minutes } = useGlobalContext();






    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const getCustomData = CustomerDataValidator.JoiValidator(CustomerData);

            let check = await axios.get('https://api.ipify.org?format=json').then(response => {
                return response.data.ip
            }).catch(error => console.log(error));
            const formdata = new FormData();

            formdata.append("name", getCustomData.name);
            formdata.append("phone", getCustomData.phone);
            formdata.append("address", getCustomData.address);
            formdata.append("post", "Bullridercapsule.com/MGB");
            formdata.append("product_name", "BullRiderCap-W4")
            formdata.append("ip", check ? check : "");
            formdata.append("checkout_toogle", checkoutDetail.checkoutChecked);
            formdata.append("blog_url", process.env.NEXT_APP_URL_BR ?? "Bullridercapsule.com/BR");

            // let tracker = searchParams.get("krt-tracker");
            // const searchParamss_krt = searchParams.get("krt");
            // const searchParamss_krttracker = searchParams.get("krttracker");

            // searchParamss_krttracker && formdata.append('conversions_tracking', searchParamss_krttracker);
            // searchParamss_krt && formdata.append("conversions", searchParamss_krt);

            try {
                const form = await fetch(`https://bullridercapsule.com/submitdata.php`, { body: formdata, method: "POST" })
                const data = await form.json();

                // const blogWebId = data.blogWebId ?? null;
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




            <div className={`max-w-2xl border  rounded-xl py-4 mx-auto  mt-4 p-3 text-white `}>
                <div>

                    <h3 className="text-[#db6100] font-bold text-center text-[26px] leading-[30px] italic my-[7px]" >&#10077; तो हो जाये तैयार प्रीमियम फार्मूलेशन के साथ, प्रीमियम सेक्स प्रदर्शन के लिए ! &#10078;</h3>
                    <h3 className="text-center w-[95%] m-auto text-black text-2xl font-bold" >निचे दिया फॉर्म भरें, हेल्थ एक्सपर्ट्स आपसे संपर्क करेंगे तथा प्रोडक्ट के बारे में पूरी जानकारी देंगे  </h3>
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
                                className={`bg-[#ff7200] text-xl font-bold pt-4 pb-2 
                 hover:bg-red-600 transition-colors text-white w-full flex justify-center items-center`}
                                onClick={handleFormSubmit}
                            >
                                ORDER NOW
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <AmaFlipDialog />


        </div>
    );
};

export default Section3;
