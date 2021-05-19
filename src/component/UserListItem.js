import React from 'react';
import { Link } from 'react-router-dom';
import { useUsersContext } from '../context/user';

const UserListItem = ({ id, name, email, phrase }) => { 
  const { dispatchUser } = useUsersContext();

  return (
    <div className="user-container">
      <div>Name: {name}</div>
      <div>Email: {email}</div>
      <div>Company Phrase: {phrase}</div>
      <div className="button-flex">
        <div
          onClick={() => dispatchUser({ type: 'REMOVE_USER', id })}
          className="button"
        >
          Remove User
        </div>
        <Link to={`/edit/${id}`}>
          <div className="button">Edit User</div>
        </Link>
      </div>
    </div>
  )
};

export default UserListItem;