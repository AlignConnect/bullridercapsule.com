import { Noto_Serif_Devanagari } from 'next/font/google';
import Image from 'next/image';

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
const FlipAmazon = () => {
    return (
        <section className={noto.className}>
            <div className="py-3 bg-white w-100 px-3">
                <a href="https://bit.ly/46L48JO" className="w-full d-grid leading-none">
                    <h5 className="purchaseProduct leading-tight text-center pt-2 mb-0">BULL RIDER CAPSULE खरीदने के लिए निचे क्लिक करें</h5>
                    <Image src="/common_images/bullriderGif.gif" width={500} height={50} alt="pic" className="w-[80%] mx-auto -mt-3 h-28" loading='lazy' loader={<p>wait</p>} />
                </a>
            </div>
        </section>
    )
}
export default FlipAmazon;