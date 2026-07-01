import React from "react";


const PHONE_NUMBER = "+31 6 14741104";

const DEFAULT_MESSAGE = "Hallo%20Yezidi%20Security%2C%20ik%20heb%20een%20vraag%20over%20uw%20diensten.%20";

function sanitizeNumber(raw: string) {
  return raw.replace(/\D/g, "");
}

export default function WhatsAppButton() {
  const number = sanitizeNumber(PHONE_NUMBER);
  const url = `https://wa.me/${number}?text=${DEFAULT_MESSAGE}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Stuur een appje via WhatsApp"
      title="Stuur een appje via WhatsApp"
      className="fixed right-4 bottom-4 z-50 text-[#25D366] hover:text-[#1DA851] transition-colors duration-150 rounded-full shadow-lg p-3 flex items-center justify-center"
    >
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
      >
        <path
          fill="currentColor"
          d="M16 0.5C7.163 0.5 0.5 7.163 0.5 16c0 2.93 0.79 5.668 2.16 8.062L0 32l8.254-2.16A15.92 15.92 0 0016 32c8.837 0 16-7.163 16-16S24.837 0.5 16 0.5z"
        />
        <path
          fill="#FFFFFF"
          d="M22.1 19.9c-0.4-0.2-2.4-1.2-2.8-1.3-0.4-0.1-0.6-0.2-0.8 0.1-0.2 0.3-0.8 1-0.9 1.2-0.1 0.2-0.2 0.3-0.4 0.2-0.2-0.1-1-0.4-1.9-1.1-1-0.9-1.6-1.9-1.8-2.2-0.2-0.3 0-0.5 0.1-0.7 0.1-0.2 0.3-0.4 0.4-0.6 0.2-0.2 0.2-0.3 0.3-0.5 0.1-0.2 0.1-0.3 0-0.5-0.1-0.2-0.6-1.4-0.8-1.9-0.2-0.4-0.4-0.4-0.6-0.4l-0.5 0c-0.2 0-0.5 0.1-0.7 0.3-0.3 0.3-0.9 0.8-0.9 1.9 0 1.1 1 3.2 1.1 3.4 0.1 0.2 2 3 4.9 4.6 0.5 0.2 1 0.3 1.5 0.3 0.5 0 1.1-0.1 1.6-0.4 0.5-0.3 0.9-0.7 1-0.8 0.2-0.1 0.3-0.2 0.2-0.3-0.1-0.2-0.3-0.3-0.6-0.4z"
        />
      </svg>
    </a>
  );
}
