import InputForm from "../components/InputForm";
import SuccessModal from "../components/SuccessModal";
import Button from "../components/Button";
import { X } from "lucide-react";
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import { useNavigate } from "react-router-dom";

const EditData = ({ onclick, user }) => {
  const [showConfirmEditModal, setShowConfirmEditModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate("/");

  const [formData, setFormData] = useState({
    first_name: user.first_name || "",
    last_name: user.last_name || "",
    email: user.email || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="mt-10 w-full flex items-center justify-center">
      <div className="w-full max-w-xl mx-auto bg-white rounded-3xl shadow-lg p-6 sm:p-8 mt-6 transition-all duration-300 hover:shadow-blue-100">
        <div className="flex justify-end">
          <X
            size={28}
            className="cursor-pointer text-gray-600 hover:text-blue-600 transition"
            onClick={onclick}
          />
        </div>

        <form className="space-y-4">
          <InputForm
            label="First Name"
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="John"
          />
          <InputForm
            label="Last Name"
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Doe"
          />
          <InputForm
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
          />
          <Button
            variant="primary"
            onclick={(e) => {
              e.preventDefault();
              setShowConfirmEditModal(true);
            }}
          >
            Edit
          </Button>
        </form>
      </div>

      {showConfirmEditModal && (
        <ConfirmModal
          type="edit"
          title="Confirm Changes"
          message="Are you sure you want to save the changes to this guide?"
          onConfirm={() => {
            setShowSuccessModal(true);
            setTimeout(() => {
              setShowSuccessModal(false);
              navigate("/");
            }, 2000);
          }}
          onCancel={() => setShowConfirmEditModal(false)}
        />
      )}

      {showSuccessModal && (
        <SuccessModal
          type="edit"
          title="Edit Successful!"
          message="The guide profile has been updated."
        />
      )}
    </div>
  );
};

export default EditData;
