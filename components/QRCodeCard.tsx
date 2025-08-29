
import React from 'react';

interface QRCodeCardProps {
  qrCodeUrl: string;
  text: string;
}

const InvestSVGICon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H8l4-5v4h3l-4 5z"/>
    </svg>
);


const QRCodeCard: React.FC<QRCodeCardProps> = ({ qrCodeUrl, text }) => {
    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrCodeUrl)}&bgcolor=171717&color=ffffff`;

  return (
    <div className="w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8 bg-neutral-900">
      <div className="flex items-center space-x-6">
        <div className="flex-shrink-0">
          <img 
            src={qrApiUrl} 
            alt="QR Code" 
            className="w-28 h-28 md:w-36 md:h-36 rounded-lg shadow-lg shadow-cyan-500/10"
          />
        </div>
        <div className="flex flex-col justify-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">
                Scan to Participate
            </h2>
            <p className="mt-2 text-lg md:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-300">
                {text}
            </p>
            <div className="flex items-center mt-4 text-neutral-400">
                <InvestSVGICon className="w-5 h-5 mr-2 text-cyan-500" />
                <span className="text-sm font-medium">Powered by InvestSVG</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeCard;
