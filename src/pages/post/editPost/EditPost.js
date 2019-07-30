import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import map from 'lodash/map';
import find from 'lodash/find';
import CreatableSelect from 'react-select/creatable';

import Editor from 'features/editor/Editor';
import routePaths from 'shared/routePaths';

import {
    PageContainer,
    FormContainer,
    SelectContainer,
    FormInput,
    ThumbnailButton,
    FormButton
} from '../commonStyledComponents';

const propTypes = {
    loginData: PropTypes.object.isRequired,
    categories: PropTypes.object.isRequired,
    addImageData: PropTypes.object.isRequired,
    addImage: PropTypes.func.isRequired,
    updatePost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
};

const EditPost = ({ loginData, categories, addImageData, addImage, updatePost, post, history, match }) => {
    const [body, setBody] = useState(post.data.body);
    const [description, setDescription] = useState(post.data.description);
    const [tags, setTags] = useState(post.data.tags);
    const [category, setCategory] = useState(post.data.category);
    const [title, setTitle] = useState(post.data.title);
    const [images, setImages] = useState([]);
    const [thumbnail, setThumbnail] = useState(post.data.thumbnail);

    const categoryOptions = map(categories.data, (category) => ({ "value": category["value"], "label": category["name"] }));

    const successCallback = () => {
        history.push(routePaths.HOME);
    };

    const errorCallback = () => { };

    const onSubmit = () => {
        const operations = [];
        const trimmedDescription = description.substring(0, 175) + "...";

        if (trimmedDescription !== post.data.description) {
            operations.push({ "op": "set", "path": "description", "value": trimmedDescription });
        }
        if (title !== post.data.title) {
            operations.push({ "op": "set", "path": "title", "value": title });
        }
        if (tags !== post.data.tags) {
            operations.push({ "op": "set", "path": "tags", "value": tags });
        }
        if (category !== post.data.category) {
            operations.push({ "op": "set", "path": "category", "value": category });
        }
        if (body !== post.data.body) {
            operations.push({ "op": "set", "path": "body", "value": body });
        }
        if (thumbnail !== post.data.thumbnail) {
            operations.push({ "op": "set", "path": "thumbnail", "value": thumbnail });
        }
        if (images.length > 0) {
            operations.push({ "op": "add", "path": "images", "value": images });
        }
        updatePost(match.params.id, { "operations": operations }, loginData.data.token, successCallback, errorCallback);
    };

    const addPostImage = (file, successCallback, errorCallback) => {
        addImage(file, loginData.data.token, successCallback, errorCallback);
    };

    const imageHandler = () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = () => {
            const file = input.files[0];
            addPostImage(file, (response) => setThumbnail(response.data[0].path), () => { });
        };
    };

    return (
        <PageContainer>
            <FormContainer>
                <FormInput
                    placeholder="Add Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <SelectContainer>
                    <Select
                        onChange={data => setCategory(data.value)}
                        value={find(categoryOptions, option => option.value === category)}
                        placeholder="Select Category"
                        options={categoryOptions}
                    />
                </SelectContainer>

                <SelectContainer>
                    <CreatableSelect
                        isMulti
                        value={map(tags, (tag) => ({ "value": tag, "label": tag }))}
                        onChange={(list) => setTags(map(list, data => data.value))}
                        placeholder="Add Tags"
                        options={[]}
                    />
                </SelectContainer>


                <ThumbnailButton onClick={imageHandler} />

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

                <FormButton onClick={onSubmit}>
                    Update
                </FormButton>
            </FormContainer>
        </PageContainer>
    );
};

EditPost.propTypes = propTypes;

export default EditPost;
