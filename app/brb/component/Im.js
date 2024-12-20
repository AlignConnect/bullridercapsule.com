const Im = () => {

    let position = false

    return (
        <div className="title_next">
            <div className={`relative ${position ? 'order-0' : 'order-1'} vbn`}>
                <img src={"/main/brb_images/male.png"} alt="no" width="80px" />
            </div>
            <div>
                <h2 className="header_li_ax dev">{"Bull rider Capsule पुरुषों में"}</h2>
            </div>
        </div>
    )
}

export default Im