import React from 'react';
import _ from 'lodash';

import {
    PageLeftContainer,
    PageRightContainer,
    List,
    ListItem,
    PostCount,
} from 'pages/commonStyledComponents';

import {
    PageContainer,
    SectionContainer,
    FeaturedPageLeftContainer,
    FeaturedPageRightContainer,
    EditorsPickContainer,
    EditorsArticleLeftContainer,
    EditorsArticleRightContainer,
} from './homePageStyledComponents';

import PostCard from 'features/postCard/PostCard';
import Heading from 'features/Heading';
import Divider from 'features/Divider';

import post1 from 'shared/assets/images/thumb/thumb-800x495.jpg';
import post2 from 'shared/assets/images/thumb/thumb-512x512.jpg';
import post3 from 'shared/assets/images/thumb/thumb-512x512-2.jpg';
import post4 from 'shared/assets/images/thumb/thumb-512x512-3.jpg';

import author from 'shared/assets/images/author-avata-1.jpg';

const articles = [{
    "title": "Home Internet Is Becoming a Luxury for the Wealthy",
    "description": "And black on meretriciously regardless well fearless irksomely as about hideous wistful bat less oh much and occasional useful rat darn jeepers far.",
    "thumbnail": post1,
    "category": "CULTURE",
    "date_posted": "May 21",
    "author": {
        "name": "Darcy Reeder",
        "avatar": author
    }
}, {
    "title": "Why Lack of Sleep is So Bad For You",
    "description": "A lack of sleep is linked to an incredibly wide range of ailments, from heart disease and Type 2 diabetes to obesity, depression, poor cognitive function, and even Alzheimer's disease..",
    "thumbnail": post2,
    "category": "BASED ON YOUR READING HISTORY",
    "date_posted": "Jun 17",
    "author": {
        "name": "Darcy Reeder",
        "avatar": author
    }
}, {
    "title": "Regulators Just Put a Target on Apple's Back",
    "description": "Excellence is the most important habit you can curate in life because it requires doing things you don't want to do and getting uncomfortable on a daily basis.",
    "thumbnail": post3,
    "category": "FINANCE",
    "date_posted": "Jun 17",
    "author": {
        "name": "Darcy Reeder",
        "avatar": author
    }
}, {
    "title": "Apple Is Designing for a Post-Facebook World",
    "description": "And black on meretriciously regardless well fearless irksomely as about hideous wistful bat less oh much and occasional useful rat darn jeepers far.",
    "thumbnail": post4,
    "category": "Technology",
    "date_posted": "Jun 17",
    "author": {
        "name": "Darcy Reeder",
        "avatar": author
    }
}, {
    "title": "Home Internet Is Becoming a Luxury for the Wealthy",
    "description": "And black on meretriciously regardless well fearless irksomely as about hideous wistful bat less oh much and occasional useful rat darn jeepers far.",
    "thumbnail": post1,
    "category": "CULTURE",
    "date_posted": "May 21",
    "author": {
        "name": "Darcy Reeder",
        "avatar": author
    }
}, {
    "title": "Why Lack of Sleep is So Bad For You",
    "description": "A lack of sleep is linked to an incredibly wide range of ailments, from heart disease and Type 2 diabetes to obesity, depression, poor cognitive function, and even Alzheimer's disease..",
    "thumbnail": post2,
    "category": "BASED ON YOUR READING HISTORY",
    "date_posted": "Jun 17",
    "author": {
        "name": "Darcy Reeder",
        "avatar": author
    }
}, {
    "title": "Regulators Just Put a Target on Apple's Back",
    "description": "Excellence is the most important habit you can curate in life because it requires doing things you don't want to do and getting uncomfortable on a daily basis.",
    "thumbnail": post3,
    "category": "FINANCE",
    "date_posted": "Jun 17",
    "author": {
        "name": "Darcy Reeder",
        "avatar": author
    }
}, {
    "title": "Apple Is Designing for a Post-Facebook World",
    "description": "And black on meretriciously regardless well fearless irksomely as about hideous wistful bat less oh much and occasional useful rat darn jeepers far.",
    "thumbnail": post4,
    "category": "Technology",
    "date_posted": "Jun 17",
    "author": {
        "name": "Darcy Reeder",
        "avatar": author
    }
}];

