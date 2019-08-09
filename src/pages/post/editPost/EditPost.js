import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import map from 'lodash/map';
import find from 'lodash/find';
import CreatableSelect from 'react-select/creatable';

import Editor from 'features/editor/Editor';
import routePaths from 'shared/routePaths';
import { getSubCategories, ALL_CATEGORIES } from 'shared/appConstants';
import { Spinner } from 'shared/components/html';

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
    addImageData: PropTypes.object.isRequired,
    addImage: PropTypes.func.isRequired,
    updatePost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    role: PropTypes.string.isRequired,
};

const EditPost = ({ addImageData, addImage, updatePost, post, history, role }) => {
    const categoryOptions = map(ALL_CATEGORIES, (category) => ({ "value": category["value"], "label": category["name"] }));
    const subCategories = getSubCategories(post.data.category);
    const [body, setBody] = useState(post.data.body);
    const [description, setDescription] = useState(post.data.description);
    const [tags, setTags] = useState(post.data.tags);
    const [category, setCategory] = useState(find(categoryOptions, cat => cat.value === post.data.category));
    const [subCategory, setSubCategory] = useState(find(subCategories, sub => sub.value === post.data["sub_category"]));
    const [title, setTitle] = useState(post.data.title);
    const [images, setImages] = useState([]);
    const [thumbnail, setThumbnail] = useState(post.data.thumbnail);

    

    const onSubmit = (status) => {
        const operations = [];
        const trimmedDescription = description.substring(0, 175) + "...";
        const successCallback = () => {
            history.push(routePaths.HOME);
        };

        if (trimmedDescription !== post.data.description) {
            operations.push({ "op": "set", "path": "/post/description", "value": trimmedDescription });
        }
        if (title !== post.data.title) {
            operations.push({ "op": "set", "path": "/post/title", "value": title });
        }
        if (tags !== post.data.tags) {
            operations.push({ "op": "set", "path": "/post/tags", "value": tags });
        }
        if (category !== post.data.category) {
            operations.push({ "op": "set", "path": "/post/category", "value": category.value });
        }
        if (subCategory !== post.data["sub_category"]) {
            operations.push({ "op": "set", "path": "/post/subCategory", "value": subCategory.value });
        }
        if (body !== post.data.body) {
            operations.push({ "op": "set", "path": "/post/body", "value": body });
        }
        if (thumbnail !== post.data.thumbnail) {
            operations.push({ "op": "set", "path": "/post/thumbnail", "value": thumbnail });
        }
        if (images.length > 0) {
            operations.push({ "op": "add", "path": "/post/images", "value": images });
        }
        if (post.data.status !== status && (post.data.status === "draft" || post.data.status === "published")) {
            operations.push({ "op": "set", "path": "/post/status", "value": status });
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
    };

    const renderSubCategory = () => {
        if (role === "admin" && category != "") {
            const subCategories = getSubCategories(category["value"]);
            return (
                <SelectContainer>
                    <Select
                        onChange={(data) => setSubCategory(data)}
                        placeholder="Select Sub Category"
                        options={subCategories}
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
                        onChange={data => setCategory(data)}
                        value={category}
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
                <PostActionsContainer>
                    {post.data.status === "draft" || post.data.status === "published" ? <DraftButton onClick={() => onSubmit("draft")}>Save As Draft</DraftButton> : null}
                    <PublishButton onClick={() => onSubmit("published")}>Publish</PublishButton>
                </PostActionsContainer>
            </FormContainer>
        </PageContainer>
    );
};

EditPost.propTypes = propTypes;

export default EditPost;
