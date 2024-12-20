import { Poppins } from 'next/font/google';
import Image from 'next/image';


const poppins = Poppins({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


function TryBullRider() {
    return (<div>
        <div className='bg-black'>
            <div className='w-full max-w-7xl mx-auto font-semibold py-3 md:leading-9 leading-7'>
                <div className={`${poppins.className} text-[1.1rem] md:text-[1.5rem] text-[#edd78b] text-center`}>
                    WHY YOU SHOULD TRY<br /><span className={`${poppins.className} text-[2.3rem] md:text-[3rem]`} >BULL RIDER</span>
                </div>
            </div>
        </div>

        <div className='w-full max-w-7xl mx-auto '>
            <div className='grid grid-cols-2 grid-rows-1 gap-2 py-2 min-h-[320px]'>
                <Image className='mx-auto' src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/62d6dc37-eb8e-4c62-9734-3340c4d29e00/public"} width={350} height={500} alt='whatsapp_customer_1' loading='lazy'  />
                <Image className='mx-auto' src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/87a1aaf2-a376-4f77-8c5f-91f698817900/public"} width={350} height={500} alt='whatsapp_customer_2' loading='lazy'  />
            </div>
        </div>
    </div>
    )
}

export default TryBullRider;