"use client"
import dynamic from "next/dynamic"
import './componet/br.css'

const Header = dynamic(() => import('./componet/Header'), {
  loading: () => <p>loader</p>
})

const Section1 = dynamic(() => import('./componet/Section1'), {
  loading: () => <p>loader</p>
})
const Section2 = dynamic(() => import('./componet/Section2'), {
  loading: () => <p>loader</p>
});

const Section3 = dynamic(() => import('./componet/Section3'), {
  loading: () => <p>loader</p>
});

const CustomerReview = dynamic(() => import('./componet/Reviews'), {
  loading: () => <p>loader</p>
});

const Footer = dynamic(() => import('@/app/commonUse/Footer'), {
  loading: () => <p>loader</p>
});

const Footerp = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
  loading: () => <p>loader</p>
})

const page = () => {
  return (
    <section>

      <Header />

      <section className="w-full md:w-[600px] mx-auto px-2">
        <Section1 />
        <Section2 />
        <Section3 />
        <CustomerReview />
        <Footer />
        <Footerp />
      </section>



    </section>
  )
}

export default page