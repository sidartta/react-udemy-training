// External imports
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Internal imports
import { selectUserID } from '@store/auth/auth.slice';
import { startGoogleLogOut } from '@store/auth/auth.actions';
import { initializeExpenses } from '@store/expenses/expenses.actions';
import { BiUserCircle } from 'react-icons/bi';

// Component
const UserStatus = (props) => {
  const dispatch = useDispatch();
  const userID = useSelector(selectUserID);

  const handleSignOut = async () => {
    try {
      await dispatch(startGoogleLogOut());
      await dispatch(initializeExpenses('reset'));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h1 onClick={handleSignOut} className={props.iconClass}>
        <BiUserCircle />
      </h1>
      <span className={props.textClass}>
        Welcome {userID}! -- <button onClick={handleSignOut}>Log out</button>
      </span>
    </>
  );
};

export default UserStatus;
