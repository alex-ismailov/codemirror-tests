import React from 'react';

const LivewireTemp = () => {

  return (
    <div className="col-md-6 mt-2">
      <div className="card">
        <ul className="justify-content-center flex-shrink-0 nav nav-tabs" id="editor-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <a className="nav-link rounded-0 active" id="editor-home-tab" data-toggle="tab" href="#editor" role="tab" aria-controls="editor" aria-selected="true">
                        Редактор
                    </a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link rounded-0" id="editor-tests-tab" data-toggle="tab" href="#editor-tests" role="tab" aria-controls="editor-tests" aria-selected="false">
                        Тесты
                    </a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link rounded-0" id="editor-contact-tab" data-toggle="tab" href="#editor-output" role="tab" aria-controls="editor-output" aria-selected="false">
                        Вывод
                    </a>
          </li>
        </ul>
        <div className="tab-content card-body" id="pills-tab-content">
          <div className="tab-pane fade show active" id="editor" role="tabpanel" aria-labelledby="editor">
            <form method="POST" action="https://sicp.hexlet.io/ru/exercises/1" accept-charset="UTF-8">
              <input name="_token" type="hidden" value="J37IeYYfK7FYZhVMM8TLgpbjL1twhvLf0KjFWPFP" />
              <div className="alert
                        alert-info
                        " role="alert">
                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>

                Для этого упражнения нет проверок. Любое решение будет считаться успешным ответом.
              </div>

              <div className="form-group">
                <textarea className="form-control" style="resize: vertical" placeholder="Введите свое решение" required="required" cols="200" id="x-editor-textarea" name="content" rows="10"></textarea>

                <small className="form-text text-muted"></small>
              </div>

              <input name="exercise_id" type="hidden" value="1" />
              <button className="btn btn-primary float-right" type="button">
                <div>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                </div>
                <div>
                  Запустить
                </div>
              </button>
            </form>
          </div>
          <div className="tab-pane fade" id="editor-tests" role="tabpanel" aria-labelledby="editor-tests">
            <pre><code className="lang-scheme hljs"></code></pre>
          </div>
          <div className="tab-pane fade" id="editor-output" role="tabpanel" aria-labelledby="editor-output">
            <pre><code className="lang-vbnet hljs x-text-pre-wrap"></code></pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivewireTemp;
