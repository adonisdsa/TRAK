type JsonLdProps = {
    url: string;
    datePublished: string;
    dateModified: string;
    description: string;
    title: string;
    socialPostImage?: {
        src: string;
        presentationHeight: number;
        presentationWidth: number;
    };
};

export const createJsonLd = (props: JsonLdProps) => {
    return {
        '@context': 'https://schema.org',
        '@graph': [getOrganization(props), getWebSite(props), getImageObject(props), getWebPage(props), getBreadcrumbList(props)].filter(gg => !!gg), // filter out any nulls or undefined
    };
};

const getOrganization = (props: JsonLdProps) => {
    const { url } = props;

    return {
        '@type': 'Organization',
        '@id': `${url}#/schema/organization/blueflag`,
        name: 'Blue Flag',
        url: url,
        sameAs: ['https://twitter.com/blueflag/', 'https://www.linkedin.com/company/blueflag/', 'https://github.com/blueflag/'],
        logo: {
            '@type': 'ImageObject',
            '@id': `${url}#/schema/image/blueflag`,
            url: 'https://blueflag.com.au/assets/logos/blueflag-logo-full-1500.png',
            width: 1268,
            height: 281,
            caption: 'Blue Flag logo',
        },
        // "image": {
        //     "@id": `${url}#/schema/image/blueflag`,
        //     "inLanguage": "en-US",
        //     "url": "https://cdn-apibacklinko.pressidium.com/wp-content/uploads/2020/08/how-people-use-google-search.png",
        //     "width": 1600,
        //     "height": 837,
        //     "caption": "How people use Google search"
        // }
    };
};

const getWebSite = (props: JsonLdProps) => {
    const { url } = props;

    return {
        '@type': 'WebSite',
        '@id': `${url}#/schema/website/blueflag`,
        url: `${url}`,
        name: 'Blue Flag',
        // "potentialAction": {
        //     "@type": "SearchAction",
        //     "target": "${url}?s={search_term_string}",
        //     "query-input": "required name=search_term_string"
        // },
        publisher: {
            '@id': `${url}#/schema/organization/blueflag`,
        },
    };
};

const getImageObject = (props: JsonLdProps) => {
    const { url, title, socialPostImage } = props;

    if (!socialPostImage) {
        return null;
    }

    return {
        '@type': 'ImageObject',
        '@id': `${url}#primaryimage`,
        inLanguage: 'en-US',
        url: `https://blueflag.com.au${socialPostImage.src}`,
        width: socialPostImage.presentationWidth,
        height: socialPostImage.presentationHeight,
        caption: title,
    };
};

const getWebPage = (props: JsonLdProps) => {
    const { url, datePublished, dateModified, description, title, socialPostImage } = props;

    let wp = {
        '@type': 'WebPage',
        '@id': `${url}`,
        url: `${url}`,
        inLanguage: 'en-US',
        name: title,
        datePublished: datePublished,
        dateModified: dateModified,
        description: description,
        isPartOf: {
            '@id': `${url}#/schema/website/blueflag`,
        },
        about: {
            '@id': `${url}#/schema/organization/blueflag`,
        },
        primaryImageOfPage: {
            '@id': `${url}#primaryimage`,
        },
    };

    if (!socialPostImage) {
        delete wp.primaryImageOfPage;
    }

    return wp;
};

const getBreadcrumbList = (props: JsonLdProps) => {
    const { url } = props;

    const isBlogPost = url.indexOf('/blog/') !== -1;

    const itemListElement = [
        {
            '@type': 'ListItem',
            position: 1,
            item: {
                '@type': 'WebPage',
                '@id': 'https://blueflag.com.au/',
                url: 'https://blueflag.com.au/',
                name: 'Blue Flag',
            },
        },
    ];

    if (isBlogPost) {
        itemListElement.push({
            '@type': 'ListItem',
            position: 2,
            item: {
                '@type': 'WebPage',
                '@id': 'https://blueflag.com.au/blog/',
                url: 'https://blueflag.com.au/blog/',
                name: 'blog',
            },
        });
    }

    itemListElement.push({
        '@type': 'ListItem',
        position: 3,
        item: {
            '@type': 'WebPage',
            '@id': url,
            url: url,
            name: url.split('?')[0].split('/').reverse()[1],
        },
    });

    return {
        '@type': 'BreadcrumbList',
        '@id': `${url}#/schema/breadcrumb/blueflag`,
        itemListElement,
    };
};
