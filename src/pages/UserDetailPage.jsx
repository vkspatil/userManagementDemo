import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const UserDetailPage = () => {
  const { id } = useParams();
  const user = useSelector((state) =>
    state.users.data.find((user) => user.id.toString() === id)
  );

  if (!user)
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <p className="text-lg text-red-500 font-semibold">User not found.</p>
        <Link
          to="/"
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition"
        >
          Back to User List
        </Link>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center p-6 sm:p-8 bg-gradient-to-t from-blue-50 to-white">
          {/* Profile Picture */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 mr-6 mb-4 sm:mb-0">
            <img
              src={`https://i.pravatar.cc/150?img=${user.id}`} 
              alt={user.name}
              className="w-full h-full rounded-full object-cover border-4 border-teal-500"
            />
          </div>

          {/* User Info */}
          <div className="text-center sm:text-left">
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">{user.name}</h2>
            <p className="text-lg text-gray-600">{user.email}</p>
            <p className="text-lg text-gray-600">{user.phone}</p>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <span className="text-lg font-medium text-gray-700">Website:</span>
              <a
                href={`https://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 hover:underline transition"
              >
                {user.website}
              </a>
            </div>

            <div className="flex items-center justify-between border-b pb-3">
              <span className="text-lg font-medium text-gray-700">Company:</span>
              <span className="text-gray-700">{user.company.name}</span>
            </div>

            <div>
              <span className="text-lg font-medium text-gray-700 block">Address:</span>
              <p className="text-gray-600 mt-2 text-sm">
                {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
              </p>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="bg-gray-100 p-4 text-center">
          <Link
            to="/"
            className="px-6 py-3 bg-blue-500 text-white rounded shadow hover:bg-blue-600 hover:shadow-lg transition duration-300"
          >
            Back to User List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;
