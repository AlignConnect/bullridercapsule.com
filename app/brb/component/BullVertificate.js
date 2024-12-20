import Extra from "./Extra";

const BullVertificate = () => {
    return (
        <div>
            <div className='w-full relative'>
                <h3 className='gre w-full'>
                    Bull Rider ही क्यों ?
                </h3>
            </div>
            <div>
                {
                    new Extra().card([
                        { image: "/main/brb_images/card1.png", content: "यह 100% सुरक्षित और आरोग्य मंत्रालय भारत सरकार से प्रमाणित है। " },
                        { image: "/main/brb_images/card4.png", content: "आप इसको COD पेमेंट सुविधा के साथ आर्डर कर सकते है।" },
                        { image: "/main/brb_images/card2.png", content: "दस दिनों की मनी बैक गारंटी सुविधा उपलब्ध है।  " },
                        { image: "/main/brb_images/card3.png", content: "समस्या ज्यादा गंभीर होने पर कस्टम प्रोडक्ट तैयार किया जाता है। " },
                        { image: "/main/brb_images/card5.png", content: "भारत का भरोसेमंद उत्पाद जिसका खुद का ऑफिसियल वेबसाइट है। " }
                    ])
                }
            </div>
        </div>
    )
}

export default BullVertificate;