"use client";
import { CustomerDataValidator } from '@/app/commonUse/FormDataValidation';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import { useGlobalContext } from '@/app/statemanage/context';
import { Suspense, lazy } from 'react';

const AmaFlipDialog = lazy(() => import('../../commonUse/AmaFlipDialog/AmaFlipDialog'));

const form = () => {

    const { CustomerData, setCustomerData, checkoutDetail, setLoading, openPopup } = useGlobalContext();
    const searchParams = useSearchParams();

    const handleChange = async (e) => {
        setCustomerData({ ...CustomerData, [e.target.name]: e.target.value });
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const getCustomData = CustomerDataValidator.JoiValidator(CustomerData);

            let check = await axios.get('https://api.ipify.org?format=json').then(response => {
                return response.data.ip
            }).catch(error => console.log(error))
            const formdata = new FormData()

            formdata.append("name", getCustomData.name)
            formdata.append("phone", getCustomData.phone)
            formdata.append("address", getCustomData.address)
            formdata.append("post", "Bullridercapsule.com/BRB")
            formdata.append("ip", check ? check : "")
            formdata.append("checkout_toogle", checkoutDetail.checkoutChecked)
            formdata.append("blog_url", process.env.NEXT_APP_URL_BRB ?? "bullridercapsule.com/brb")

            const searchParamss_krt = searchParams.get("krt");
            const searchParamss_krttracker = searchParams.get("krttracker");
            const searchParamss_hfcadu = searchParams.get("hfcadu");
            const searchParamss_hfcmybid = searchParams.get("hfcmybid");

            searchParamss_krttracker && formdata.append('conversions_tracking', searchParamss_krttracker);
            searchParamss_krt && formdata.append("conversions", searchParamss_krt);
            searchParamss_hfcadu && formdata.append("hfcadu", searchParamss_hfcadu);
            searchParamss_hfcmybid && formdata.append("hfcmybid", searchParamss_hfcmybid);

            const searchParamss_hftevadev = searchParams.get("hftevadev");
            searchParamss_hftevadev && formdata.append("hftevadev", searchParamss_hftevadev);

            try {
                setLoading(true)
                const form = await fetch(`https://bullridercapsule.com/submitdata.php`, { body: formdata, method: "POST" })
                const data = await form.json()

                if (data.ok) {
                    openPopup();
                }

            } catch (err) {
                setLoading(false)
                openPopup();
            }
        } catch (error) {
            return alert(error);
        }

    }




    return (
        <section>



            <form id="form" className='form_'>
                <div className='next_'>
                    <h4 className='text-center font-bold'><span>Bull Rider Capsule</span>&nbsp;के बारे में एक्सपर्ट्स से अधिक जानकारी के लिए फॉर्म भरें
                    </h4>

                    <div className='my-3'>
                        <h5 className='font-[600] text-black m-0 text-lg'>आपका नाम </h5>
                        <input type="text" placeholder='आपका नाम लिखिए...' className='w-full py-[5px] px-[11px] border border-black rounded-sm text-black text-sm outline-0' id='name'
                            name="name" onChange={handleChange}
                        />
                    </div>

                    <div className='my-4'>
                        <h5 className='font-[600] text-black m-0 text-lg'>आपका फ़ोन नंबर </h5>

                        <div className='relative px-1'>
                            <div className='absolute top-[2px] border-r border-current p-1 text-base'>+91</div>
                        </div>

                        <input type="text" placeholder='फ़ोन नंबर लिखिए...' className='w-full ps-[53px] border-black py-[5px] px-[11px] border rounded-sm text-black text-sm outline-0' required maxLength="10" id='phone' name="phone" onChange={handleChange} />
                    </div>

                    <div className='text-center'>
                        <button className='Sub_btn' type='button' onClick={handleFormSubmit}>SUBMIT</button>
                    </div>

                </div>
            </form>


            <Suspense fallback={<p>Loading</p>}>
                <AmaFlipDialog />
            </Suspense>

        </section>
    )
}

export default form