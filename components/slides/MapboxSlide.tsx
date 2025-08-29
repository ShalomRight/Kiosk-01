import React, { useRef, useEffect } from 'react';
import { MapboxSlideData } from '../../types';

// Declare Leaflet and Turf on the window object to satisfy TypeScript
declare global {
  interface Window {
    L: any;
    turf: any;
  }
}

const LodiCard: React.FC<{ title: string, description: string, buttonText?: string }> = ({ title, description, buttonText }) => (
    <div className="absolute bottom-6 left-6 max-w-sm p-4 bg-black/70 text-white rounded-lg shadow-2xl backdrop-blur-md border border-white/10 z-[1000]">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-1 text-neutral-300">{description}</p>
        {buttonText && (
            <button className="mt-3 px-4 py-2 bg-cyan-500 text-white font-semibold rounded-md hover:bg-cyan-600 transition-colors">
                {buttonText}
            </button>
        )}
    </div>
);

const MapboxSlide: React.FC<{ data: MapboxSlideData }> = ({ data }) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<any>(null);

  useEffect(() => {
    // Guard to ensure Leaflet script is loaded and the container div exists.
    if (typeof window.L === 'undefined' || !mapContainer.current) {
      console.error("Leaflet JS is not loaded yet or map container not found.");
      return;
    }
    
    // Initialize map only once. If it already exists, do nothing.
    if (map.current) return; 

    // Initialize the Leaflet map
    map.current = window.L.map(mapContainer.current, {
      center: [data.latitude, data.longitude],
      zoom: data.zoom,
      zoomControl: false, // Keep UI clean for kiosk
      attributionControl: true,
    });

    // Add the OpenStreetMap tile layer
    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map.current);
    
    // Add a marker to the map
    window.L.marker([data.latitude, data.longitude])
      .addTo(map.current);
      
    // Cleanup on unmount: remove the map instance to prevent memory leaks
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [data.latitude, data.longitude, data.zoom]);

  return (
    <div className="relative w-full h-full bg-neutral-800">
      <div ref={mapContainer} className="w-full h-full" />
      <LodiCard title={data.title} description={data.description} buttonText={data.buttonText} />
    </div>
  );
};

export default MapboxSlide;