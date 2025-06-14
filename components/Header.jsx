"use client"
import { useState } from "react";
import Button from "./Button"
import { IoMenu } from "react-icons/io5";


const Header = () => {

    const [isopen, Setopen] = useState(false);

    return (
        <header className="absolute w-full md:bg-transparent bg-white z-10">
            <div className="container">
                <div className="md:flex justify-between items-center py-6">
                    <div className="flex justify-between  items-center">

                        <div className="logo text-3xl font-bold"><span className="text-blue-600">Medi</span><span className="text-orange-600">Care+</span></div>
                        <div className="text-black md:hidden block p-3" onClick={() => Setopen(!isopen)}><IoMenu className="text-2xl" /></div>
                    </div>

                    <div className={`pages overflow-hidden  md:h-full md:mt-0 mt-5 ${isopen ? "h-full" : "h-0"} `}>
                        <ul className="md:flex items-center gap-5">
                            <li className="active mb-3">Home</li>
                            <li className="active mb-3">About</li>
                            <li className="active mb-3">Service</li>
                            <li className="active mb-3">News</li>
                            <li className="active mb-3"><Button btntext={"Contact"} islight={false} /></li>
                        </ul>

                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header