import Image from 'next/image';
import '../brh.css';

function Header() {
    return (
        <div className='w-full min-h-[570px]'>
            <Image className='hidden md:block' src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8b3da967-799f-4ac6-b76c-cd3c8d7f1700/public"} width={2000} height={500} alt='desktop_header' loading='eager' fetchPriority='high' />
            <Image className='block md:hidden' src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ea9b735a-0014-443a-b94c-48a392986200/public"} width={500} height={500} alt='mobile_header' loading='eager' fetchPriority='high' />
        </div>
    )
}

export default Header;