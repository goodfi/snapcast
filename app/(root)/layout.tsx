import Navbar from '@/components/Navbar';
import React, { ReactNode } from 'react';

const LayoutRoot = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default LayoutRoot;
