// import CodeBasicEditor from './CodeBasicEditor.jsx';
import Editor from './Editor.jsx';
import { Container, Row, Col, Card, Nav, Tab } from 'react-bootstrap';
// import LivewireTemp from './LivewireTemp.jsx'

// const App = () => (
//   <Container>
//     <div className='vh-100'>
//       <Row className='h-75 justify-content-center'>
//         <Col xs={6} className='card h-100 px-0 mt-5'>
//           <Tab.Container defaultActiveKey="editor">
//             <Nav variant='tabs'>
//               <Nav.Item>
//                 <Nav.Link eventKey="editor">Редактор</Nav.Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Nav.Link eventKey="tests">Тесты</Nav.Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Nav.Link eventKey="output">Вывод</Nav.Link>
//               </Nav.Item>
//             </Nav>
//             <Tab.Content className='h-100'>
//               <Tab.Pane eventKey="editor" className='h-100'>
//                 <Editor />
//               </Tab.Pane>
//               <Tab.Pane eventKey="tests">
//                 Результат тестов
//               </Tab.Pane>
//               <Tab.Pane eventKey="output">
//                 Вывод
//               </Tab.Pane>
//             </Tab.Content>
//           </Tab.Container>
//         </Col>
//       </Row>
//     </div>
//   </Container>
// );

const App = () => (
  <Container className=''>
    <div className='vh-100'>
      <Row className='h-75 justify-content-center'>
        <Col xs={6} className='h-100 border overflow-hidden px-0 mt-5'>
          <Tab.Container defaultActiveKey="editor" className='border'>
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
            <Tab.Content className='h-100'>
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

// Шаблон на native bootstrap 4.6
// const App = () => (
//   <div className='container'>
//     <div className='vh-100'>
//       <div className='row h-75 justify-content-center'>
//         <div className="col-6 card px-0 mt-5">
//           <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
//             <li className="nav-item">
//               <a className="nav-link active" id="editor-tab" data-toggle="tab" href="#editor" role="tab" aria-controls="editor" aria-selected="true">Редактор</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" id="tests-tab" data-toggle="tab" href="#tests" role="tab" aria-controls="tests" aria-selected="false">Тесты</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" id="output-tab" data-toggle="tab" href="#output" role="tab" aria-controls="output" aria-selected="false">Вывод</a>
//             </li>
//           </ul>
//           <div className="tab-content h-100" id="myTabContent">
//             <div className="tab-pane fade active show h-100" id="editor" role="tabpanel" aria-labelledby="editor-tab">
//               <Editor />
//             </div>
//             <div className="tab-pane fade" id="tests" role="tabpanel" aria-labelledby="tests-tab">
//               Результат тестов
//             </div>
//             <div className="tab-pane fade" id="output" role="tabpanel" aria-labelledby="output-tab">
//               Вывод
//             </div>
//           </div>
//         </div>      
//       </div>
//     </div>
//   </div>
// );
