import React, { useEffect, useState } from 'react';
import API from '../api/axios';

function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await API.get('/user/users');
        setUsers(response.data);
      } catch (err) {
        setError('Failed to fetch users');
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      <h2>User List</h2>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.fullname} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
