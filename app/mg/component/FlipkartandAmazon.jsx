import Image from 'next/image';

function FlipkartandAmezon() {
    return (<div className="py-3 text-center bg-white w-100 px-3">
        <a href="https://flipkart.la/3TQtBOt" className="w-full d-grid leading-none">
            <h5 className="purchaseProduct leading-tight text-center pt-2 mb-0">BULL RIDER CAPSULE खरीदने के लिए निचे क्लिक करें</h5>
            <Image src="/common_images/bullriderGif.gif" width={250} height={100} alt="pic" className="mx-auto" loading='lazy' loader={<p>wait</p>} />
        </a>
    </div>

    )
}

export default FlipkartandAmezon;