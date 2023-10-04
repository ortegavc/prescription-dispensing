import React, { ReactNode } from "react";

interface CustomAlertProps {
  message: string;
  onClose: () => void;
}

export function CustomAlert({ message, onClose }: CustomAlertProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-red-500 text-white p-6 rounded shadow-md">
        <p>{message}</p>
        <button
          className="mt-4 px-4 py-2 bg-white-400 text-white rounded hover:bg-blue-600"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}


