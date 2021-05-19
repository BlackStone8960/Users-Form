import React, { useReducer, createContext, useContext } from 'react';
import userReducer from '../reducers/user';

const UsersContext = createContext();

const defaultUserInfo = [{
  id: "1234",
  name: 'No Name',
  email: 'No Email',
  phrase: 'No Phrase'
}]

const UsersProvider = ({ children }) => {
  const [users, dispatchUser] = useReducer(userReducer, defaultUserInfo);
  
  return (
    <UsersContext.Provider value={{users, dispatchUser}}>
      {children}
    </UsersContext.Provider>
  )
};

const useUsersContext = () => useContext(UsersContext);

export { useUsersContext, UsersProvider as default };