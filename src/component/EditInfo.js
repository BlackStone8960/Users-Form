import React, { useEffect, useState } from 'react';
import { useUsersContext } from '../context/user';

const EditInfo = (props) => {
  const { users, dispatchUser } = useUsersContext();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phrase, setPhrase] = useState('');
  
  useEffect(() => {
    // console.log(users);
    if (users.length) {
      const user = users.find((user) => user.id === props.match.params.id)
      setName(user.name);
      setEmail(user.email);
      setPhrase(user.phrase);
    }
  }, [users]); // Maybe I should fire after users dispatched
  
  const onSubmit = (e) => {
    e.preventDefault();
    dispatchUser({
      type: 'EDIT_USER',
      id: props.match.params.id,
      updates: { name, email, phrase }
    })
    setName('');
    setEmail('');
    setPhrase('');
    props.history.push('/');
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Name:</label>
        <input value={name} onChange={(e) => setName(e.target.value)}></input>
      </div>
      <div>
        <label>Email:</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
      </div>
      <div>
        <label>Company Phrase:</label>
        <input value={phrase} onChange={(e) => setPhrase(e.target.value)}></input>
      </div>
      <button>Save</button>
    </form>
  );
};

export { EditInfo as default };