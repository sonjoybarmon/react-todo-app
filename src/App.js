import './App.css';
import {Container , Row , Col} from 'reactstrap';
import Index from './Components/Todos/Index.jsx'
function App() {
  return (
    <Container>
      <Row>
          <Col>
              <Index />
          </Col>
      </Row>
    </Container>
  );
}

export default App;
