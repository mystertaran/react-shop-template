import React from 'react';
import styles from './Logo.module.scss';
import MobileDetector from '@utils/MobileDetector'

const Logo: React.FC = () => {
  return (
    <MobileDetector>
      {(isMobile) => (
        <div>
          <img className={isMobile ? styles.mobileLogo : styles.desktopLogo} src="logo.png" alt={isMobile ? 'Mobile Logo' : 'Desktop Logo'} />
        </div>)}
    </MobileDetector>
  )
};

export default Logo;