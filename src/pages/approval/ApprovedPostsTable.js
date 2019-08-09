import React, { useState } from 'react';
import PropTypes from 'prop-types';
import forEach from 'lodash/forEach';

import {
    TableActionsContainer,
    TableActionButton,
} from './approvalPageStyledComponents';
import PostsByStatusTable from './PostsByStatusTable';

const propTypes = {
    posts: PropTypes.object.isRequired,
    getPosts: PropTypes.func.isRequired,
    bulkUpdatePostFeatured: PropTypes.func.isRequired,
};


const ApprovedPostsTable = ({ posts, getPosts, bulkUpdatePostFeatured }) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [currentPosts, setCurrentPosts] = useState([]);
    const [reload, setReload] = useState(false);
    const onFeaturedSubmit = () => {
        const successCallback = () => {
            setReload(true);
        };
        const postIDs = [];
        forEach(selectedRowKeys, (index) => {
            postIDs.push(currentPosts[index].id);
        });
        bulkUpdatePostFeatured({
            "post_ids": postIDs,
        }, successCallback);
    };

    return (
        <React.Fragment>
            <TableActionsContainer>
                <TableActionButton onClick={() => onFeaturedSubmit()}>Featured</TableActionButton>
            </TableActionsContainer>
            <PostsByStatusTable
                setSelectedRowKeys={setSelectedRowKeys}
                setCurrentPosts={setCurrentPosts}
                setReload={setReload}
                reload={reload}
                getPosts={getPosts}
                posts={posts}
                status="approved"
            />
        </React.Fragment>
    );
};

ApprovedPostsTable.propTypes = propTypes;

export default ApprovedPostsTable;