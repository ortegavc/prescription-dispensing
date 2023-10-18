import React from 'react';

interface StatusIndicatorProps {
  name:string;  
  status: number; 
}

export const TerminalEstado: React.FC<StatusIndicatorProps> = ({ name, status }) => {
  return (
    <div className="flex items-center">
      <span className="text-gray-600">{name}</span>
      <div className="relative ml-2">
        {/* Icono de apagado */}
        <svg
          className={`w-5 h-5 text-red-500 ${status === 0 ? 'block' : 'hidden'}`}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M6 6L18 18" />
          <path d="M6 18L18 6" />
        </svg>
        {/* Icono de encendido */}
        <svg
          className={`w-5 h-5 text-green-500 ${status === 1 ? 'block' : 'hidden'}`}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>
    </div>
  );
};

 
