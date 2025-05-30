import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TourGuidePage from "./pages/TourGuidePage";
import ProtectedRoute from "./components/ProtectedRoute";
import TourGuideDetailPage from "./pages/TourGuideDetailPage";
import HomePage from "./pages/LandingPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing-page" element={<HomePage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <TourGuidePage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/users/:id"
          element={
            <ProtectedRoute>
              <TourGuideDetailPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
