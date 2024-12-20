import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
function Vishesh_suvidha() {
    return (
        <section className={noto.className}>
            <div className='bg-gray-200'>
                <div className='w-full max-w-7xl mx-auto'>
                    <div className='grid grid-cols-2 items-center justify-center py-2'>
                        <div>
                            <div className='relative'>
                                <img className='text-center w-[90%] md:w-[60%] mih-h-[200px]' src={"/main/bre_images/Vishesh_suvidha_back.png"} alt='Vishesh_suvidha_back' loading='lazy' />
                                <div className=' absolute bottom-0 top-2 left-8 md:bottom-0 md:top-9 md:left-20 font-semibold  text-[1.2rem] md:text-4xl '>
                                    विशेष सुविधा-
                                </div>
                            </div>
                            <div className='text-justify text-[1.1rem] md:text-3xl md:pt-10 pt-5'>
                                पुरुषों की समस्या के हिसाब से उनकी उम्र, हाइट और वजन का आंकलन करके <span className='text-red-500 font-semibold'>Bull Rider Capsule</span> कस्टमाइज्ड भी तैयार किया जाता है जिससे यह समस्या पर सटीक असर करता है।
                            </div>
                        </div>

                        <div className=''>
                            <img className='text-center w-[100%] md:w-[50%] mx-auto min-h-[180px]' src={"/main/bre_images/vishesh_suvidha.png"} alt='vishesh_suvidha'
                                loading='lazy'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Vishesh_suvidha;