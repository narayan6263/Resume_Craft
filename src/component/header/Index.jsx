import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import style from '../header/Index.module.css'
import Logos from '/assets/logo.jpeg'

function Index() {
  return (
    <Navbar expand="lg" className={` ${style.navbar}`}>
      <Container>
        <Navbar.Brand href="#home"><img src={Logos} alt="imagess" width='45px' />RESUME ELITE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={style.navbar_right}>
          <Nav className="m-2">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          <Nav className="m-2">
            <Nav.Link href="/select_template">Create</Nav.Link>
          </Nav>

          <Nav className="m-2">
            <Nav.Link href="/updatePage">Update</Nav.Link>
          </Nav>
          <Nav className="m-2">
            <Nav.Link href="/deletePage">Delete</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Index;