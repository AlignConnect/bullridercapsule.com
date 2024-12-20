import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const HeaderThree = () => {

    const Benefits = (arr) => {
        return arr?.map((e, key) => {
            return <div key={key} className='min-h-[100px]'>
                <img src={e.benefit_icon} width={"100%"} alt='customer_speaking_image' className='mx-auto md:w-1/3 w-3/4 min-h-[50px]' loading='lazy' />
                <div className={`${poppins.className} py-2 md:text-xl text-sm font-semibold text-center text-white`}>{e.benefit_title}</div>
            </div >
        })
    }

    return (
        <div className='secondHeadBackground'>
            <div className='w-full max-w-7xl mx-auto py-4'>
                <div className='grid grid-cols-4 gap-2'>
                    {
                        Benefits([
                            {
                                benefit_icon: "/main/bre_images/timing_icon.png",
                                benefit_title: "सुडौल लिंग"
                            },
                            {
                                benefit_icon: "/main/bre_images/body_icon.png",
                                benefit_title: "लम्बी अवधि"
                            },
                            {
                                benefit_icon: "/main/bre_images/porn_style_icon.png",
                                benefit_title: "सुपर मर्दानगी"
                            },
                            {
                                benefit_icon: "/main/bre_images/ling_icon.png",
                                benefit_title: "ज्यादा सेक्स"
                            }
                        ])
                    }
                </div>
            </div>
        </div>
    )
}

export default HeaderThree;