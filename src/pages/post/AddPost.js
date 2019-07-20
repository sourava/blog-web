import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Editor from 'features/editor/Editor';

import Input from 'antd/lib/input';
import Upload from 'antd/lib/upload';
import Select from 'antd/lib/select';
import message from 'antd/lib/message';

import { Button, ImageButton } from 'shared/components/html';

import uploadIcon from 'shared/assets/icons/upload.png';

import apiPaths from 'shared/apiPaths';

const { Option } = Select;

const PageContainer = styled.div`
    width: 1140px;
    margin: auto;
    padding: 0 15px;

    @media (max-width: 1140px) {
        width: 100%;
        padding: 0 40px;
    }

    @media (max-width: 991px) {
        padding: 0 15px;
    }
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const propTypes = {
    loginData: PropTypes.object.isRequired,
    addImageData: PropTypes.object.isRequired,
    addImageAction: PropTypes.func.isRequired,
    addPostAction: PropTypes.func.isRequired,
};

const AddPost = ({ loginData, addImageData, addImageAction, addPostAction }) => {
    const [body, setBody] = useState("");
    const [tags, setTags] = useState("");
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [images, setImages] = useState([]);
    const [thumbnail, setThumbnail] = useState("");

    const successCallback = () => {
        history.push("home");
    };

    const errorCallback = () => { };

    const onSubmit = () => {
        addPostAction({ title, category, tags, body, images, thumbnail }, loginData.data.token, successCallback, errorCallback);
    };

    const addImage = (file, successCallback, errorCallback) => {
        addImageAction(file, loginData.data.token, successCallback, errorCallback);
    };

    const props = {
        name: 'files',
        action: apiPaths.POSTS_ADD_IMAGE,
        headers: {
            authorization: `Bearer ${loginData.data.token}`,
        },
        onChange(info) {
            if (info.file.status === 'done') {
                setThumbnail(info.file.response[0].path);
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    return (
        <PageContainer>
            <FormContainer>
                <Input
                    placeholder="Add Title"
                    style={{ marginBottom: "20px" }}
                    size="large"
                    onChange={(e) => setTitle(e.target.value)}
                />

                <Select
                    onChange={(value) => setCategory(value)}
                    placeholder="Select Category"
                    style={{ marginBottom: "20px" }}
                    size="large"
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>

                <Select
                    mode="tags"
                    onChange={(value) => setTags(value)}
                    tokenSeparators={[',']}
                    placeholder="Add Tags"
                    style={{ marginBottom: "20px" }}
                    size="large"
                />

                <Upload {...props}>
                    <ImageButton imageProps={{ src: uploadIcon, round: false, height: "15px", width: "auto" }} size="large" text="Add a thumbnail" />
                </Upload>


                <Editor
                    content={body}
                    setContent={setBody}
                    addImage={addImage}
                    addImageData={addImageData}
                    setImages={setImages}
                    images={images}
                    style={{ margin: "20px 0 0", minHeight: '400px' }}
                />

                <Button
                    type="primary"
                    style={{ marginTop: "20px" }}
                    size="large"
                    onClick={onSubmit}
                >
                    Save
                </Button>
            </FormContainer>
        </PageContainer>
    );
};

AddPost.propTypes = propTypes;

export default AddPost;
