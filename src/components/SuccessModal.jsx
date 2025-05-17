import React from "react";
import { CheckCircle } from "lucide-react";

const iconColors = {
  edit: "text-blue-500",
  delete: "text-red-500",
  booking: "text-green-500",
};

const SuccessModal = ({ type = "edit", title, message }) => {
  const iconColor = iconColors[type] || "text-green-500";

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 shadow-xl text-center w-[300px] animate-fade-in-up">
        <CheckCircle className={`${iconColor} mx-auto mb-4`} size={48} />
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{message}</p>
      </div>
    </div>
  );
};

export default SuccessModal;
