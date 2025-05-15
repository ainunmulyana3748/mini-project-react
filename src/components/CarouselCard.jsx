// components/CarouselCard.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "./Button";

const CarouselCard = ({ users }) => {
  return (
    <div className="w-full py-12">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
      >
        {users.map((user) => (
          <SwiperSlide key={user.id}>
            <div className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 text-center">
              <div className="bg-white p-4 relative z-10">
                <img
                  src={user.avatar}
                  alt={`${user.first_name} ${user.last_name}`}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-800">
                  {user.first_name} {user.last_name}
                </h2>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              <div className="absolute inset-0 bg-blue-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-20 flex items-center justify-center">
                <Button variant="primary">Order Now</Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselCard;
