import Link from "next/link";


import { FaFacebookF } from "react-icons/fa";

import { FaGoogle } from "react-icons/fa";

import { TbBrandTwitterFilled } from "react-icons/tb";


const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <footer>
            <div className="container">
                <div className="md:flex justify-between items-center py-6">
                    <div className="logo text-3xl font-bold"><span className="text-blue-600">Medi</span><span className="text-orange-600">Care+</span></div>
                    <div className="pages">
                        <ul className="flex items-center gap-5">
                            <li className="active">Home</li>
                            <li>About</li>
                            <li>Service</li>
                            <li>News</li>
                           
                        </ul>

                    </div>
                </div>

            </div>

            <div className="container bg-blue-100 pt-5 pb-10">
                <div className="flex gap-5 ">
                    <Link href="/"><FaFacebookF className="h-10 w-10 p-3 rounded-full  text-gray-600 bg-white " /></Link>
                    <Link href="/"><FaGoogle className="h-10 w-10 p-3 rounded-full  text-gray-600 bg-white " /></Link>
                    <Link href="/"><TbBrandTwitterFilled className="h-10 w-10 p-3 rounded-full  text-gray-600 bg-white " /></Link>
                </div>
                <div className="mt-3">@ {year}</div>
            </div>
        </footer>
    )
}

export default Footer