import React from "react";

const MetricsLoader: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[1, 2, 3].map((key) => (
        <div
          key={key}
          className="bg-white rounded-lg p-6 shadow-sm animate-pulse"
        >
          {/* Title skeleton */}
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
          {/* Big number skeleton */}
          <div className="h-8 bg-gray-200 rounded w-1/2 mb-2"></div>
          {/* Subtitle skeleton */}
          <div className="h-3 bg-gray-200 rounded w-2/3"></div>
        </div>
      ))}
    </div>
  );
};

export default MetricsLoader;
