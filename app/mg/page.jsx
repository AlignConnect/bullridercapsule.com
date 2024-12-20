"use client";
import dynamic from 'next/dynamic'
import { useEffect } from 'react';


const Header = dynamic(() => import('./component/Header'), {
    loading: () => <>loader</>
})

const Sec1 = dynamic(() => import('./component/Sec1'), {
    loading: () => <>loader</>
})

const Sec2 = dynamic(() => import('./component/Sec2'), {
    loading: () => <>loader</>
})

const Youtube = dynamic(() => import('./component/Youtube'), {
    loading: () => <>loader</>
})


const CuPra = dynamic(() => import('./component/CuPra'), {
    loading: () => <>loader</>
})

const Benefits = dynamic(() => import('./component/Benefits'), {
    loading: () => <>loader</>
})

const Form = dynamic(() => import('./component/Form'), {
    loading: () => <>loader</>
})

// const Customer = dynamic(() => import('./component/FlipkartandAmazon'), {
//     loading: () => <p>loader</p>
// })

const Customer = dynamic(() => import('./component/FlipkartandAmazon'), {
    loading: () => <p>loader</p>
})

const Footer = dynamic(() => import('@/app/commonUse/Footer'), {
    loading: () => <p>loader</p>
})

const FooterPopup = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>loader</p>
})

const page = () => {

    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/mg");
    }, [])

    const x = [2,3,4,5]

    x.filter((x,v)=>{

        

    })


    return (

        <section className='w-full md:w-[500px] mx-auto'>
            <Header />
            <Sec1 />
            <Sec2 />
            <Youtube />
            {/* <CuPra /> */}
            <Benefits />
            <Form />
            <Customer />
            <Footer />
            <FooterPopup />
        </section>

    )
}

export default page