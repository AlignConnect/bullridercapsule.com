import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


function GetBiggerPenis() {
    return (

        <section className={noto.className}>
            <div className='biggerpenis_background min-h-[300px]'>
                <div className='w-full max-w-7xl mx-auto py-5 md:py-10'>
                    <div className='grid grid-cols-2 items-center justify-center mih-h-[300px]'>
                        <video className='py-2 w-[65%] md:w-[60%] mx-auto min-h-[200px]' autoPlay muted loop src={"/main/bre_images/bigger_penis.mp4"} width={400} height={500} alt='bigger_penis' />
                        <img className='px-2 min-h-[150px]' src={"/main/bre_images/penis_text.png"} alt='penis_text' loading='lazy' />
                    </div>
                </div>
                <div className='w-full max-w-7xl mx-auto py-2'>
                    <div className='font-semibold italic text-center text-xl md:text-4xl '>
                        "मजबूत लिंग, लम्बी सेक्स टाइमिंग मर्दानगी की पहचान है और सेक्स कमजोरी शर्मिंदगी की वजह"
                    </div>
                </div>
            </div>
        </section>

    )
}

export default GetBiggerPenis;