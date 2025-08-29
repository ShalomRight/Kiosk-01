import React from 'react';

interface WelcomeCardProps {
  qrCodeUrl: string;
}

const WelcomeCard: React.FC<WelcomeCardProps> = ({ qrCodeUrl }) => {
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrCodeUrl)}&bgcolor=ffffff&color=000000&margin=0`;

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img 
          src={qrApiUrl} 
          alt="QR Code for more info" 
          className="w-24 h-24 rounded-lg"
        />
      </div>
      <div className="flex-1 flex items-start space-x-3">
        <div className="bg-green-500 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-lg font-bold">EV</span>
        </div>
        <div className="min-w-0">
          <h1 className="text-lg font-bold text-gray-900 leading-tight">Welcome to Everything Vincy</h1>
          <p className="text-gray-600 text-sm mt-1">Your guide to local life in St. Vincent & the Grenadines.</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;