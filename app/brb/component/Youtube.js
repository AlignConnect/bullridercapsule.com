
import { Suspense, lazy } from 'react';
const LazyYoutube = lazy(() => import('../../commonUse/Youtubefile/YoutubeFrame'));
const Youtube = () => {

    return (

        <section>

            <div className='w-full'>
                <img src={"/main/brb_images/title_im.png"} alt="no" className='w-full' />
            </div>

            <p className='p-2 dev'>
                वाकई में पुरुषों की खस्ताहाल यौन समस्या का समाधान केमिकल युक्त दवाओं में बिल्कुल भी नहीं हैं. पर आयुर्वेदिक औषधि 'Bull Rider Capsule' में पुरुषों की यौन समस्या का सम्पूर्ण समाधान मौजूद हैं. इसके सेवन से,
            </p>

            <div className='my-2'>
                <h3 className='font-bold text-xl text-center py-2'> <span className='text-[red]'>Doctor </span>Recommendation</h3>

                <Suspense fallback={<p>Loading</p>}>
                    <LazyYoutube vid={"rpt_5bkicpY"} />
                </Suspense>

            </div>

        </section>
    )
}

export default Youtube;