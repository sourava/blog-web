import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import map from 'lodash/map';
import find from 'lodash/find';
import CreatableSelect from 'react-select/creatable';

import Editor from 'features/editor/Editor';
import routePaths from 'shared/routePaths';
import { SUB_CATEGORIES } from 'shared/appConstants';
import { Spinner } from 'shared/components/html';

import {
    PageContainer,
    FormContainer,
    SelectContainer,
    FormInput,
    ThumbnailContainer,
    Thumbnail,
    ThumbnailButton,
    FormButton
} from '../commonStyledComponents';

const propTypes = {
    categories: PropTypes.object.isRequired,
    addImageData: PropTypes.object.isRequired,
    addImage: PropTypes.func.isRequired,
    updatePost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    role: PropTypes.string.isRequired,
};

const EditPost = ({ categories, addImageData, addImage, updatePost, post, history, role }) => {
    const [body, setBody] = useState(post.data.body);
    const [description, setDescription] = useState(post.data.description);
    const [tags, setTags] = useState(post.data.tags);
    const [category, setCategory] = useState(post.data.category);
    const [subCategory, setSubCategory] = useState(find(SUB_CATEGORIES, sub => sub.value === post.data["sub_category"]));
    const [title, setTitle] = useState(post.data.title);
    const [images, setImages] = useState([]);
    const [thumbnail, setThumbnail] = useState(post.data.thumbnail);

    const categoryOptions = map(categories.data, (category) => ({ "value": category["value"], "label": category["name"] }));

    const onSubmit = () => {
        const operations = [];
        const trimmedDescription = description.substring(0, 175) + "...";
        const successCallback = () => {
            history.push(routePaths.HOME);
        };

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
        updatePost({ "operations": operations }, successCallback);
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

        return (
            <React.Fragment>
                {renderThumbnailDetails()}
                <ThumbnailButton onClick={imageHandler} disabled={addImageData.isPending} />
            </React.Fragment>
        );
    };

    const renderSubCategory = () => {
        if (role === "admin") {
            return (
                <SelectContainer>
                    <Select
                        onChange={(data) => setSubCategory(data)}
                        placeholder="Select Sub Category"
                        options={SUB_CATEGORIES}
                        value={subCategory}
                    />
                </SelectContainer>
            );
        }
    };

    const renderThumbnail = () => {
        const renderThumbnailDetails = () => {
            if (addImageData.isPending || addImageData.isFulfilled || addImageData.isRejected || thumbnail) {
                return (
                    <ThumbnailContainer>
                        {addImageData.isPending ? <Spinner /> : null}
                        {addImageData.isFulfilled ? <Thumbnail src={addImageData.data[0].path} width="100" height="100" /> : null}
                        {thumbnail && !addImageData.isPending && !addImageData.isFulfilled && !addImageData.isRejected ? <Thumbnail src={thumbnail} width="100" height="100" /> : null}
                        {addImageData.isRejected ? <span>Error</span> : null}
                    </ThumbnailContainer>
                );
            }
        };

        return (
            <React.Fragment>
                {renderThumbnailDetails()}
                <ThumbnailButton onClick={imageHandler} disabled={addImageData.isPending} />
            </React.Fragment>
        );
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
                {renderSubCategory()}
                <SelectContainer>
                    <CreatableSelect
                        isMulti
                        value={map(tags, (tag) => ({ "value": tag, "label": tag }))}
                        onChange={(list) => setTags(map(list, data => data.value))}
                        placeholder="Add Tags"
                        options={[]}
                    />
                </SelectContainer>
                {renderThumbnail()}
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
