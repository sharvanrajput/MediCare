import React from "react";
import cta_shape from '@/public/img/cta_shape.png';
import Image from "next/image";

const NewsletterCTA = () => {
    return (
        <section className="py-20   relative" >
            <Image src={cta_shape} className="absolute z-0 right-0 top-20" height={300} width={300} />
            <div className="container z-10 relative">
                <div className=" mx-auto  md:px-20 md:py-20 px-3 bg-blue-600 text-center py-15  rounded-lg shadow-md">
                    <h2 className="text-4xl font-bold text-white mb-8">Subscribe to Newsletter</h2>

                    <p className="text-white mb-8">
                        We have a wide experience in experience design and strategy,
                    </p>

                    <div className="  bg-white p-3 rounded-xl ">
                        <form action="" className=" flex gap-5 md:flex-row flex-col w-full">

                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="px-4 py-2 md:w-[75%]   border-0 rounded-md focus:outline-none border-white "
                            />

                            <button className="px-6 py-2 md:w-[25%] bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
                                Send Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>


    );
};

export default NewsletterCTA;