import { Poppins } from 'next/font/google';
import './brgwhiz.css'

const poppin = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
function OrderNow() {
    return (
        <div className="w-full bg-white py-5 mx-auto mb-2">
            <div className="text-center">
                <div className="  inline-block text-left pop_imagehfv" >
                    <a className={`${poppin.className} bg-[#213361] text-xl  font-bold  py-3 px-11 w-full rounded-full hover:bg-[#1e2f5a] shadow-lg shadow-[#213361]/50 transition-colors text-white`} href='#form'>
                        ORDER NOW
                    </a>
                </div>
            </div>
        </div>
    )
}

export default OrderNow;