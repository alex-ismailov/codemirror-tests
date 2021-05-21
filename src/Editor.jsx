import React from 'react';
import { UnControlled as CodeMirrorEditor } from 'react-codemirror2';

import 'codemirror/mode/scheme/scheme.js';
import 'codemirror/lib/codemirror.css';
import 'codemirror/keymap/sublime.js';

const Editor = () => {
  const initialValue = `(cond ((= a 4) 6)
      ((= b 4) (+ 6 7 a))
      (else 25))
    (+ 2 (if (> b a) b a))
    (* (cond ((> a b) a)
        ((< a b) b)
        (else -1))
    (+ a 1))
  `;

  return (
    <CodeMirrorEditor
      value={initialValue}
      options={{
        mode: 'scheme',
        lineNumbers: true,
        tabSize: 2,
        keyMap: 'sublime',
      }}
      onChange={(editor, data, value) => {
        console.log(value);
      }}
    />
  );
};


export default Editor;