import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">Halaman tidak ditemukan</p>
      <Button onClick={() => navigate("/")} variant="primary">
        Kembali ke Beranda
      </Button>
    </div>
  );
};

export default NotFoundPage;
