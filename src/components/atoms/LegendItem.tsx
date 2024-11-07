import React from 'react';

import { LegendItemProps } from '@/types';

const LegendItem: React.FC<LegendItemProps> = ({ color, label }) => {
  return (
    <div className="flex items-center mr-4">
      <span className={`block w-4 h-4 mr-2 ${color}`}></span>
      <span>{label}</span>
    </div>
  );
};

export default LegendItem;
