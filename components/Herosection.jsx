import heroimg from "@/public/img/heroimg.png"
import bgImg from "@/public/img/hero_bg.png"
import Image from "next/image"
import Button from "./Button"
const Herosection = () => {
    return (
        <>
            <section className=" bg-cover relative w-full top-0 z-0  pt-40 bg-center"  style={{ backgroundImage: `url(${bgImg.src})` }} >
                <div className="container">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                        <div className="self-center">
                            <h4 className="lg:text-xl text-lg mb-5 font-semibold text-[#002348]">Welcome to MediCare+ Clinic</h4>
                            <h1 className="lg:text-6xl text-4xl mb-5 font-semibold text-[#003b79]">Best Specialists</h1>
                            <p className="lg:text-xl text-lg mb-5 text-[#002348] lg:leading-10 leading- text-pretty">We are on the leading edge of cancer care. Providing the full continuum of cancer treatments and supportive care services in a single convenient location.</p>
                            <div className="flex gap-4">

                                <Button btntext={"Make an Appointment"} className="me-3" islight={false} /><Button btntext={"Departments"} islight={true} />
                            </div>
                        </div>
                        <div className="">
                            <Image src={heroimg} alt="heroimg" width={500} height={500} className="mx-auto  " />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Herosection