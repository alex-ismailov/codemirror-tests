import CodeBasicEditor from './CodeBasicEditor.jsx';
import Editor from './Editor.jsx';
import { Container, Row, Col, Card, Nav, Tab } from 'react-bootstrap';
// import LivewireTemp from './LivewireTemp.jsx'

const App = () => (
  <Container>
    <div className='vh-100'>
      <Row className='h-50 justify-content-center'>
        <Col xs={6} className='card h-100 px-0 mt-5'>
          <Tab.Container defaultActiveKey="editor">
            <Nav variant='tabs'>
              <Nav.Item>
                <Nav.Link eventKey="editor">Редактор</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="tests">Тесты</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="output">Вывод</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className='h-100 overflow-auto bg-success'>
              <Tab.Pane eventKey="editor" className='h-100'>
                <Editor />
              </Tab.Pane>
              <Tab.Pane eventKey="tests">
                Результат тестов
              </Tab.Pane>
              <Tab.Pane eventKey="output">
                Вывод
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </div>
  </Container>
);

export default App;
