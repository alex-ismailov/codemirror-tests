import React from 'react';

const CodeBasicEditor = () => {
  return (
    <div className="col-12 col-md-6 col-lg-7 pl-md-0 x-h-md-100">
      <div className="d-flex flex-column x-h-md-100" data-testid="basics-lesson-container" id="basics-lesson-container">
        <div className="card vh-100 x-h-md-100">
          <div className="justify-content-center flex-shrink-0 nav nav-tabs" role="tablist">
            <div className="nav-item"><a href="#editor" role="tab" data-rb-event-key="editor" id="tabs-tab-editor" aria-controls="tabs-tabpane-editor" aria-selected="true" className="rounded-0 nav-link active">Редактор</a></div>
            <div className="nav-item"><a href="#testForExercise" role="tab" data-rb-event-key="testForExercise" id="tabs-tab-testForExercise" aria-controls="tabs-tabpane-testForExercise" aria-selected="false" className="rounded-0 nav-link">Тесты</a></div>
            <div className="nav-item"><a href="#output" role="tab" data-rb-event-key="output" id="tabs-tab-output" aria-controls="tabs-tabpane-output" aria-selected="false" className="rounded-0 nav-link">Вывод</a></div>
            <div className="nav-item"><a href="#solution" role="tab" data-rb-event-key="solution" id="tabs-tab-solution" aria-controls="tabs-tabpane-solution" aria-selected="false" className="rounded-0 nav-link">Решение</a></div>
          </div>
          <div className="d-flex h-100 tab-content overflow-auto">
            <div id="tabs-tabpane-editor" aria-labelledby="tabs-tab-editor" role="tabpanel" aria-hidden="false" className="fade tab-pane h-100 pr-3 w-100 overflow-hidden active show">
              <div className="react-codemirror2 w-100 h-100">
                <div className="CodeMirror cm-s-default CodeMirror-overlayscroll">
                  <div style={{overflow: 'hidden', position: 'relative', width: '3px', height: '0px', top: '4px', left: '34px'}}>
                    <textarea autoCorrect="off" autoCapitalize="off" spellCheck="false" style={{position: 'absolute', bottom: '-1em', padding: '0px', width: '1000px', height: '1em', outline: 'none'}} tabIndex="0"></textarea>
                  </div>
                  <div className="CodeMirror-overlayscroll-horizontal" cm-not-content="true" style={{display: 'none'}}>
                    <div></div>
                  </div>
                  <div className="CodeMirror-overlayscroll-vertical" cm-not-content="true" style={{display: 'none'}}>
                    <div></div>
                  </div>
                  <div className="CodeMirror-scrollbar-filler" cm-not-content="true"></div>
                  <div className="CodeMirror-gutter-filler" cm-not-content="true"></div>
                  <div className="CodeMirror-scroll" tabIndex="-1">
                    <div className="CodeMirror-sizer" style={{marginLeft: '30px', marginBottom: '0px', borderRightWidth: '50px', minHeight: '32px', minWidth: '7px', paddingRight: '0px', paddingBottom: '0px'}}>
                      <div style={{position: 'relative', top: '0px'}}>
                        <div className="CodeMirror-lines" role="presentation">
                          <div role="presentation" style={{position: 'relative', outline: 'none'}}>
                            <div className="CodeMirror-measure">
                              <div className="CodeMirror-linenumber CodeMirror-gutter-elt">
                                <div>1</div>
                              </div>
                            </div>
                            <div className="CodeMirror-measure"></div>
                            <div style={{position: 'relative', zIndex: 1}}></div>
                            <div className="CodeMirror-cursors" style={{visibility: 'hidden'}}>
                              <div className="CodeMirror-cursor" style={{left: '4px', top: '0px', height: '24px'}}>&nbsp;</div>
                            </div>
                            <div className="CodeMirror-code" role="presentation">
                              <div style={{position: 'relative'}}>
                                <div className="CodeMirror-gutter-wrapper" aria-hidden="true" style={{left: '-30px'}}>
                                  <div className="CodeMirror-linenumber CodeMirror-gutter-elt" style={{left: '0px', width: '21px'}}>1</div>
                                </div><pre className=" CodeMirror-line " role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}><span cm-text="">​</span></span></pre></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{position: 'absolute', height: '50px', width: '1px', borderBottom: '0px solid transparent', top: '32px'}}></div>
                    <div className="CodeMirror-gutters" style={{height: '82px', left: '0px'}}>
                      <div className="CodeMirror-gutter CodeMirror-linenumbers" style={{width: '29px'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tabs-tabpane-testForExercise" aria-labelledby="tabs-tab-testForExercise" role="tabpanel" aria-hidden="true" className="fade tab-pane h-100 p-3 w-100">
              <div className="p-lg-3 hexlet-basics-content">
                <h2 className="h3">Ваше упражнение проверяется по этим тестам</h2><pre><code className="hljs javascript"><span className="hljs-comment"><span className="hljs-comment"></span></span>

            <span className="hljs-keyword"><span className="hljs-keyword">import</span></span> { 'expectOutput' } <span className="hljs-keyword"><span className="hljs-keyword">from</span></span> <span className="hljs-string"><span className="hljs-string">'hexlet-basics/tests'</span></span>;

            <span className="hljs-keyword"><span className="hljs-keyword">const</span></span> expected = <span className="hljs-string"><span className="hljs-string">'Hello, World!'</span></span>;
            
            </code></pre></div>
            </div>
            <div id="tabs-tabpane-output" aria-labelledby="tabs-tab-output" role="tabpanel" aria-hidden="true" className="fade tab-pane h-100 p-3 w-100"></div>
            <div id="tabs-tabpane-solution" aria-labelledby="tabs-tab-solution" role="tabpanel" aria-hidden="true" className="fade tab-pane h-100 p-3 w-100">
              <div>
                <div className="text-center">
                  <p className="lead">Решение учителя станет доступным через:</p>
                  <div className="display-4">00:44</div><img className="img-fluid px-5" src="/packs/media/images/d4624f6d103e92832834.png" alt="waiting_clock" /></div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center p-3 border-top flex-shrink-0">
            <button title="Сбросить код" type="button" className="mr-3 d-inline-flex align-items-center btn btn-secondary">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sync-alt" className="svg-inline--fa fa-sync-alt fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z"></path>
              </svg>
            </button>
            <a className="btn btn-outline-secondary
        font-weight-normal mr-3 order-first order-sm-0 order-md-first order-lg-0" href="/languages/javascript/lessons/hello-world/prev_lesson">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" className="svg-inline--fa fa-arrow-left fa-w-14 d-sm-none d-md-block d-lg-none" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
              </svg><span className="d-none d-sm-block d-md-none d-lg-block">Предыдущий</span></a>
            <button type="button" className="mr-3 d-inline-flex align-items-center btn btn-primary">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play-circle" className="svg-inline--fa fa-play-circle fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path>
              </svg><span className="d-none d-sm-block d-md-none d-lg-block ml-1">Проверить</span></button>
            <a className="btn btn-outline-primary font-weight-normal disabled" href="/languages/javascript/lessons/hello-world/next_lesson">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" className="svg-inline--fa fa-arrow-right fa-w-14 d-sm-none d-md-block d-lg-none" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
              </svg><span className="d-none d-sm-block d-md-none d-lg-block">Следующий</span></a>
          </div>
        </div>
      </div>
      <link rel="stylesheet" media="all" href="/packs/css/lesson-66b45919.css" />
    </div>
  );
};

export default CodeBasicEditor;
