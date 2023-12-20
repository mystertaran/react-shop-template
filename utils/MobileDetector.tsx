import React, { ReactNode, useEffect, useState } from 'react';

interface MobileDetectorProps {
  children: (isMobile: boolean) => ReactNode;
}

const MobileDetector: React.FC<MobileDetectorProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const isMobileDevice = window.matchMedia('(max-width: 767px)').matches;
      setIsMobile(isMobileDevice);
    };

    checkIfMobile();

    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return <>{children(isMobile)}</>;
};

export default MobileDetector;