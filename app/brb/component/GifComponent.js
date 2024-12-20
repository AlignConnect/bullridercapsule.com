import Extra from "./Extra";

const GifComponent = () => {

    let position = false;

    return (

        <section>
            <div className="title_next">
                <div className={`relative ${position ? 'order-0' : 'order-1'} vbn`}>
                    <img src={"/main/brb_images/male.png"} alt="no" width="80px" />
                </div>
                <div>
                    <h2 className="header_li_ax dev">{"Bull rider Capsule पुरुषों में"}</h2>
                </div>
            </div>
            <div>

                {
                    new Extra().gif([
                        { i: "/main/brb_images/g1.webp", c: "कमजोरी मिटाकर, एनर्जी दिलाता हैं" },
                        { i: "/main/brb_images/g2.webp", c: "सेक्स पावर में वृद्धि करता हैं" },
                        { i: "/main/brb_images/g3.webp", c: "सेक्स की क्षमता और जोश बढ़ाता हैं" },
                        { i: "/main/brb_images/g4.webp", c: "लिंग को देर तक खड़ा रखता हैं" },
                        { i: "/main/brb_images/g5.webp", c: "चरम सुख का आनन्द दिलाता हैं" }
                    ])
                }

            </div>
        </section>

    )
}

export default GifComponent;