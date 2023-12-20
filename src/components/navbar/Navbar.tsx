import React from 'react';
import Logo from './Logo';
import UserIcon from './UserIcon';
import CartIcon from './CartIcon';
import NavCategories from './NavCategories';

const Navbar: React.FC = () => {
  return (
    <nav>
      <Logo />
      <UserIcon />
      <CartIcon />
      <NavCategories />
    </nav>
  );
};

export default Navbar;