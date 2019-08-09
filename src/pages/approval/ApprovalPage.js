import React from 'react';
import PropTypes from 'prop-types';
import Tabs from 'antd/lib/tabs';

import {
    PageContainer,
    TabContainer,
} from 'pages/commonStyledComponents';

import PendingPostsTable from './PendingPostsTable';
import ApprovedPostsTable from './ApprovedPostsTable';
import RejectedPostsTable from './RejectedPostsTable';

const { TabPane } = Tabs;

const propTypes = {
    getPosts: PropTypes.func.isRequired,
    bulkUpdatePostStatus: PropTypes.func.isRequired,
    bulkUpdatePostFeatured: PropTypes.func.isRequired,
    posts: PropTypes.object.isRequired,
};

const ApprovalPage = ({ getPosts, posts, bulkUpdatePostStatus, bulkUpdatePostFeatured }) => {
    return (
        <PageContainer>
            <Tabs defaultActiveKey="1" onChange={() => { }}>
                <TabPane tab="Pending" key="1">
                    <TabContainer>
                        <PendingPostsTable
                            getPosts={getPosts}
                            posts={posts}
                            bulkUpdatePostStatus={bulkUpdatePostStatus}
                        />
                    </TabContainer>
                </TabPane>
                <TabPane tab="Approved" key="2">
                    <TabContainer>
                        <ApprovedPostsTable
                            getPosts={getPosts}
                            posts={posts}
                            bulkUpdatePostFeatured={bulkUpdatePostFeatured}
                        />
                    </TabContainer>
                </TabPane>
                <TabPane tab="Rejected" key="3">
                    <TabContainer>
                        <RejectedPostsTable
                            getPosts={getPosts}
                            posts={posts}
                            bulkUpdatePostStatus={bulkUpdatePostStatus}
                        />
                    </TabContainer>
                </TabPane>
            </Tabs>
        </PageContainer>
    );
};

ApprovalPage.propTypes = propTypes;

export default ApprovalPage;
