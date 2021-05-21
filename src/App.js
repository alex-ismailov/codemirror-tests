// import CodeBasicEditor from './CodeBasicEditor.jsx';
import Editor from './Editor.jsx';
// import LivewireTemp from './LivewireTemp.jsx'

const App = () => (
  <div className='container'>
    <div className='vh-100'>
      <div className='row h-75 justify-content-center'>
        <div className="col-6 card px-0 mt-5">
          <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="editor-tab" data-toggle="tab" href="#editor" role="tab" aria-controls="editor" aria-selected="true">Редактор</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="tests-tab" data-toggle="tab" href="#tests" role="tab" aria-controls="tests" aria-selected="false">Тесты</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="output-tab" data-toggle="tab" href="#output" role="tab" aria-controls="output" aria-selected="false">Вывод</a>
            </li>
          </ul>
          <div className="tab-content h-100" id="myTabContent">
            <div className="tab-pane fade active show h-100" id="editor" role="tabpanel" aria-labelledby="editor-tab">
              <Editor />
            </div>
            <div className="tab-pane fade" id="tests" role="tabpanel" aria-labelledby="tests-tab">
              Результат тестов
            </div>
            <div className="tab-pane fade" id="output" role="tabpanel" aria-labelledby="output-tab">
              Вывод
            </div>
          </div>
        </div>      
      </div>
    </div>
  </div>
);

export default App;
