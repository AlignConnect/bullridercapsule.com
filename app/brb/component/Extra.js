import Image from "next/image";
export default class Extra {

    constructor() { }

    header(arr) {
        return arr?.map((e, key) => {
            return <li key={key} className="header_li">{e}</li>
        })
    }


    card(con) {
        return <div className="main_set_grid">
            {
                con?.map((e, key) => {
                    return <div key={key} className="grid_property">
                        <div style={{ order: key % 2 !== 0 ? 1 : 0 }}>
                            <img src={e.image} alt="image" style={{ width: "61px" }} loading="lazy" />
                        </div>
                        <div>
                            <h3 className="text-[#482205] font-bold">{e.content}</h3>
                        </div>
                    </div>
                })
            }
        </div>
    }


    imtitle = ({ image, title, position }) => {
        return <div className="title_next">
            <div className={`relative ${position ? 'order-0' : 'order-1'}`}>
                <img src={image} alt="no" width="121px" loading="lazy" />
            </div>
            <div>
                <h2 className="header_li_a dev">{title}</h2>
            </div>
        </div>
    }

    gif = (arr) => {
        return <div>
            {
                arr.map((e, key) => {
                    return <div key={key}>

                        <div className="w-[90%] mx-auto my-2">
                            <Image src={e.i} alt="no" height={500} width={100} className="w-full" loading="lazy" loader={<p>Wait</p>} />
                        </div>

                        <div className="text-center font-bold text-xl">
                            {e.c}
                        </div>
                    </div>
                })
            }
        </div>
    }

    imp = (arr) => {
        return <div className="imp">
            {
                arr?.map((e, key) => {
                    return <div key={key} className="px-3">
                        <div className="impimg">
                            <img src={e.img} alt="no" width="100%" />
                        </div>
                        <p className="my-2 font-bold leading-[15px]">
                            <small>{e.con}</small>
                        </p>
                    </div>
                })
            }
        </div>
    }
}