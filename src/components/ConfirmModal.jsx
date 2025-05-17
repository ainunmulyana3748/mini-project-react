import { AlertTriangle } from "lucide-react";

const ConfirmModal = ({
  type = "delete",
  title,
  message,
  onConfirm,
  onCancel,
}) => {
  const isDelete = type === "delete";

  const iconColor = isDelete ? "text-red-500" : "text-blue-500";
  const buttonColor = isDelete
    ? "bg-red-500 hover:bg-red-600"
    : "bg-blue-500 hover:bg-blue-600";
  const confirmText = isDelete ? "Yes, Delete" : "Yes, Save";

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 shadow-xl text-center w-[320px] animate-fade-in-up">
        <AlertTriangle className={`${iconColor} mx-auto mb-4`} size={48} />
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{message}</p>
        <div className="mt-6 flex justify-center gap-4">
          <button
            className="px-4 py-2 text-sm rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 cursor-pointer"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className={`px-4 py-2 text-sm rounded-lg text-white cursor-pointer ${buttonColor}`}
            onClick={onConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
