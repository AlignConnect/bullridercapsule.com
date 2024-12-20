import Image from 'next/image'
import React from 'react'

const orderNow = () => {
    return (
        <div className="py-3 bg-inherit w-100 px-3 text-center">
            <a href=" https://flipkart.la/4853Bnr" className="w-full d-grid leading-none">
                <div className="purchaseProduct !text-center pt-2 mx-auto">BULL RIDER CAPSULE खरीदने के लिए निचे क्लिक करें</div>
                <img src="/common_images/bullriderGif.gif" alt="pic" className="sm:w-30 w-56 mx-auto" loader={<p>Wait</p>} loading='lazy' />
            </a>
        </div>
    )
}

export default orderNow