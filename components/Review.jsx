'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { FaUserAlt } from "react-icons/fa";

import axios from 'axios';

import review_corner from "@/public/img/review_corner.png";

const Review = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchReview();
    }, []);

    const fetchReview = async () => {
        try {
            const res = await axios.get("https://admin.tomedes.com/api/v1/get-reviews?page=1");
            console.log(res.data.data); // View API structure
            setReviews(res.data.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching reviews:", error);
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <section className="py-20 text-center text-xl text-gray-600">
                Loading reviews...
            </section>
        );
    }

    return (
        <section className="pt-20 pb-0">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-semibold text-[#003b79] mb-6">We Have The Best Specialist</h2>

                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        1200: {
                            slidesPerView: 2,
                        },
                    }}
                    loop={true}
                    modules={[Autoplay]}
                    autoplay={{
                        delay:1500, 
                        disableOnInteraction: false, // keeps autoplay after interaction
                    }}
                    
                    className="!h-full"
                >
                    {reviews.map((review, idx) => (
                        <SwiperSlide key={idx} className="!h-[100%]">
                            <div className="flex flex-col justify-between bg-white p-8 rounded-xl shadow-md relative min-h-[20rem] md:min-h-[22rem]  overflow-visible mt-6 me-5">
                                {/* Quotation icon */}
                                <div className="absolute -top-5 -right-5 bg-blue-600 w-12 h-12 rounded-full  flex items-center justify-center">
                                    <Image
                                        src={review_corner}
                                        alt="quote icon"
                                        width={24}
                                        height={24}
                                    />
                                </div>

                                <p className="text-gray-700 mb-6 leading-relaxed flex-grow">{review.Reviews}...</p>

                                <div className="flex items-center gap-4">
                                    <FaUserAlt className='text-black bg-gray-400 p-4 h-15 w-15 rounded-full' />
                                    <div>
                                        <p className="font-semibold text-[#002348]">{review.Name}</p>
                                        <p className="text-sm text-gray-500">Patient</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
};

export default Review;
