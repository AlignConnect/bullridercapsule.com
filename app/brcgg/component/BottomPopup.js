import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const BottomPopup = () => {


    const [sc, setSc] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setSc(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sc]);



    return (


        <div className={`w-full block sm:hidden ${sc > 50 ? "tt" : 'xx'} fixed z-[10000] text-white`}>
            <div className="fontPoppins bg-white  bottom_pop">
                <div className="px-2 py-3 ">

                    {/* <div className="">

            <select className="border border-[#b59c49] text-sm font-medium text-gray-700 py-1.5 px-2 bg-white focus:outline-none rounded-lg" onChange={handleChangeSingleVarient} value={selectProducts?.id || ''}>
                {allVariants.map((variant) => {
                    
                    return <option className="!bg-gray-200  text-black " key={variant.id} value={variant.id}>
                        {variant.title}
                    </option>
                })}
            </select>
        </div> */}


                    <div className="text-center">
                        <button id="" className=" fontPoppinsgl bg-green-800 text-white font-semibold py-1.5 px-12 rounded-md md:text-md text-md shoporder uppercase order-now">
                            <Link href="#buynow">
                                Order Now
                            </Link>
                        </button>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default BottomPopup
