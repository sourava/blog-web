import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Spin from 'antd/lib/spin';

import PostCard from 'features/postCard/PostCard';
import { Input } from 'shared/components/html';
import { PageContainer, PageHeader, PageContent } from './searchStyledComponents';

const propTypes = {
    searchPost: PropTypes.func.isRequired,
    searchData: PropTypes.object.isRequired,
};

const SearchPage = ({ searchPost, searchData }) => {
    const [query, setQuery] = useState("");
    const [visible, setVisible] = useState(false);

    const renderPosts = () => _.map(searchData.data, (article, index) => <PostCard key={index} {...article} type="detailed" />);

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            searchPost(query);
            setVisible(true);
        }
    };

    const renderPageContent = () => {
        if (searchData.isPending) {
            return <Spin />;
        } else if (searchData.isFulfilled) {
            return (
                <PageContent>
                    <div className="content-widget">
                        <div className="container">
                            <div className="row">
                                {renderPosts()}
                            </div>
                        </div>
                    </div>
                </PageContent>
            );
        } else {
            return null;
        }
    };

    return (
        <PageContainer>
            <PageHeader>
                <Input borderType="bottom" fontSize="40px" placeholder="Search" height="80px" onKeyDown={(e) => onKeyDown(e)} onChange={(e) => setQuery(e.target.value)} />
            </PageHeader>
            <PageContent>
                {visible ? renderPageContent() : null}
            </PageContent>
        </PageContainer>
    );
};

SearchPage.propTypes = propTypes;

export default SearchPage;
