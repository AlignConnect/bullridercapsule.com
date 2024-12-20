import Image from 'next/image';
import { Noto_Serif_Devanagari, Poppins } from 'next/font/google';
import '../brk.css'

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});



const HeaderPage = () => {

    return (

        <section className={noto.className}>
            <div className='bg-white w-full'>

                <Image src="/main/brk_images/ksgback.webp"
                    alt="Pic1"
                    width={500}
                    height={500}
                    priority
                />



                <div className={`text-center py-5 ${poppins.className}`} >
                    <a className='decoration-0 uppercase bg-gray-900 text-3xl font-bold px-10 py-2 rounded-full inline-block'>Order now</a>
                </div>
                <div className='relative w-full mb-5 mt-2'>
                    <Image src="/main/brk_images/back_product_img.png"
                        alt="Pic2"
                        width={500}
                        height={500}
                        loading='lazy'
                    />

                    <div className='absolute d-flex transform translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 text-black w-full px-4 h-full md:my-5 my-7'>
                        <div className='w-8/12'>
                            <h1 className="text-[red] text-6xl font-extrabold leading-[50%] md:leading-[45%] md:text-7xl">ध्यान दें</h1>
                            <h3 className={`text-xl text-[#d69e53] font-bold md:text-2xl ${poppins.className}`}>Bull Rider Capsule</h3>
                            <h2 className="text-black mt-2 font-extrabold text-2xl md:text-3xl">की क्यों है जरूरत?</h2>
                        </div>
                        <div className='w-4/12'></div>
                    </div>
                </div>



            </div>
        </section>

    )
}

export default HeaderPage;