import Extra from "./Extra";

const Imtitle = () => {
    return (
        <div>
            {
                new Extra().imtitle({ image: "/main/brb_images/bb.png", title: "लड़कियों की ख्वाहिश उन्हें ऐसा मर्द मिलें जिनका", position: true })
            }
            <div className='w-full'>
                <img src='/main/brb_images/ulli.png' className='w-full' />
            </div>
        </div>

    )
}

export default Imtitle;