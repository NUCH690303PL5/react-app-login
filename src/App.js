
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './componentes/Login';
import { Row,Container,Col } from 'react-bootstrap';
import Menunav from './componentes/Menunav';

function App() {
  return (
    <Container>
      <div className='App'>
        <Menunav></Menunav>
      </div>
      <Row>
        <Col></Col>
        <Col>
          <div className="App">
            <Login></Login>
          </div>
        </Col>
        <Col></Col>
        </Row>
    </Container>
  );
}

export default App;

//<img src={logo} className="App-logo" alt="logo" />