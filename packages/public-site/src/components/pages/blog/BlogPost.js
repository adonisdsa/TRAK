import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

export default function BlogPost(props) {
    const { frontmatter, fields } = props;

    const p = frontmatter;

    const heroImage = p.heroImage && p.heroImage.childImageSharp.fluid;

    return (
        <div>
            <Link to={p.path}>
                <Img fluid={heroImage} alt={p.title} />

                <div className="blogtextWrapper">
                    <h3>{p.title}</h3>

                    <p>{p.description}</p>

                    <div className="dateTime">
                        {new Date(p.date).toLocaleDateString('en-gb', {
                            // year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                        })}{' '}
                        • {fields.readingTime.text}
                    </div>
                </div>
            </Link>
        </div>
    );
}
