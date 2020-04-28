import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Button, Form } from 'react-bootstrap'


const Linkbar = () => {

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">หน้าหลัก</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/vedio">ผลงานเพลง</Nav.Link>
        </Nav>
        <Form inline>
          <Button variant="danger" href="/login">Admin Zone </Button>
        </Form>
      </Navbar>
    </div>
  )
}

export default Linkbar