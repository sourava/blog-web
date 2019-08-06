import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import {
    PageContainer,
    SectionContainer,
    PageLeftContainer,
    PageRightContainer,
    PageNavigation,
    PageNavigationLink,
    List,
    ListItem,
    PostCount,
} from 'pages/commonStyledComponents';
import { CATEGORIES } from 'shared/appConstants';
import routePaths from 'shared/routePaths';

import PostCard from 'features/postCard/PostCard';
import Heading from 'features/Heading';

import PostsBySubCategoryContainer from './postsBySubCategory/PostsBySubCategoryContainer';

class Posts extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        getPopularPosts: PropTypes.func.isRequired,
        popularPosts: PropTypes.object.isRequired,
        match: PropTypes.object.isRequired,
    };

    componentWillMount() {
        this.props.getPopularPosts({ "category": this.props.match.params.category });
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.category != prevProps.match.params.category) {
            this.props.getPopularPosts({ "category": this.props.match.params.category });
        }
    }

    renderPopularPosts = () => {
        const { popularPosts } = this.props;
        const mapPostCount = (count) => {
            return count < 9 ? `0${count + 1}` : count;
        };

        return map(popularPosts.data, (article, index) => {
            return (
                <ListItem key={index}>
                    <PostCount>{mapPostCount(index)}</PostCount>
                    <PostCard {...article} type="less_detailed" />
                </ListItem>
            );
        });
    };

    render() {
        return (
            <PageContainer>
                <SectionContainer>
                    <PageLeftContainer>
                        <PageNavigation>
                            <PageNavigationLink
                                to={routePaths.POSTS_BY_SUBCATEGORY(this.props.match.params.category, "article")}
                                text="Article"
                            />
                            <PageNavigationLink
                                to={routePaths.POSTS_BY_SUBCATEGORY(this.props.match.params.category, "news")}
                                text="News"
                            />
                            <PageNavigationLink
                                to={routePaths.POSTS_BY_SUBCATEGORY(this.props.match.params.category, "notifications")}
                                text="Notifications"
                            />
                        </PageNavigation>
                        <Route path="/posts/:category" exact component={PostsBySubCategoryContainer} />
                        <Route path="/posts/:category/:subCategory" component={PostsBySubCategoryContainer} />
                    </PageLeftContainer>
                    <PageRightContainer>
                        <Heading text={`Popular in ${CATEGORIES[this.props.match.params.category]}`} />
                        <List>
                            {this.renderPopularPosts()}
                        </List>
                    </PageRightContainer>
                </SectionContainer>
            </PageContainer>
        );
    }
}

export default Posts;
