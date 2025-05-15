import React, { useEffect } from "react";
import { useUsers } from "../hooks/useUsers";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Destination from "../components/Destination";
import CarouselCard from "../components/CarouselCard";

const HomePage = () => {
  const { users, getListUsers } = useUsers();

  useEffect(() => {
    getListUsers();
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="py-12 bg-gray-100 text-center">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
            Maksimalkan Rencanamu, Ditemenin oleh Tour Guide Profesional
          </h1>
          <Destination />
          <CarouselCard users={users} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
