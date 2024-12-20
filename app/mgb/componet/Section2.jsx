import dynamic from 'next/dynamic'
import React from 'react'

const FlipA = dynamic(() => import('./FlipAmazon'), {
    loading: () => <p>loader</p>
})


const Section2 = () => {

    function higher(title, content, im) {
        return <div className='high'>
            <div>
                <div className='d-dev flex items-center high-title text-2xl font-bold gap-2'>  <img src='/main/br_images/star.png' alt="no" style={{ verticalAlign: "middle" }} />  <div className='pt-3'>{title}</div> </div>
            </div>
            {im && <div> <img src={im} className='w--100' alt='no' /> </div>}
            <div dangerouslySetInnerHTML={{ __html: content }} className='d-dev' style={{ margin: "7px 0" }}></div>
        </div>
    }


    return (
        <section>

            <div>

                {

                    higher("विश्वास किस पर करें !", '<p>आपका ये सवाल उचित है की कौन सी कंपनी विश्वास के योग्य है? ध्यान दें आज के डिजिटल मार्केटिंग के दौर में जो ब्रांड लोगो को अपनी वास्तविकता बताएं, जो ऑफिशियली वेरिफाइड हो और जिनकी अपनी ऑफिसियल वेबसाइट हो आप उनपर ट्रस्ट कर सकते है। </p>')

                }

                <p className='d-dev'>क्या ट्रस्ट करने के लिए इतना काफी है? जी नहीं इसके अलावा आप प्रोडक्ट के बारे में गूगल पर इंक्वायरी कर सकते है। इस प्रोडक्ट के सेवन से लोगो की समस्या पर क्या असर हुआ, लोग इसके बारे में क्या कहते है। आप ऑफिसियल वेबसाइट पर कस्टमर के रिव्यू से निश्चिंत हो सकते है।</p>


                <FlipA />

                {
                    higher("बुल राइडर है भरोसेमंद", "<p>मुझे एक प्रोडक्ट के बारे में पता चला जो एक ट्रस्टेड, आयुष सर्टिफाइड और बहुत असरदार है। इस प्रोडक्ट का नाम है Bull Rider Capsule जो 100% हिमालयन जड़ीबूटियों से बना आयुर्वेदिक उत्पाद है।</p>", '/main/br_images/bullim.jpg')
                }

                <p className='d-dev sec-para'> &#10077; Bull Rider Capsule बनाने वाली कम्पनी किसी भी प्रकार के खोखले दावे नहीं करती बल्कि यह कस्टमर सटिस्फैक्शन पर काम करती है। ये झूठे दावे नहीं करते की इनका प्रोडक्ट अफ्रीकन जड़ीबूटियों से बना है, इनके प्रोडक्ट पूर्ण रूप से भारतीय है।  &#10078;</p>
                <div className=" py-2" >

                    <FlipA />


                </div>
                {
                    higher("असरदार है बुल राइडर", "<p>मैंने Bull Rider Capsule का काफी रिसर्च किया है। यह यौन समस्या पर अच्छा असर करता है। इसमें वे सभी तत्व शामिल है जो पुरुष यौन कमजोरी मिटाने के लिए आवश्यक है। इनमे मौजूद हर्ब्स में स्पेर्मोटोजेनिक, अफ्रोडीसीएक और टेस्टो बूस्टर गुण पाए जाते है जो यौन उत्तेजना, लिंग की मजबूती और टाइम ड्यूरेशन बढ़ाने के लिए जाने जाते है।</p>")
                }

                {
                    higher("निर्णय आप करें", "<p>एक आयुर्वेदिक चिकित्सक के तौर पर मैंने आप लोगो के लिए एक अच्छे क्वालिटी का प्रोडक्ट सुझाया है। इसे लेने का निर्णय आपको करना है। अगर आप इसे लेना चाहते है तो मैंने निचे उनके प्रोडक्ट का लिंक एड कर दिया हूँ। निचे Order Now बटन पर क्लिक करने के बाद आपको प्रोडक्ट के बारे में विस्तृत जानकारी मिलेगी, तथा उनके एक्सपर्ट से डायरेक्ट संपर्क कर सकते है।</p>")
                }

                {/* <div className='w--100'>
<img src={bullproduct} alt="no" className='w--100' />
</div> */}


                <div className='text--center'>

                </div>


            </div>

        </section>)
}

export default Section2