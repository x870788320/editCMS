import React, { Component, Fragment } from 'react';
import { Row, Col, Card, Modal, Button } from 'antd';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import './index.less'
class Journal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
            visible:false,
            stylesEditor: {
                'background': '#00f'
            }
        };
        this.formLayout = {
            labelCol: { span: 7 },
            wrapperCol: { span: 13 },
        };
    }

    onEditorStateChange = editorState => {
        let editorContent = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
        this.setState({
            editorState,
            editorContent
        }, () => {
            console.log(editorContent)
        });

    };

    // onContentStateChange = connectState => {
    //     const html = draftToHtml(connectState)
    //     console.log(html)
    // }

    handleClick = () => {
        console.log('onClick submit')
        this.setState({
            visible: true,
            editorState:EditorState.createEmpty()
        })
    };
    handleEditInit = () => {
        const { editorState, visible, editorContent }  = this.state;
        return (
            <Card  bordered={false} style={{ minHeight: '500px',}}>
                <Row gutter={{ md: 8, lg: 24, xl: 48 }} style={{ minHeight: '500px',}}>
                    <Editor
                        editorState={editorState}
                        localization={{locale: 'zh',}}
                        toolbar={{
                            fontFamily: { options: ['宋体', '黑体', '楷体', '微软雅黑','Arial',  'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana',]}
                          }}
                        // toolbarClassName={styles.toolbar} 
                        // wrapperClassName={styles.wrapper} 
                        editorClassName='stylesEditor'
                        onEditorStateChange={this.onEditorStateChange} //获取内容变化值
                        // onContentStateChange = {this.onContentStateChange} //编辑器状态发生变化时
                        // style={{minHeight: '500px'}}
                    />
                    <Row gutter={{ md: 8, lg: 24, xl: 48 }} >
                        <Button type="primary"
                            style={{ marginRight: 50 }}
                            onClick={() => this.handleClick ()}
                        >
                            提交
                        </Button>  
                    </Row>
                    <Row gutter={{ md: 8, lg: 24, xl: 48 }} >
                        <Modal title="content"
                            visible = { visible }
                            onCancel={() => {
                                this.setState({
                                    visible: false
                                })
                            }}
                        >
                            { editorContent }
                        </Modal>  
                    </Row>
                </Row>
            </Card> 
        )
    }
    render() {              
        return this.handleEditInit();
    }
}
                            
export default Journal;