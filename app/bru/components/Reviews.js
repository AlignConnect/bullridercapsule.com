"use client"
import React, { useState, useMemo } from 'react';
import reviewsData from '../../reviews.json';
import dayjs from 'dayjs';

const Reviews = () => {

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
                    <div className="mx-2 p-2" style={{ boxShadow: "-1px 0px 5px 0px black", borderRadius: "7px" }} >
                        <div className='flex justify-start align-items-center gap-2 mb-2 mt-2'>
                            <img src={e.profile_photo} alt="pic" width={50} height={50} className='rounded-xl' loading='lazy' />
                            <div>
                                <h5 className='mb-0 text-center align-center '>{e.name}&nbsp;<img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a163bf90-4089-4b42-a5f4-0a896cef2200/public" className='w-[18px] h-[18px] inline' alt="pic" /></h5>
                                <p className='m-0 text-start'>
                                    <span className="ms-1 text-[red] text-lg" > {dayjs().subtract(ey ? ey : key + key + 6, 'days').format("DD MMM YYYY")}</span>
                                </p>
                            </div>
                        </div>
                        <p className='text-start mt-0 ' style={{ fontFamily: "sans-serif", fontSize: "0.9rem" }}>{e.comment}</p>
                        <div className="w-full md:w-[20rem] m-auto">
                            {

                                key === 1 &&
                                <img src="/reviews/1.jpg" alt="no" loading='lazy' className='min-h-[250px]'/>
                            }

                            {
                                key === 3 &&
                                <img src="/reviews/2.jpg" alt="no" loading='lazy' className='min-h-[250px]'/>
                            }

                            {
                                key === 10 &&
                                <img src="/reviews/3.jpg" alt="no" loading='lazy' className='min-h-[250px]'/>
                            }

                            {
                                key === 7 &&
                                <img src="/reviews/4.jpg" alt="no" loading='lazy' className='min-h-[250px]'/>
                            }
                        </div>

                    </div>

                    {/* {key % 3 === 0 && <div className=" py-2 py-md-4">
                        <div className="mergepic">
                            <a href="https://bit.ly/46L48JO" className="" style={{ textDecoration: 'none' }}><img src="/checkout_images/flipcart.gif" alt="asd" className="w-full" /></a>
                        </div>
                    </div>} */}
                </div>
            });
    }, [Reviews, numberOfitemsShown]);



    return (
        <section className='w-full bg-black'>
            <div className='w-full md:w-1/3 mx-auto rounded-xl overflow-hidden'>
                <div className="bg-[#ebebeb]">
                    <div className="w-100 commonWidth">
                        <div className="px-2 pt-4">
                            <div className='text-2xl font-bold mb-4 text-center ' >What Our <span className="text-[#e91b1b]">Customers Say</span></div>
                            <div className="text-center">
                                <div className="subHomeL2 w-full" >{itemsToShow.length ? itemsToShow : "Loading..."}
                                    {numberOfitemsShown >= reviewsData.length ? (
                                        ""
                                    ) : (
                                        <button className='text-white font-bold px-3 my-3 py-1 bg-[red] rounded-md' onClick={showMore}>Show more</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews;