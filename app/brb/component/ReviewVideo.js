import { Suspense, lazy } from "react";
const LazyYoutube = lazy(() => import('../../commonUse/Youtubefile/YoutubeFrame'));

const ReviewVideo = () => {

    return (
        <div className='my-2'>
            <h3 className='text-2xl text-center py-2 font-black' style={{ fontFamily: "sans-serif" }}> <span className='text-[red]'>Customer </span>Speaks</h3>

            <Suspense fallback={<p>Loading</p>}>
                <LazyYoutube vid={"53sQmTwVi04"} />
            </Suspense>

        </div>

    )
}
export default ReviewVideo;