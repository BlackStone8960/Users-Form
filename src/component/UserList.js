import React, { useEffect } from 'react';
import { useUsersContext } from '../context/user';
import UserListItem from './UserListItem.js';

const Top = ({ history }) => {
  const { users, dispatchUser } = useUsersContext();
  
  // useEffect(() => {
  //   // Fetch API here
  //   dispatchUser({
  //     type: 'SET_USERS',
  //     users: defaultUserInfo
  //   });
  // }, []);

  // useEffect(() => {
  //   console.log(users);
  // }, [users]);

  return (
    <div>
      {
        users.length === 0 ? (
          <div>
            <span>No Users</span>
          </div>
        ) : (
          users.map((user) => (
            <UserListItem key={user.id} {...user} history={history} />
          ))
        )
      }
    </div>
  );
}

export default Top;
