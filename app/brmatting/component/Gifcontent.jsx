import { Noto_Serif_Devanagari, Poppins } from 'next/font/google';

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Gifcontent = () => {
    return (
        <section className={noto.className}>

            <div className='bg-black  min-h-[400px] mb-7 pt-[50px] pb-5'>

                <div className='relative border border-dashed border-2 w-[95%] mx-auto'>

                    <div className='absolute transform  w-full translate-x-[50%] left-[-50%] -top-7'>
                        <h1 className='w-[80%] mx-auto bg-[#fff001] text-xl md:text-3xl font-bold pt-3 pb-1 px-3 text-center'>
                            संतोषजनक सेक्स के लिए चाहिए
                        </h1>
                    </div>


                    <div className='grid grid-cols-2 gap-3 px-3 pt-12 text-white text-center'>

                        <div className=''>

                            <div className=''>
                                <img src="/main/brgwhiz_images/gif1.webp" alt="asdasd" loading='eager' fetchPriority='high' className='w-full rounded-lg' />
                            </div>

                            <p className='py-2 text-lg'>लम्बा मोटा सुडौल लिंग</p>

                        </div>
                        <div>

                            <div>
                                <img src="/main/brgwhiz_images/gif4.webp" alt="asdasd" loading='eager' fetchPriority='high' className='w-full rounded-lg' />
                            </div>

                            <p className='p-2 text-lg'>नॉनस्टॉप सेक्स प्रदर्शन</p>

                        </div>

                        <div>

                            <div>
                                <img src="/main/brgwhiz_images/gif2.webp" alt="asdasd" loading='eager' fetchPriority='high' className='w-full rounded-lg' />
                            </div>

                            <p className='p-2 text-lg'>स्टैमिना और एनर्जी </p>

                        </div>

                        <div>

                            <div>
                                <img src="/main/brgwhiz_images/gif3.webp" alt="asdasd" loading='eager' fetchPriority='high' className='w-full rounded-lg' />
                            </div>

                            <p className='text-lg p-2'>हाई जोश और लीबीदो </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Gifcontent