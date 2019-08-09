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
    bulkUpdatePostStatus: PropTypes.func.isRequired,
};

const PendingPostsTable = ({ posts, getPosts, bulkUpdatePostStatus }) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [currentPosts, setCurrentPosts] = useState([]);
    const [reload, setReload] = useState(false);
    const onStatusSubmit = (status) => {
        const successCallback = () => {
            setReload(true);
        };
        const postIDs = [];
        forEach(selectedRowKeys, (index) => {
            postIDs.push(currentPosts[index].id);
        });
        bulkUpdatePostStatus({
            "post_ids": postIDs,
            "status": status
        }, successCallback);
    };

    return (
        <React.Fragment>
            <TableActionsContainer>
                <TableActionButton onClick={() => onStatusSubmit("approved")}>Approve</TableActionButton>
                <TableActionButton onClick={() => onStatusSubmit("rejected")}>Reject</TableActionButton>
            </TableActionsContainer>
            <PostsByStatusTable
                setSelectedRowKeys={setSelectedRowKeys}
                setCurrentPosts={setCurrentPosts}
                setReload={setReload}
                reload={reload}
                getPosts={getPosts}
                posts={posts}
                status="published"
            />
        </React.Fragment>
    );
};

PendingPostsTable.propTypes = propTypes;

export default PendingPostsTable;