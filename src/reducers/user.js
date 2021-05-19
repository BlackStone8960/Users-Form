const userReducer = (state, action) => {
  switch(action.type) {
    case 'SET_USERS':
      return [
        action.users
      ];
    case 'EDIT_USER':
      return state.map((user) => {
        if(user.id === action.id) {
          return {
            ...user,
            ...action.updates
          }
        } else {
          return user;
        }
      });
    case 'REMOVE_USER':
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
}

export default userReducer;