import React from "react";
import { Link } from "react-router-dom";

const CardUser = ({ user }) => {
  const { id, avatar, email, first_name, last_name } = user;

  return (
    <Link
      to={`users/${id}`}
      className="max-w-sm w-full bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <img
        src={avatar}
        alt={`${first_name} ${last_name}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
          {first_name} {last_name}
        </h2>
        <p className="text-sm text-gray-500 mt-1">{email}</p>
      </div>
    </Link>
  );
};

export default CardUser;
