import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ArrowLeft } from "lucide-react";
import LoadingSpinner from "../components/LoadingSpinner";
import Breadcrumb from "../components/Breadcrumb";

const UserDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const headers = {
    "x-api-key": "reqres-free-v1",
  };

  const fetchUserDetail = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://reqres.in/api/users/${id}`, {
        headers,
      });
      setUser(response.data.data);
    } catch (err) {
      setError("Gagal mengambil data user.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserDetail();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "User Detail", href: null },
          ]}
        />

        {user && (
          <div className="bg-white rounded-3xl shadow-xl p-8 mt-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <img
                src={user.avatar}
                alt={user.first_name}
                className="w-36 h-36 rounded-full border-4 border-blue-500 shadow-md object-cover"
              />
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-3xl font-bold text-gray-800">
                  {user.first_name} {user.last_name}
                </h2>
                <p className="text-gray-500 text-sm mt-1">{user.email}</p>

                <div className="mt-6">
                  <p className="text-gray-700">
                    <span className="font-semibold">Role:</span> User
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Status:</span> Active
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Member Since:</span> 2024
                  </p>
                </div>

                <button
                  onClick={() => navigate(-1)}
                  className="mt-8 inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full shadow hover:bg-blue-700 transition cursor-pointer"
                >
                  <ArrowLeft size={16} className="mr-2" />
                  Back to Users
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetailPage;
