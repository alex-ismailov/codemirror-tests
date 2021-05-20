import React from 'react';
import { UnControlled as CodeMirrorEditor } from 'react-codemirror2';
// import 'codemirror/mode/javascript/javascript.js';

import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/material.css';
// import 'codemirror/addon/scroll/simplescrollbars.css';
// import 'codemirror/addon/dialog/dialog.css';

import 'codemirror/theme/monokai.css';

import 'codemirror/keymap/sublime.js';

import 'codemirror/addon/edit/closebrackets.js';
import 'codemirror/addon/edit/matchtags.js';
import 'codemirror/addon/edit/matchbrackets.js';
import 'codemirror/addon/edit/closetag.js';
import 'codemirror/addon/fold/xml-fold.js';
import 'codemirror/addon/comment/comment.js';
import 'codemirror/addon/scroll/simplescrollbars.js';
import 'codemirror/addon/search/searchcursor.js';
import 'codemirror/addon/search/search.js';
import 'codemirror/addon/search/jump-to-line.js';
import 'codemirror/addon/dialog/dialog.js';

const Editor = () => {

  return (
    <CodeMirrorEditor
      // value='<h1>I ♥ react-codemirror2</h1>'
      options={{
        // mode: 'javascript',
        // theme: 'material',
        lineNumbers: true,
        tabSize: 2,
        keyMap: 'sublime',
        // mode: 'jsx',
      }}
      onChange={(editor, data, value) => {
        console.log(editor);
        console.log(data);
        console.log(value);
      }}
      // className="w-100 h-100"
    />
  );
};


export default Editor;