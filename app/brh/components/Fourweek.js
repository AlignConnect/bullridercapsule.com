import Image from 'next/image';


function Fourweek() {
    return (<div className='bg-white py-4'>
        <div className='w-full max-w-7xl mx-auto min-h-[500px]'>
            <Image className='hidden md:block mx-auto' src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/752074e2-e16c-407c-9ca1-03d8901d9e00/public"} width={700} height={500} alt='fourweek_desktop' loading='lazy' />
            <Image className='block md:hidden' src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3f6bdae5-97e9-4753-4f47-db514e94cb00/public"} width={400} height={500} alt='fourweek_mobile' loading='lazy' />
        </div>
    </div>
    )
}

export default Fourweek