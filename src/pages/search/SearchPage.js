import React from 'react';
import _ from 'lodash';

import post1 from 'shared/assets/images/thumb/thumb-800x495.jpg';
import post2 from 'shared/assets/images/thumb/thumb-512x512.jpg';
import post3 from 'shared/assets/images/thumb/thumb-512x512-2.jpg';
import post4 from 'shared/assets/images/thumb/thumb-512x512-3.jpg';

import author from 'shared/assets/images/author-avata-1.jpg';
import PostCard from 'features/postCard/PostCard';

import { Input } from 'shared/components/html';

import { PageContainer, PageHeader, PageContent } from './searchStyledComponents';

const SearchPage = () => {
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

    const renderPosts = () => _.map(articles, (article, index) => <PostCard key={index} {...article} type="detailed" />);

    return (
        <PageContainer>
            <PageHeader>
                <Input borderType="bottom" fontSize="40px" placeholder="Search" height="80px" />
            </PageHeader>
            <PageContent>
                <div className="content-widget">
                    <div className="container">
                        <div className="row">
                            {renderPosts()}
                        </div>
                    </div>
                </div>
            </PageContent>
        </PageContainer>
    );
};

export default SearchPage;
