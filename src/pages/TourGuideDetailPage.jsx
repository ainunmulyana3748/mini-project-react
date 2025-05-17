import { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import Breadcrumb from "../components/Breadcrumb";
import { useUserDetail } from "../hooks/useUserDetail";
import CardUserDetail from "../components/CardUserDetail";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import SuccessModal from "../components/SuccessModal";
import EditData from "../components/EditData";
import ConfirmModal from "../components/ConfirmModal";

const TourGuideDetailPage = () => {
  const { user, fetchUserDetail, loading, error } = useUserDetail();
  const role = localStorage.getItem("role");
  const [showEditData, setShowEditData] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleBooking = () => {
    setShowModal(true);
    setTimeout(() => {
      navigate("/landing-page");
    }, 2500);
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
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-red-100 text-red-700 border border-red-300 px-6 py-4 rounded-xl shadow-sm text-center max-w-md">
          <p className="font-semibold">Terjadi Kesalahan</p>
          <p className="text-sm mt-1">{error}</p>
        </div>
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
          <CardUserDetail
            user={user}
            button={
              role === "customer" ? (
                <Button onClick={handleBooking} variant="primary">
                  Booking Now!
                </Button>
              ) : (
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-start justify-center">
                  <Button
                    variant="outline"
                    onClick={() => setShowEditData(true)}
                  >
                    Edit Profile
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      setShowConfirmModal(true);
                    }}
                  >
                    Delete Guide
                  </Button>
                </div>
              )
            }
          />
        )}
      </div>
      {showEditData && (
        <EditData
          onclick={() => {
            setShowEditData(false);
          }}
          user={user}
        />
      )}

      {showModal && (
        <SuccessModal
          type="booking"
          title="Booking Confirmed!"
          message="Your guide has been successfully booked."
        />
      )}

      {showConfirmModal && (
        <ConfirmModal
          type="delete"
          title="Are you sure?"
          message="Do you really want to delete this guide?"
          onConfirm={() => {
            setShowSuccessModal(true);
            setTimeout(() => {
              setShowSuccessModal(false);
              navigate("/");
            }, 2000);
          }}
          onCancel={() => setShowConfirmModal(false)}
        />
      )}

      {showSuccessModal && (
        <SuccessModal
          type="delete"
          title="Delete Successful!"
          message="The guide has been removed from the system."
        />
      )}
    </div>
  );
};

export default TourGuideDetailPage;
