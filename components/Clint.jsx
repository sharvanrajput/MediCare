import Image from 'next/image';
import doctor from '@/public/img/doctor.png';
import nurse from '@/public/img/nurse.png';
import ambulance from '@/public/img/ambulance.png';

const services = [
    { icon: doctor, title: 'Qualified Doctors' },
    { icon: nurse, title: 'Emergency Care' },
    { icon: ambulance, title: '24 Hours Service' },
];

const Clint = () => {
    return (
        <section className=" md:pt-40 pt-20 pb-20 bg-white">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Left content */}
                <div>
                    <h2 className="text-4xl font-semibold text-[#003b79] mb-6">
                        Clinic With Innovation
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        We provide the most full medical services, so every person could<br />
                        have the opportunity to receive qualitative medical help.
                    </p>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
                        Learn More
                    </button>
                </div>

                {/* Right Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">

                    <div

                        className="bg-white relative lg:h-[200px] h-[280px] shadow-md rounded-xl p-6 text-center hover:shadow-xl transition"
                    >
                        <Image
                            src={doctor}
                            alt={"Qualified Doctors"}
                            width={200}
                            height={200}
                            className="mx-auto mb-2 lg:absolute top-[-50%]  left-10"
                        />
                        <h3 className="text-[#003b79] lg:absolute bottom-[20px] left-[0%] w-full font-semibold text-lg">
                            Qualified Doctors
                        </h3>
                    </div>
                    <div></div>
                    <div></div>
                    <div

                        className="bg-white relative lg:h-[200px] h-[280px] shadow-md rounded-xl p-6 text-center hover:shadow-xl transition"
                    >
                        <Image
                            src={nurse}
                            alt={"Emergency Care"}
                            width={200}
                            height={200}
                            className="mx-auto mb-2 lg:absolute top-[-50%]  left-10"
                        />
                        <h3 className="text-[#003b79] lg:absolute bottom-[20px] left-[0%] w-full font-semibold text-lg">
                            Emergency Care
                        </h3>
                    </div>

                    <div

                        className="bg-white relative lg:h-[200px] h-[280px] shadow-md rounded-xl p-6 text-center hover:shadow-xl transition"
                    >
                        <Image
                            src={ambulance}
                            alt={"24 Hours Service"}
                            width={200}
                            height={200}
                            className="mx-auto mb-2 lg:absolute top-[-50%]  left-10"
                        />
                        <h3 className="text-[#003b79] lg:absolute bottom-[20px] left-[0%] w-full font-semibold text-lg ">
                            24 Hours Service
                        </h3>
                    </div>
                    <div></div>
                </div>
            </div>
        </section>
    );
};

export default Clint;
