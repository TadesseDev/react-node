import React, { useState, } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
export default function AddUser({ updateUser }) {
  const [formData, updateFormData] = useState({
    userName: '',
    firstName: '',
    lastName: '',
  });
  const onchange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    updateFormData(oldState => {
      oldState[name] = value;
      return ({ ...oldState });
    });
  }
  const addUser = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(formData));
    fetch('http://localhost:3001/users/add-new-user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    }).then(() => {
      updateUser(oldUsers => [...oldUsers,
      {
        id: Math.random(),
        userN: formData.userName,
        userFN: formData.firstName,
        userLN: formData.lastName
      }]);
    })
      .catch(error => console.error(error))
  }
  return (
    <Container>
      <Row>
        <Col sm={6} md={4}>
          <form
            action="http://localhost:3001/users/add-new-user"
            method="post"
            onSubmit={addUser}>
            <div> <label htmlFor="userName">you name here</label>
              <input type="text" name="userName" id="userName"
                value={formData.userName}
                onChange={onchange} /></div>
            <div> <label htmlFor="firstName">you name here</label>
              <input type="text" name="firstName" id="firstName"
                value={formData.firstName}
                onChange={onchange} /></div>
            <div> <label htmlFor="lastName">you name here</label>
              <input type="text" name="lastName" id="lastName"
                value={formData.lastName}
                onChange={onchange} /></div>
            <button type="submit">submit</button>
          </form>
        </Col>
      </Row>
    </Container>
  )
}
