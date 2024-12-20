import dynamic from 'next/dynamic';
import { Noto_Serif_Devanagari } from 'next/font/google';
import "../bre.css";

const HeaderFirst = dynamic(() => import('./module/HeaderFirst'), {
    loading: () => <p>loader</p>
});

const HeaderSecond = dynamic(() => import('./module/HeaderSecond'), {
    loading: () => <p>loader</p>
});

const HeaderThree = dynamic(() => import('./module/HeaderThree'), {
    loading: () => <p>loader</p>
});

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

function Header() {



    return (<div className={noto.className}>

        <HeaderFirst />

        <HeaderSecond />

        <HeaderThree />
    </div>
    )
}




export default Header