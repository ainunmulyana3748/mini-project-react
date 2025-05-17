import React, { useState } from "react";
import { ArrowLeft, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SuccessModal from "./SuccessModal";

const CardUserDetail = ({ user, button }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const rating = 4.5;
  const languages = ["English", "Bahasa Indonesia", "French"];

  return (
    <>
      <div className="w-full max-w-xl mx-auto bg-white rounded-3xl shadow-lg p-6 sm:p-8 mt-6 transition-all duration-300 hover:shadow-blue-100">
        {/* Back Button */}
        <ArrowLeft
          size={28}
          className="cursor-pointer mb-4 text-gray-600 hover:text-blue-600 transition"
          onClick={() => navigate(-1)}
        />

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {/* Avatar */}
          <img
            src={user.avatar}
            alt={user.first_name}
            className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-blue-500 shadow-md object-cover"
          />

          {/* User Info */}
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              {user.first_name} {user.last_name}
            </h2>
            <p className="text-gray-500 text-sm mt-1">{user.email}</p>

            {/* Rating */}
            <div className="flex items-center justify-center sm:justify-start gap-1 mt-3">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={
                    i < Math.floor(rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-yellow-300"
                  }
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">{rating}/5.0</span>
            </div>

            {/* Info Detail */}
            <div className="mt-5 text-sm text-gray-700 space-y-2">
              <p>
                <span className="font-semibold">Role:</span> Tour Guide
              </p>
              <p>
                <span className="font-semibold">Status:</span> Active
              </p>
              <p>
                <span className="font-semibold">Tour Guide Since:</span> 2024
              </p>
              <p>
                <span className="font-semibold">Languages:</span>{" "}
                <span className="inline-flex flex-wrap gap-2 mt-1">
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full"
                    >
                      {lang}
                    </span>
                  ))}
                </span>
              </p>
            </div>

            <div className="mt-6">{button}</div>
          </div>
        </div>
      </div>

      {showModal && (
        <SuccessModal
          type="booking"
          title="Booking Confirmed!"
          message="Your guide has been successfully booked."
        />
      )}
    </>
  );
};

export default CardUserDetail;
