import React, { useEffect, useState } from 'react'
import { Poppins } from 'next/font/google'
import $ from 'jquery'

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

function Percentage_bull_rider() {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const sectionElement = document.getElementById('processbaract'); // Replace with the actual ID of your section
            if (sectionElement) {
                const rect = sectionElement.getBoundingClientRect();
                // You can adjust the threshold as needed
                const threshold = 200; // Change this value as needed
                if (rect.top <= threshold && rect.bottom >= threshold) {
                    setIsActive(true);
                }
                else {
                }
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isActive]);

    useEffect(() => {
        if (isActive) {
            progress_bar();
        }
    }, [isActive])

    function progress_bar() {
        var speed = 30;
        var items = $('.progress_bar').find('.progress_bar_item');

        items.each(function () {
            var item = $(this).find('.progress');
            var itemValue = item.data('progress');
            var i = 0;
            var value = $(this);

            var count = setInterval(function () {
                if (i <= itemValue) {
                    var iStr = i.toString();
                    item.css({
                        'width': iStr + '%'
                    });
                    value.find('.item_value').html(iStr + '%');
                }
                else {
                    clearInterval(count);
                }
                i++;
            }, speed);
        });
    }

    const Percentage_and_title = (arr) => {
        return arr?.map((e, key) => {
            return <div className='ce_ixelgen_progress_bar min-h-[70px]' key={key}>
                <div className="w-full max-w-7xl mx-auto progress_bar px-2">
                    <div className="progress_bar_item">
                        <div className={`${poppins.className} item_label text-sm md:text-xl mt-2 text-justify`}>
                            {e.title}
                        </div>
                        <div className='flex items-center gap-1'>
                            <div className="item_bar ">
                                <div className="progress " data-progress={e.percentage}>
                                </div>
                            </div>
                            <div className={`${poppins.className} item_value`}>
                                0%
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        })
    }

    return (<div>
        <div className='bg-[#0198e1] '>
            <div className='w-full max-w-7xl mx-auto'>
                <div className={`${poppins.className} text-2xl md:text-4xl text-center text-white font-semibold py-3 md:py-5`}>
                    2000 पुरुषों ने Bull Rider के शानदार प्रभाव को सराहा-
                </div>
            </div>
        </div>

        <div className='py-4' id='processbaract'>
            {
                Percentage_and_title([
                    {
                        title: "97% लोगों ने माना की उनकी सेक्स अवधि बढ़ गयी है।", percentage: "97"
                    },
                    {
                        title: "94% पुरुषों ने माना कि उनका इरेक्शन शून्य से उच्चतम स्तर पर पहुंचाया।", percentage: "94"
                    },
                    {
                        title: "99% पुरुषों की सेक्सुअल डिजायर यानि सेक्स इच्छा बढ़ गयी।", percentage: "99"
                    },
                    {
                        title: "सभी पुरुषों ने एक स्वर में कहा कि सेक्स प्रदर्शन में बहुत बदलाव आया है।", percentage: "100"
                    },
                    {
                        title: "सब ने माना की स्टैमिना, एनर्जी बढ़ाने में यह शानदार मदद करता है।", percentage: "100"
                    }
                ])

            }
        </div>

    </div>
    )
}

export default Percentage_bull_rider;