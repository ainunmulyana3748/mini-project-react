import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button";
import LoadingSpinner from "../components/LoadingSpinner";

const UserDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);

  const headers = {
    "x-api-key": "reqres-free-v1",
  };

  const fetchUserDetail = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://reqres.in/api/users/${id}`, {
        headers: headers,
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full text-center">
          <img
            src={user.avatar}
            alt={`${user.first_name} ${user.last_name}`}
            className="w-32 h-32 mx-auto rounded-full shadow-md mb-4 object-cover"
          />
          <h1 className="text-2xl font-bold text-gray-800 mb-1">
            {user?.first_name} {user?.last_name}
          </h1>
          <p className="text-sm text-gray-500 mb-6">{user?.email}</p>

          <Button
            onClick={() => navigate(-1)}
            className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition"
          >
            ⬅ Back
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserDetailPage;
