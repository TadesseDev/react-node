import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
export default function UserList() {
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    console.log("getting users");
    fetch('http://localhost:3001/users/get-users')
      .then(response => response.json())
      .then(data => {
        setUsers(oldUsers => (data));
      });
  }
  useEffect(() => {
    console.log(users);
  }, [users]);
  return (
    <Container>
      <button type="button" onClick={getUsers}>Get users</button>
      {users.map(user => {
        return <Row>
          <Col>{user.userN}</Col>
          <Col>{user.userFN}</Col>
          <Col>{user.userLN}</Col></Row>
      })}
    </Container>
  )
}