const editorPicks = [{
    "title": "Home Internet Is Becoming a Luxury for the Wealthy",
    "description": "And black on meretriciously regardless well fearless irksomely as about hideous wistful bat less oh much and occasional useful rat darn jeepers far.",
    "thumbnail": post1,
    "category": "CULTURE",
    "date_posted": "May 21",
    "author": {
        "name": "Darcy Reeder",
        "avatar": author
    }
}, {
    "title": "Why Lack of Sleep is So Bad For You",
    "description": "A lack of sleep is linked to an incredibly wide range of ailments, from heart disease and Type 2 diabetes to obesity, depression, poor cognitive function, and even Alzheimer's disease..",
    "thumbnail": post2,
    "category": "BASED ON YOUR READING HISTORY",
    "date_posted": "Jun 17",
    "author": {
        "name": "Darcy Reeder",
        "avatar": author
    }
}, {
    "title": "Regulators Just Put a Target on Apple's Back",
    "description": "Excellence is the most important habit you can curate in life because it requires doing things you don't want to do and getting uncomfortable on a daily basis.",
    "thumbnail": post3,
    "category": "FINANCE",
    "date_posted": "Jun 17",
    "author": {
        "name": "Darcy Reeder",
        "avatar": author
    }
}, {
    "title": "Apple Is Designing for a Post-Facebook World",
    "description": "And black on meretriciously regardless well fearless irksomely as about hideous wistful bat less oh much and occasional useful rat darn jeepers far.",
    "thumbnail": post4,
    "category": "Technology",
    "date_posted": "Jun 17",
    "author": {
        "name": "Darcy Reeder",
        "avatar": author
    }
}];

const Home = () => {
    const renderPosts = (articles) => {
        return (
            <React.Fragment>
                <Heading text="Most Recent" />
                {_.map(articles, (article, index) => <PostCard key={index} {...article} type="detailed" />)}
            </React.Fragment>
        );
    };

    const renderPopularPosts = (articles) => {
        const mapPostCount = (count) => {
            return count < 9 ? `0${count + 1}` : count;
        };

        return _.map(articles, (article, index) => {
            return (
                <ListItem key={index}>
                    <PostCount>{mapPostCount(index)}</PostCount>
                    <PostCard {...article} type="less_detailed" />
                </ListItem>
            );
        });
    };

    const renderEditorsPosts = () => {
        const first = editorPicks[0];
        const rest = editorPicks.slice(1, editorPicks.length);
        return (
            <React.Fragment>
                <Heading text="Editors Pick" />
                <EditorsPickContainer>
                    <EditorsArticleLeftContainer>
                        <PostCard {...first} type="featured_main" />
                        {/* <a className="btn btn-green d-inline-block mb-4 mb-md-0" href="archive.html">All Featured</a> */}
                    </EditorsArticleLeftContainer>
                    <EditorsArticleRightContainer>
                        {_.map(rest, (article, index) => <PostCard key={index} {...article} type="featured_sub" />)}
                    </EditorsArticleRightContainer>
                </EditorsPickContainer>
            </React.Fragment>
        );
    };

    const renderTrendingPosts = () => {
        const mapPostCount = (count) => {
            return count < 9 ? `0${count + 1}` : count;
        };

        return _.map(editorPicks, (article, index) => {
            return (
                <ListItem key={index}>
                    <PostCount>{mapPostCount(index)}</PostCount>
                    <PostCard {...article} type="less_detailed" />
                </ListItem>
            );
        });
    };

    return (
        <PageContainer>
            <SectionContainer>
                <FeaturedPageLeftContainer>
                    {renderEditorsPosts()}
                </FeaturedPageLeftContainer>
                <FeaturedPageRightContainer>
                    <Heading text={`Trending`} />
                    <List>
                        {renderTrendingPosts()}
                    </List>
                    {/* <a className="link-green" href="archive.html">See all trending<svg className="svgIcon-use" width="19" height="19"><path d="M7.6 5.138L12.03 9.5 7.6 13.862l-.554-.554L10.854 9.5 7.046 5.692" fillRule="evenodd"></path></svg></a> */}
                </FeaturedPageRightContainer>
            </SectionContainer>
            <Divider />
            <SectionContainer>
                <PageLeftContainer>
                    {renderPosts(articles)}
                </PageLeftContainer>
                <PageRightContainer>
                    <Heading text={`Popular`} />
                    <List>
                        {renderPopularPosts(articles)}
                    </List>
                </PageRightContainer>
            </SectionContainer>
        </PageContainer>
    );
};

export default Home;
