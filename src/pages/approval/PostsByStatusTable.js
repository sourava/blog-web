import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import map from 'lodash/map';
import Table from 'antd/lib/table';

import routePaths from 'shared/routePaths';
import starIcon from 'shared/assets/icons/star.png';

import {
    PaginationActionContainer,
    PaginationButton,
} from './approvalPageStyledComponents';

const TitleComponent = (record) => <Link to={routePaths.POST(record.id)}>{record.title}</Link>;
TitleComponent.displayName = 'TitleComponent';

const ThumbnailComponent = (record) => <img src={record.thumbnail} width="50" height="50" />;
ThumbnailComponent.displayName = 'ThumbnailComponent';

const FeaturedComponent = (record) => record.featured ? <img src={starIcon} width="20" height="20" /> : null;
FeaturedComponent.displayName = 'FeaturedComponent';

const AuthorComponent = (record) => <Link to={routePaths.PROFILE(record.author.id)}>{record.author.name}</Link>;
AuthorComponent.displayName = 'AuthorComponent';

const columns = [
    {
        title: 'Title',
        render: TitleComponent,
    },
    {
        title: 'Category',
        dataIndex: 'category',
    },
    {
        title: 'Sub Category',
        dataIndex: 'sub_category',
    },
    {
        title: 'Thumbnail',
        render: ThumbnailComponent
    },
    {
        title: 'Featured',
        render: FeaturedComponent
    },
    {
        title: 'Author',
        render: AuthorComponent
    },
];

class PostsByStatusTable extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            more: false,
            selectedRowKeys: [],
            posts: [],
        };
    }

    static propTypes = {
        getPosts: PropTypes.func.isRequired,
        setSelectedRowKeys: PropTypes.func.isRequired,
        setCurrentPosts: PropTypes.func.isRequired,
        setReload: PropTypes.func.isRequired,
        posts: PropTypes.object.isRequired,
        reload: PropTypes.bool,
        status: PropTypes.string.isRequired,
    };

    componentDidMount() {
        this.loadPosts(this.state.page);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.reload === false && this.props.reload === true) {
            this.loadPosts(this.state.page);
            this.props.setReload(false);
        }
    }

    loadPosts = (page) => {
        const successCallback = (response) => {
            this.setState({
                selectedRowKeys: [],
                more: response.data.length === 10,
                posts: response.data,
            });
            this.props.setSelectedRowKeys([]);
            this.props.setCurrentPosts(response.data);
        };
        this.props.getPosts({ "status": this.props.status, page }, successCallback);
    }

    prev = () => {
        const page = this.state.page;
        if (page > 1) {
            this.setState({
                page: page - 1,
            });
            this.loadPosts(page - 1);
        }
    }

    next = () => {
        if (this.state.more) {
            const page = this.state.page;
            this.setState({
                page: page + 1,
            });
            this.loadPosts(page + 1);
        }
    }

    onSelectChange = selectedRowKeys => {
        this.setState({ selectedRowKeys });
        this.props.setSelectedRowKeys(selectedRowKeys);
    };

    render() {
        const { selectedRowKeys, page, more, posts } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };

        const data = map(posts, (post, index) => ({
            "key": index,
            "id": post.id,
            "title": post.title,
            "category": post.category,
            "sub_category": post.sub_category,
            "thumbnail": post.thumbnail,
            "featured": post.featured,
            "author": post.author
        }));
        return (
            <React.Fragment>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={false} />
                <PaginationActionContainer>
                    <PaginationButton disabled={page === 1} onClick={this.prev}>Prev</PaginationButton>
                    <PaginationButton disabled={!more} onClick={this.next}>Next</PaginationButton>
                </PaginationActionContainer>
            </React.Fragment>
        );
    }
}

export default PostsByStatusTable;
