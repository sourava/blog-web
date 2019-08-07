import React, { useState } from 'react';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

import Editor from 'features/editor/Editor';
import { Spinner } from 'shared/components/html';
import { SUB_CATEGORIES } from 'shared/appConstants';

import {
    PageContainer,
    FormContainer,
    SelectContainer,
    FormInput,
    ThumbnailContainer,
    Thumbnail,
    ThumbnailButton,
    PostActionsContainer,
    DraftButton,
    PublishButton,
} from '../commonStyledComponents';

const propTypes = {
    role: PropTypes.string.isRequired,
    categories: PropTypes.object.isRequired,
    addImageData: PropTypes.object.isRequired,
    addImage: PropTypes.func.isRequired,
    addPost: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
};

const AddPost = ({ categories, addImageData, addImage, addPost, history, role }) => {
    const [body, setBody] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");
    const [category, setCategory] = useState("");
    const [subCategory, setSubCategory] = useState({ "value": "article", "label": "Article" });
    const [title, setTitle] = useState("");
    const [images, setImages] = useState([]);
    const [thumbnail, setThumbnail] = useState("");

    const onSubmit = (status) => {
        const successCallback = () => {
            history.push("home");
        };
        const data = {
            "title": title,
            "category": category.value,
            "sub_category": subCategory.value,
            "tags": map(tags, data => data.value),
            "body": body,
            "images": images,
            "description": description ? description.substring(0, 175) + "..." : "...",
            "thumbnail": thumbnail,
            "status": status,
        };
        addPost(data, successCallback);
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
            if (addImageData.isPending || addImageData.isFulfilled || addImageData.isRejected) {
                return (
                    <ThumbnailContainer>
                        {addImageData.isPending ? <Spinner /> : null}
                        {addImageData.isFulfilled ? <Thumbnail src={addImageData.data[0].path} width="100" height="100" /> : null}
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
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <SelectContainer>
                    <Select
                        onChange={(data) => setCategory(data)}
                        placeholder="Select Category"
                        options={categories && categories.data ? map(categories.data, (category) => ({ "value": category["value"], "label": category["name"] })) : []}
                        value={category}
                    />
                </SelectContainer>
                {renderSubCategory()}
                <SelectContainer>
                    <CreatableSelect
                        isMulti
                        onChange={(list) => setTags(list)}
                        placeholder="Add Tags"
                        options={[]}
                        value={tags}
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
                <PostActionsContainer>
                    <DraftButton onClick={() => onSubmit("draft")}>Save As Draft</DraftButton>
                    <PublishButton onClick={() => onSubmit("published")}>Publish</PublishButton>
                </PostActionsContainer>
            </FormContainer>
        </PageContainer>
    );
};

AddPost.propTypes = propTypes;

export default AddPost;
