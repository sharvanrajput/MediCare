import service_iocn_1 from '@/public/img/service_iocn_1.png';
import service_iocn_2 from '@/public/img/service_iocn_2.png';
import service_iocn_3 from '@/public/img/service_iocn_3.png';
import service_iocn_4 from '@/public/img/service_iocn_4.png';
import Image from 'next/image';
import { FaAngleRight } from "react-icons/fa6";
<FaAngleRight />

const servicedata = [
  {
    icon: service_iocn_1,
    service_nam: 'Dental Care',
  },
  {
    icon: service_iocn_2,
    service_nam: 'Pulmonary',
  },
  {
    icon: service_iocn_3,
    service_nam: 'Neurological',
  },
  {
    icon: service_iocn_4,
    service_nam: 'Pediatrics', // Corrected spelling
  },
];

const Services = () => {
  return (
    <>
      <section className="py-26 ">
        <div className="container text-center mb-12">
          <h2 className="text-4xl font-semibold text-[#003b79] mb-6">Our Services</h2>
          <p className="text-gray-600 text-lg p-6">
            We provide the most full medical services, so every person could <br />
            have the opportunity to receive qualitative medical help.
          </p>
        </div>
        <div className="container grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          {servicedata.map((card, ind) => (
            <div key={ind} className={`text-center ${ind == 1 ? "bg-blue-500 lg:scale-115" : "bg-white"} p-6 rounded-xl shadow hover:shadow-lg transition`}>
              <Image src={card.icon} alt="icon" width={80} height={80} className="mx-auto mb-4" />
              <p className={`text-xl ${ind == 1 ? "text-white" : "text-black"} font-semibold text-[#002348]`}>{card.service_nam}</p>

              { ind == 1 && (
                <a href="" className=' justify-between flex text-white underline mt-5'>LEARN MORE <span><FaAngleRight /></span> </a>
              )

              }
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
