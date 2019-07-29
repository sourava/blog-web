import React, { useState } from 'react';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

import Editor from 'features/editor/Editor';
import { Button, ImageButton, Input } from 'shared/components/html';
import uploadIcon from 'shared/assets/icons/upload.png';

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
    categories: PropTypes.object.isRequired,
    addImageData: PropTypes.object.isRequired,
    addImageAction: PropTypes.func.isRequired,
    addPostAction: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
};

const AddPost = ({ loginData, categories, addImageData, addImageAction, addPostAction, history }) => {
    const [body, setBody] = useState("");
    const [description, setDescription] = useState("");
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
        const trimmedDescription = description.substring(0, 175) + "...";
        addPostAction({ title, category, tags, body, images, description: trimmedDescription, thumbnail }, loginData.data.token, successCallback, errorCallback);
    };

    const addImage = (file, successCallback, errorCallback) => {
        addImageAction(file, loginData.data.token, successCallback, errorCallback);
    };

    const imageHandler = () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = () => {
            const file = input.files[0];
            addImage(file, (response) => setThumbnail(response.data[0].path), () => { });
        };
    };

    return (
        <PageContainer>
            <FormContainer>
                <Input
                    placeholder="Add Title"
                    margin="0 0 20px"
                    onChange={(e) => setTitle(e.target.value)}
                />

                <Select
                    onChange={(data) => setCategory(data.value)}
                    styles={{ container: () => ({ margin: "0 0 20px" }) }}
                    placeholder="Select Category"
                    options={categories && categories.data ? map(categories.data, (category) => ({ "value": category["value"], "label": category["name"] })) : []}
                />

                <CreatableSelect
                    isMulti
                    styles={{ container: () => ({ margin: "0 0 20px" }) }}
                    onChange={(list) => setTags(map(list, data => data.value))}
                    placeholder="Add Tags"
                    options={[]}
                />

                <ImageButton imageProps={{ src: uploadIcon, round: false, height: "15px", width: "auto" }} size="large" text="Add a thumbnail" onClick={imageHandler} />

                <Editor
                    content={body}
                    setContent={setBody}
                    addImage={addImage}
                    addImageData={addImageData}
                    setDescription={setDescription}
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
