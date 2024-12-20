import dynamic from 'next/dynamic'
import React from 'react'


const FlipA = dynamic(() => import('./FlipAmazon'), {
    loading: () => <p>loader</p>
})

const Section1 = () => {

    function im(mi) {
        return <div className='w-full'>
            <img src={mi} alt="no" className='w-full' style={{ borderRadius: "11px" }} />
        </div>
    }


    function orderlist(arr) {
        return <div className='order-list d-dev'>
            {
                arr.map((e, key) => {
                    return <div className='d_flex' key={key}>
                        <div className='num'> {key + 1} </div>
                        <div className='arr_'>{e}</div>
                    </div>
                })
            }
        </div>
    }


    return (
        <div className='posi px-2'>
            {/* <div className='d-san'> updated on {dayjs().format("MMM D, YYYY")} </div> */}

            <h1 className='xr-power d-dev leading-[35px] md:leading-[45px] md:my-[15px]'>सेक्स पावर बढ़ाने की दवा चाहते है तो पहले ये जान लें!</h1>

            <h6 className='d-san mb-0'>Written By:</h6>

            <div className='dr-a'>

                <div>
                    <img src='/main/br_images/dr.png' alt="asdasd" width="90px" loading='lazy' />
                </div>

                <div className='d-san' style={{ lineHeight: "21px" }}>
                    <h3 className='mb-0 font-bold text-2xl'>Dr.Arun Kumar</h3>
                    <p> 12 years of experience</p>
                    <p>MD - Alternate Medicine, BAMS</p>
                    <p>  Ayurveda, Sexologist</p>
                </div>

            </div>
            {
                im('/main/br_images/mi.jpg')
            }


            <p className='d-dev' style={{ padding: "11px 0 3px" }}>अगर आप लिंग में ढीलापन, जल्दी डिस्चार्ज होने या कमजोर स्टैमिना जैसी सेक्स कमजोरी से परेशान है और एक भरोसेमंद और असरदार औषधि की खोज कर रहे है तो कुछ जरूरी बाते जान लें फिर निर्णय करें !</p>
            {/* <div className="py-2" >
                <div className="mergepic">
                    <a href="https://flipkart.la/3Ng2ZTk" className="" style={{ textDecoration: 'none' }}><img src="https://staticcontent.fitnessmantra.co.in/checkout/flipcart.gif" alt="sddf" className="w-full mx-auto" /></a>
                </div>
            </div> */}
            <FlipA />



            <div className='y-block'>

                <h2 className='d-dev flex items-center text-3xl font-bold p-2 gap-3'>
                    <img src='/main/br_images/star.png' alt="no" width="41px" />
                    <div className='pt-3'>इन बातों का रखें ध्यान</div>
                </h2>

                {
                    orderlist(
                        [
                            'सबसे पहले प्रोडक्ट की क्वालिटी के बारे में जानने की कोशिश करें।',
                            'विक्रेता भरोसेमंद होना चाहिए, जैसे पर्टिकुलर प्रोडक्ट का ब्रांड क्या है',
                            'उस ब्रांड की ऑफिसियल वेबसाइट होनी चाहिए',
                            'ये दवा अफ्रीकन है, अमेरिकन है जैसी खोखले दावों से बचे।',
                            'आयुर्वेद भारत की खोज है और सबसे बेहतरीन हर्ब भारत में पाए जाते है।',
                            'बिना ब्रांड लोगो वाले साधारण प्रोडक्ट्स ट्रस्टेड नहीं होते है'
                        ]
                    )
                }


            </div>


        </div>)
}

export default Section1