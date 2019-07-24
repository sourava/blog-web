import React from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';

class Editor extends React.PureComponent {
    constructor(props) {
        super(props);
        this.modules = {
            toolbar: {
                container: [
                    [
                        { 'header': '1' }, { 'header': '2' }, { 'font': [] }
                    ],
                    [
                        {
                            size: []
                        }
                    ],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [
                        { 'list': 'ordered' },
                        { 'list': 'bullet' },
                        { 'indent': '-1' },
                        { 'indent': '+1' }
                    ],
                    ['link', 'image', 'video'],
                    ['clean'],
                ],
                handlers: {
                    'image': this.imageHandler
                }
            },
            clipboard: {
                // toggle to add extra line breaks when pasting HTML:
                matchVisual: false,
            }
        };

        this.formats = [
            'header', 'font', 'size',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'indent',
            'link', 'image', 'video'
        ];
    }

    static propTypes = {
        addImageData: PropTypes.object.isRequired,
        addImage: PropTypes.func.isRequired,
        setImages: PropTypes.func.isRequired,
        setDescription: PropTypes.func.isRequired,
        images: PropTypes.array.isRequired,
        setContent: PropTypes.func.isRequired,
        content: PropTypes.string.isRequired,
        style: PropTypes.object.isRequired,
    };

    imageHandlerSuccessCallback = () => {
        const range = this.quillRef.getEditor().getSelection();
        this.props.images.push(this.props.addImageData.data[0].path);
        this.props.setImages(this.props.images);
        this.quillRef.getEditor().insertEmbed(range.index, 'image', this.props.addImageData.data[0].path);
    }

    imageHandler = () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = () => {
            const file = input.files[0];
            this.props.addImage(file, this.imageHandlerSuccessCallback, () => { });
        };
    }

    onChange = (value) => {
        this.props.setContent(value);
        this.props.setDescription(this.quillRef.getEditor().getText(value));
    }

    render() {
        const { content, style } = this.props;
        return (
            <ReactQuill
                ref={(quillRef) => this.quillRef = quillRef}
                theme="snow"
                onChange={this.onChange}
                value={content}
                modules={this.modules}
                formats={this.formats}
                bounds={'.app'}
                placeholder="Write something..."
                style={style}
            />
        );
    }
}

export default Editor;
