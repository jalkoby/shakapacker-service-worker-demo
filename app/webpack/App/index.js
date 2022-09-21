import Main from './Main'
import Sidebar from './Sidebar'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'

export default ({ imagePath }) => (
  <>
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="/">
          <Image src={imagePath('./favicon.png')} width="48" className="me-1" />
          Service Workers
        </Navbar.Brand>
      </Container>
    </Navbar>
    <Container className="mt-5">
      <div className="row">
        <div className="col">
          <Main />
        </div>
        <div className="col-4">
          <Sidebar />
        </div>
      </div>
    </Container>
  </>
);
