import Image from "next/image";
import Extra from "./Extra";

const BrbHeader = () => {
    return (
        <header className='w-full'>

            <div className='bg-black text-white w-full flex justify-between items-center'>
                {
                    new Extra().header(["Strenth", "Stamina", "Vitality"])
                }
            </div>

            <div className=''>
                <Image src={"/main/brb_images/first.png"} width={700} height={700} alt='notfoundimage' loader={<p>loader</p>} loading="lazy" />
            </div>
        </header>
    )
}

export default BrbHeader;