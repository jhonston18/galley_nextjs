import React from 'react';

const LoadingIndicator = ({ type = 'spinner', size = 'md', label = 'Loading...' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const spinnerClass = sizeClasses[size] || sizeClasses.md;

  if (type === 'dot-circle') {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className={`animate-spin rounded-full border-4 border-gray-300 border-t-blue-500 ${spinnerClass}`}></div>
        {label && <p className="mt-2 text-gray-600">{label}</p>}
      </div>
    );
  }

  // Default spinner
  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`animate-spin rounded-full border-4 border-gray-300 border-t-blue-500 ${spinnerClass}`}></div>
      {label && <p className="mt-2 text-gray-600">{label}</p>}
    </div>
  );
};

export { LoadingIndicator };