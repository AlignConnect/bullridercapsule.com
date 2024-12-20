"use client"
import React, { Suspense, lazy } from 'react';
import { Noto_Serif_Devanagari, Poppins } from 'next/font/google';
import { CustomerDataValidator, CustomerDataValue } from "@/app/commonUse/FormDataValidation";
import { useGlobalContext } from '@/app/statemanage/context';
import axios from 'axios';
import { useSearchParams } from "next/navigation";

const AmaFlipDialog = lazy(() => import('../../commonUse/AmaFlipDialog/AmaFlipDialog'));

const noto = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const poppins = Poppins({
  subsets: ['devanagari'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
function BrgForm() {


  const { CustomerData, setCustomerData, checkoutDetail, setLoading, isPopupOpen, openPopup, closePopup } = useGlobalContext();

  const searchParams = useSearchParams();

  const handleChange = async (e) => {
    setCustomerData({ ...CustomerData, [e.target.name]: e.target.value })
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
      formdata.append("post", "Bullridercapsule.com/BRKNOTS")
      formdata.append("ip", check ? check : "")
      formdata.append("checkout_toogle", checkoutDetail.checkoutChecked)
      formdata.append("blog_url", process.env.NEXT_APP_URL_BRKNOTS ?? "bullridercapsule.com/brknots")

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

        // const blogWebId = data.blogWebId ?? null;
        if (data.ok) {
          setLoading(false)
          openPopup();
          // let destination = decodeURI(data.destination)
          // let name = destination.split("?name=")[1].split("&")[0]
          // let phone = destination.split("&phone=")[1].split("&")[0]
          // return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=${name}&phone=${phone}`
        }
        // setLoading(false)
        // return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=&phone=`
      } catch (err) {
        setLoading(false)
        openPopup();
        // return window.location.href = checkoutDetail.checkoutUrl;
      }
    } catch (error) {
      return alert(error);
    }

  }


  return (
    <div className='bg-inherit my-5' id='form'>


      <div className='w-full max-w-7xl mx-auto'>
        <div className='py-3 px-3 '>
          <div className={`${poppins.className}  text-white text-center my-4 font-semibold md:text-xl text-md`} >
            प्रोडक्ट के बारे में अधिक जानकारी हेतु फॉर्म भरें और एक्सपर्ट से संपर्क करें!
          </div>

          <div className=''>



            <form className="space-y-3 max-w-xl mx-auto bg-white p-4 rounded-xl">

              <div className={`${poppins.className} text-center text-2xl font-semibold`}>
                Contact Us
              </div>

              <hr className="w-48 h-px mx-auto  bg-gray-300 border-0 rounded"></hr>

              {CustomerDataValue?.map((data, key) => {
                return <div key={key}>
                  <div className="relative">
                    <label htmlFor="text" className={`${noto.className} block pt-2 text-md font-medium text-gray-900 dark:text-white`} >{data.label}</label>
                    <input {...data.inputValue} id="text" className={`${poppins.className} shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light ${data.icon ? 'pl-[3.5rem]' : ''}`} placeholder="आपका नाम लिखिए..." required onChange={handleChange} value={CustomerData[data.inputValue.name]} />
                    {data.icon && <span className="absolute ransform translate-x-[-50%] translate-y-[20%] top-1/2 left-5 border-r border-black px-2">{data.icon}</span>}
                  </div>
                </div>
              })}

              <div className="'mx-auto text-center py-2">
                <button onClick={handleFormSubmit} type="button" className={`${poppins.className} w-48 md:w-1/3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-xl px-6 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
                  Submit
                </button>
              </div>
            </form>


          </div>
        </div>

      </div>


      <Suspense fallback={<p>loader</p>}>
        <AmaFlipDialog type="exo" />
      </Suspense>

    </div>

  )
}

export default BrgForm;