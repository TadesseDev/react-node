import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
export default function Login() {
  const onchange = (event) => {
    event.preventDefault();
    console.log(event.target);
  }
  return (
    <Container>
      <Row>
        <Col sm={6} md={4}>
          <form action="http://localhost:3001/user/add-new-user" method="post">
            <div> <label htmlFor="userName">you name here</label>
              <input type="text" name="userName" id="userName"
                value="Tadesse-Alemayehu"
                onChange={onchange} /></div>
            <div> <label htmlFor="firstName">you name here</label>
              <input type="text" name="firstName" id="firstName" value="Tadesse"
                onChange={onchange} /></div>
            <div> <label htmlFor="lastName">you name here</label>
              <input type="text" name="lastName" id="lastName" value="Alemayehu"
                onChange={onchange} /></div>
            <button type="submit">submit</button>
          </form>
        </Col>
      </Row>
    </Container>
  )
}
