import React, { useEffect } from 'react';
import htmlToDraft from 'html-to-draftjs';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function EditorComponent({ editorValue, onEditorChange, status }) {

  useEffect(() => {
    if (editorValue) {
      setEditorValue(editorValue);
    }
  }, [status]);

  const setEditorValue = (value) => {
    const contentBlock = htmlToDraft(value);
    if (contentBlock) {
      onEditorChange(value);
    }
  };

  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data={editorValue}
        onChange={(event, editor) => {
          const data = editor.getData();
          setEditorValue(data)
          console.log({ event, editor, data });
        }}


      />
    </div>
  );
}

export default EditorComponent;