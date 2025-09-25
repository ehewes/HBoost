import React from 'react';

interface HelloProps {
  name?: string;
  className?: string;
}

const Hello: React.FC<HelloProps> = ({ 
  name = 'World', 
  className = '' 
}) => {
  return (
    <div className={`p-6 bg-amber-600 text-black rounded-lg shadow-lg ${className}`}>
      <h2 className="text-2xl font-bold mb-2">
        Hello Component Test
      </h2>
      <p className="text-blue-100">
        Flexible Component
      </p>
    </div>
  );
};

export default Hello;
