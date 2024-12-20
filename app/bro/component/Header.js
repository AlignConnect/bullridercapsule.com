"use client"
import Image from "next/image"

export default () => {
    return (

        <section>
            <div className="invisible md:visible">
                <Image src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7b1cadea-6339-46d2-190f-20b5c5d62b00/public"} fill alt="something error" />
            </div>
            <div className="visible md:invisible">
                <Image src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ac074e74-63ab-4d5e-04bc-548e906e1500/public"} fill alt="something error" />
            </div>
        </section>

    )
}

