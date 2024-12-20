import Extra from './Extra'

const Imp = () => {
    return (

        <section>
            <div>
                {
                    new Extra().imp([
                        { img: "/main/brb_images/r1.png", con: "15 लाख से ज्यादा सन्तुष्ट ग्राहक" },
                        { img: "/main/brb_images/r2.png", con: "प्रीपेड ओर्डर करें और भारी बचत पाए" },
                        { img: "/main/brb_images/r3.png", con: "पुरे भारत में मुफ्त डिलीवरी की जाती है" },
                    ])
                }
            </div>



            <div className='w-full'>
                <img src={"/main/brb_images/palang.jpg"} alt="no" className='w-full' />
            </div>
        </section>

    )
}

export default Imp