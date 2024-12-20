"use client";
import React, { useEffect, useMemo, useState } from 'react';
import { useGlobalContext } from "@/app/statemanage/context";
import dynamic from "next/dynamic";


const BottomPopupCall = dynamic(() => import('./bottomPopupCall'), {
    loading: () => <p>loading</p>
});

const BottomPopupForm = dynamic(() => import('./bottomPopupForm'), {
    loading: () => <p>loading</p>
})

const BottomHandler = () => {

    const { GetCallSetting, FetchWebCheckout, callDetail, sc } = useGlobalContext();


    const [Ap, setAp] = useState({ api: "", key: "" });


    function checkcall() {

        let checkcolumn = localStorage.getItem('PATH_KEY');

        switch (checkcolumn) {

            case "/brk":
                return setAp({
                    api: process.env.NEXT_APP_URL_BRK,
                    key: process.env.NEXT_APP_API_KEY_BRK
                });

            case "/bre":
                return setAp({
                    api: process.env.NEXT_APP_URL_BRE,
                    key: process.env.NEXT_APP_API_KEY_BRE
                });


            case "/mg":
                return setAp({
                    api: process.env.NEXT_APP_URL_MG,
                    key: process.env.NEXT_APP_API_KEY_MG
                });


            case "/mgb":
                return setAp({
                    api: process.env.NEXT_APP_URL_MGB,
                    key: process.env.NEXT_APP_API_KEY_MGB
                });

            case "/brgwhiz":
                return setAp({
                    api: process.env.NEXT_APP_URL_BRGWHIZ,
                    key: process.env.NEXT_APP_API_KEY_BRGWHIZ
                });

            case "/brcexa":
                return setAp({
                    api: process.env.NEXT_APP_URL_BRCEXA,
                    key: process.env.NEXT_APP_API_KEY_BRCEXA
                });

            case "/brcflip":
                return setAp({
                    api: process.env.NEXT_APP_URL_BRCFLIP,
                    key: process.env.NEXT_APP_API_KEY_BRCFLIP
                });

            case "/bhf":
                return setAp({
                    api: process.env.NEXT_APP_URL_BHF,
                    key: process.env.NEXT_APP_API_KEY_BHF
                });

            case "/brknots":
                return setAp({
                    api: process.env.NEXT_APP_URL_BRKNOTS,
                    key: process.env.NEXT_APP_API_KEY_BRKNOTS,
                })

            case "/brrising":
                return setAp({
                    api: process.env.NEXT_APP_URL_BRRISING,
                    key: process.env.NEXT_APP_API_KEY_BRRISING,
                })

            case "/brpillow":
                return setAp({
                    api: process.env.NEXT_APP_URL_BRPILLOW,
                    key: process.env.NEXT_APP_API_KEY_BRPILLOW,
                })

            case "/brmatting":
                return setAp({
                    api: process.env.NEXT_APP_URL_BRMATTING,
                    key: process.env.NEXT_APP_API_KEY_BRMATTING,
                })

            case "/fbr":
                return setAp({
                    api: process.env.NEXT_APP_URL_FBR,
                    key: process.env.NEXT_APP_API_KEY_FBR
                });


            default:
                return setAp({
                    api: process.env.NEXT_APP_URL,
                    key: process.env.NEXT_APP_API_KEY
                });
        }

    }

    useEffect(() => {
        checkcall();
    }, []);



    useMemo(() => {

        if (Ap.api && Ap.key) {
            GetCallSetting(Ap.key);
            FetchWebCheckout(Ap.key, Ap.api);
        }

    }, [Ap]);


    return (

        <div className={`w-full block sm:hidden ${sc > 50 ? "tt" : 'xx'} fixed z-[10000] text-white`}>



            {callDetail.callStatus ? <BottomPopupCall /> :
                <BottomPopupForm />}
        </div>

    )
}

export default BottomHandler;