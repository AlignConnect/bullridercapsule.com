"use client";
import dynamic from "next/dynamic"
import { useEffect } from "react";


const Header = dynamic(() => import('./component/Header'), {
    loading: () => <p>loading</p>
});

const SectionFirst = dynamic(() => import('./component/SectionFirst'), {
    loading: () => <p>loading</p>
});

const Gifcontent = dynamic(() => import('./component/Gifcontent'), {
    loading: () => <p>loading</p>
});

const Horsecontent = dynamic(() => import('./component/Horsecontent'), {
    loading: () => <p>loading</p>
});

const Doctor = dynamic(() => import('./component/Doctor'), {
    loading: () => <p>loading</p>
});

const FormData = dynamic(() => import('./component/FormData'), {
    loading: () => <p>loading</p>
});
const CustomerReview = dynamic(() => import('./component/CustomerReview'), {
    loading: () => <p>loading</p>
});

const Footer = dynamic(() => import('@/app/commonUse/Footer'), {
    loading: () => <p>loader</p>
});

const FooterPop = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>loader</p>
});

// const Ordernow = dynamic(() => import('./component/OrderNow'), {
//     loading: () => <p>Load</p>
// })

const Flip = dynamic(() => import('./component/FlipAmazon'), {
    loading: () => <p>loader</p>
});

const page = () => {

    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/brmatting");
    }, [])

    return (
        <section className="w-full md:w-[650px] mx-auto">
            <Header />
            <SectionFirst />
            <Flip />
            <Gifcontent />
            <Horsecontent />
            <Flip />

            <Doctor />
            <FormData />
            <CustomerReview />
            <Footer />
            <FooterPop />
        </section>
    )
}

export default page