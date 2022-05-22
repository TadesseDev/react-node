import React, { useEffect, useState } from 'react'
import AddUser from '../components/AddUser'
import UserList from '../components/UserList'
export default function Home() {
  const [userList, updateUser] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/users/get-users')
      .then(response => response.json())
      .then(data => updateUser(data))
  }, []);
  return (
    <div>
      <AddUser updateUser={updateUser} />
      <UserList users={userList} />
    </div>
  )
}
