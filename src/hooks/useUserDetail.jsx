import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

export const useUserDetail = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { id } = useParams();

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

  return {
    fetchUserDetail,
    loading,
    user,
    error,
  };
};
