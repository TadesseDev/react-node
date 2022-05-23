import React, { useEffect, useState } from 'react'
import AddUser from '../components/AddUser'
import UserList from '../components/UserList'
export default function Home() {
  const [userList, updateUser] = useState([]);
  useEffect(() => {
    fetch('https://simple-user-manager.herokuapp.com/users/get-users')
      .then(response => response.json())
      .then(data => updateUser(data))
      .catch(error => console.error(error))
  }, []);
  return (
    <div>
      <AddUser updateUser={updateUser} />
      <UserList users={userList} />
    </div>
  )
}
