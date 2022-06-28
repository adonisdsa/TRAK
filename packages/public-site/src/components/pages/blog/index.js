import './BlogPost.scss';
import React from 'react';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

import BlogPost from './BlogPost';

export default function BlogHome(props) {
    const { posts } = props;

    return (
        <div className="Blog">
            <Container className="paddingY5" autoMinHeight={false}>
                <Section>
                    <h1>Automotive Blog</h1>
                    <div className="paddingY4">
                        <div className="blog-box-wrapper">
                            {posts.map(node => (
                                <div key={node.frontmatter.path} className="blogBox">
                                    <BlogPost frontmatter={node.frontmatter} fields={node.fields} />
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>
            </Container>
        </div>
    );
}
