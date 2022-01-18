// External imports
import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdSpaceDashboard, MdOutlineHelpOutline } from 'react-icons/md';
import { IoMdAddCircle } from 'react-icons/io';
import { FaCashRegister } from 'react-icons/fa';

// Internal imports
import UserStatus from '@components/UserStatus/UserStatus.jsx';
import { HeaderStyles } from './Header.styles';
import HeaderItem from './HeaderItem.jsx';

// Component
const Header = () => {
  return (
    <HeaderStyles>
      <HeaderItem text={'Dashboard'} icon={<MdSpaceDashboard />} target={'/dashboard'} />
      <HeaderItem text={'View Expenses'} icon={<FaCashRegister />} target={'/view'} />
      <HeaderItem text={'Add Expense'} icon={<IoMdAddCircle />} target={'/add'} focused={true} />
      <HeaderItem text={'Need Help ?'} icon={<MdOutlineHelpOutline />} target={'/help'} />
      <HeaderItem isUserHandle={true} />
    </HeaderStyles>
  );
};

export default Header;
