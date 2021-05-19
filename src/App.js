import CodeMirror from './CodeMirror.jsx';

function App() {
  return (
    <div className='container'>
      <div className='vh-100'>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">CodeMirror template</a>
        </nav>
        <div className='row h-50'>
          <CodeMirror />
        </div>
      </div>
    </div>
  );
}

export default App;
