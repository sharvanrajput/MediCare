import Teamimg from '@/public/img/team.png';
import Team_bg from '@/public/img/team_bg.png';
import Image from 'next/image';

const servicedata = [
    {
        "icon" : Teamimg ,
        doctor_name: 'Dr. Awaatif Al',
        specific:"Dental Care"
    },
    {
        "icon" : Teamimg ,
        doctor_name: 'Dr. Filipa Gaspar',
        specific:"Cardiology"
    },
    {
        "icon" : Teamimg ,
        doctor_name: 'Dr. Sukhmeet Gorae',
        specific:"Neurological"
    },
    {
        "icon" : Teamimg ,
        doctor_name: 'Dr. Siri Jakobsson', // Corrected spelling
        specific:"Prediatrics"
    },
];
const Team = () => {
    return (
        <>
            <section className="py-26 bg-cover bg-center " style={{ backgroundImage: `url(${Team_bg.src})` }}>
                <div className="container text-center mb-12">
                    <h2 className="text-4xl font-semibold text-[#003b79] mb-6">We Have The Best Specialist</h2>
                    <p className="text-gray-600 text-lg p-6">
                       We have a wide experience in experience design and strategy, <br /> with locally-rooted knowledge.
                    </p>
                </div>
                <div className="container grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
                    {servicedata.map((card, ind) => (
                        <div key={ind} className={`text-center bg-white  rounded-2xl shadow hover:shadow-lg transition`}>
                            <Image src={card["icon"]} alt="icon" width={350} height={350} className="mx-auto mb-4" />
                        <div className="py-4">

                            <h4 className={`text-xl  font-semibold text-black`}>{card.doctor_name}</h4>
                            <p className={`text-xl text-gray-400 font-semibold `}>{card.specific}</p>
                        </div>

                          
                        </div>
                    ))}
                </div>
            </section>

        </>
    )
}

export default Team