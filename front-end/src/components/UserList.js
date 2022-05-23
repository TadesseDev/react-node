import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
export default function UserList({ users }) {
  return (
    <Container>
      {users.map(user => {
        return <Row key={user.id}>
          <Col>{user.userN}</Col>
          <Col>{user.userFN}</Col>
          <Col>{user.userLN}</Col></Row>
      })}
    </Container>
  )
}
