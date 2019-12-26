// import React, { Component } from 'react'

// export default class Annex extends Component {
//     render() {
//         return (
//             <div>
//                 AnnexAnnexAnnexAnnex
//             </div>
//         )
//     }
// }


import React, { Component } from 'react';
import { EditorState, convertFromRaw , convertToRaw} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';


const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

export default class Annex extends Component {
  constructor(props) {
    super(props);
    const contentState = convertFromRaw(content);
    this.state = {
      contentState,
      editorState: EditorState.createEmpty(),
    }
  }

  onContentStateChange = (contentState) => {
      let html = draftToHtml(contentState)
    this.setState({
      contentState: html,
    });
  };

  
  onEditorStateChange = editorState => {
    var editorContent = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
    console.log(editorContent)
    this.setState({
        editorState,
    },() => {
        console.log(this.state.editorState)
    });
};

  render() {
    const { contentState, editorState } = this.state;
    return (
      <div>
        <Editor
            editorState={editorState}
        //   wrapperClassName="demo-wrapper"
        //   editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        //   onContentStateChange={this.onContentStateChange}
        />
        {/* <textarea
          disabled
          value={JSON.stringify(contentState, null, 4)}
        /> */}
      </div>
    );
  }
}