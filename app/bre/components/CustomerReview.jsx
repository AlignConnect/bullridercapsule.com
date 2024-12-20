import { useMemo, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import reviewsData from '../../reviews.json'
import Image from 'next/image';
import dayjs from 'dayjs';
import dynamic from 'next/dynamic';


const FlipAmazon = dynamic(() => import('./FlipAmazon'), {
    loading: () => <p>lodf</p>
})

const YoutubeFrame = dynamic(() => import('../../commonUse/Youtubefile/YoutubeFrame'), {
    loading: () => <p>sdf</p>
})

const CustomerReview = () => {

    const [Reviews] = useState(reviewsData);
    const [numberOfitemsShown, setNumberOfItemsToShown] = useState(5);



    const showMore = () => {
        if (numberOfitemsShown + 3 <= Reviews.length) {
            setNumberOfItemsToShown(numberOfitemsShown + 3);
        } else {
            setNumberOfItemsToShown(Reviews.length);
        }
    };


    const itemsToShow = useMemo(() => {
        return Reviews
            .slice(0, numberOfitemsShown).map((e, key) => {

                let ey = 0;

                switch (key) {
                    case 0:
                        ey = 1
                        break;
                    case 1:
                        ey = 3
                        break;
                    case 2:
                        ey = 6
                        break;
                    case 3:
                        ey = 9
                        break;
                    case 4:
                        ey = 11
                        break;
                    case 5:
                        ey = 15
                        break;
                    case 6:
                        ey = 18
                        break;
                    case 7:
                        ey = 20
                        break;
                    case 8:
                        ey = 24
                        break;
                    case 9:
                        ey = 25;
                        break;
                    case 10:
                        ey = 27;
                        break;

                    default:
                        break;
                }

                return <div key={key}>
                    <div className="mx-2 my-5 p-2 rounded-md" style={{ boxShadow: "-1px 0px 5px 0px black" }} key={key}>
                        <div className='flex justify-start align-items-center gap-2 mb-2 mt-2'>

                            <div className="w-[50px] h-[50px]">
                                <img src={e.profile_photo} alt="pic" width={50} height={50} className='w-full rounded-full' loading='lazy' />
                            </div>
                            <div>
                                <h5 className='mb-0 text-center align-center text-xl font-bold '>{e.name}&nbsp;<img src="/common_images/verify.svg" width={100} height={100} loading='lazy' className='w-[18px] h-[18px] inline' alt="pic" /></h5>
                                <p className='m-0 text-start'>
                                    <span className="ms-1 text-[red] text-lg" > {dayjs().subtract(ey ? ey : key + key + 6, 'days').format("DD MMM YYYY")}</span>
                                </p>
                            </div>
                        </div>
                        <p className='text-start mt-0 text-[1.05rem]'>{e.comment}</p>
                        <div className="w-full md:w-[20rem] m-auto">
                            {

                                key === 1 &&
                                <img src="/reviews/1.jpg" alt="no" loading='lazy' className='min-h-[200px] max-w-[300px]' />
                            }

                            {
                                key === 3 &&
                                <img src="/reviews/2.jpg" alt="no" loading='lazy' className='min-h-[200px] max-w-[300px]' />
                            }

                            {
                                key === 10 &&
                                <img src="/reviews/3.jpg" alt="no" loading='lazy' className='min-h-[200px] max-w-[300px]' />
                            }

                            {
                                key === 7 &&
                                <img src="/reviews/4.jpg" alt="no" loading='lazy' className='min-h-[200px] max-w-[300px]' />
                            }
                        </div>

                    </div>

                    {key % 3 === 0 && <div className="">
                        <FlipAmazon />
                    </div>}
                </div>
            });
    }, [Reviews, numberOfitemsShown]);

    return (
        <div className='w-full'>
            <div className='w-full bg-gray-700 '>
                <div className=' md:w-[47rem] mx-auto w-full py-5'>

                    <h1 className=' pt-4 text-white text-center text-2xl md:text-[2.15rem] mb-0 leading-tight font-bold'>क्या कहते है कस्टमर<br />
                        <span className='text-[#b00000]'> BULL RIDER CAPSULE</span><br /> के बारे में
                    </h1>
                    <div className='px-3 pt-5 '>
                        <Carousel showStatus={false} infiniteLoop={true} autoPlay showThumbs={false} className='youtubeArrow'>
                            <YoutubeFrame vid={"pfssa1W8HFs"} />
                            <YoutubeFrame vid={"4NuZgpTKozY"} />
                        </Carousel>

                    </div>
                </div>

                <section className='w-full bg-white py-3 md:py-7'>
                    <div className='md:w-[47rem] mx-auto w-full  overflow-hidden'>
                        <div className="px-2 pt-4 w-full">
                            <div className='text-2xl md:text-4xl font-bold mb-4 text-center'>What Our <span className="text-[#e91b1b]">Customers Say</span></div>
                            <div className="text-center">
                                <div className=" w-full" >{itemsToShow.length ? itemsToShow : "Loading..."}
                                    {numberOfitemsShown >= reviewsData.length ? (
                                        ""
                                    ) : (
                                        <button className='text-white font-bold px-3 my-3 py-1 bg-[red] rounded-md' onClick={showMore}>Show more</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default CustomerReview; 