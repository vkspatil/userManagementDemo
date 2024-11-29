import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
      <div className="p-6 flex items-center space-x-6">
        {/* Profile Picture */}
        <div className="w-20 h-20">
          <img
            src={`https://i.pravatar.cc/150?img=${user.id}`} // Using dynamic image URL
            alt={user.name}
            className="w-full h-full rounded-full object-cover border-4 border-teal-500"
          />
        </div>

        {/* User Information */}
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-1">{user.name}</h3>
          <p className="text-gray-600 mb-1">Email: {user.email}</p>
          <p className="text-gray-600 mb-2">Phone: {user.phone}</p>
          <p className="text-gray-600 mb-4">Company: {user.company.name}</p>
          <Link
            to={`/users/${user.id}`}
            className="inline-block text-teal-500 font-semibold hover:text-teal-700 transition duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
