import dayjs from 'dayjs'
import { Poppins } from 'next/font/google';


const poppins = Poppins({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const HeaderFirst = () => {
    return (
        <div className='bg-[#e5ba0c]'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className={`${poppins.className} py-2 flex`}>
                    <div className='font-extrabold text-sm md:text-xl px-1'><span className='text-red-700 font-extrabold'>!</span>ATTENTION:</div>
                    <marquee className='text-sm md:text-xl' direction="left">Due to the huge popularity of our product, our stocks are running out. At <span className="text-red-700 font-extrabold">{dayjs().format('DD-MM-YYYY')}, 18 packages remained!</span></marquee >
                </div>
            </div>
        </div>
    )
}

export default HeaderFirst;