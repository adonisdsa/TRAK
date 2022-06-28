const path = require(`path`);

exports.createPages = async props => {
    await setupRedirects(props);
    await generateMarkdownPages(props);
};

const generateMarkdownPages = async props => {
    const { actions, graphql, reporter } = props;
    const { createPage } = actions;
    const markdownTemplate = path.resolve(`src/templates/blogPost.js`);
    const result = await graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        html
                        excerpt(pruneLength: 200)
                        frontmatter {
                            path
                            title
                            date
                        }
                        fields {
                            readingTime {
                                text
                            }
                        }
                    }
                }
            }
        }
    `);
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return;
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path,
            component: markdownTemplate,
            context: {},
        });
    });
};

const setupRedirects = async props => {
    const { actions } = props;

    const autoRedirectToHomepage = [
        '/solutions',
        '/solutions1',
        '/services',
        '/clients',
        '/our-clients',
        '/learning-management-system',
        '/learning-management-system/',
        '/blueflag',
        '/blueflag/',
        '/insight',
        '/insight/',
        '/chekt',
        '/chekt/',
        '/jobs',
        '/home1',
    ];

    // Homepage permanent
    autoRedirectToHomepage.forEach(path => actions.createRedirect({ fromPath: path, toPath: '/', isPermanent: true }));

    const autoRedirectToHomepageTemporary302 = [
        '/future-market-activity-database',
        '/future-market-activity-database/',
        '/automotive-sales-forecast',
        '/automotive-sales-forecast/',
        '/retail-offer-planner',
        '/retail-offer-planner/',
        '/products/',
    ];

    // Homepage temporary 302
    autoRedirectToHomepageTemporary302.forEach(path => actions.createRedirect({ fromPath: path, toPath: '/' }));

    // Nevdis
    const autoRedirectToNevdis = ['/nevdis/faq', '/nevdis-data', '/nevdis-introduction', '/nevdis-pricing'];

    autoRedirectToNevdis.forEach(path => actions.createRedirect({ fromPath: path, toPath: '/nevdis', isPermanent: true }));

    // Other
    actions.createRedirect({ fromPath: '/privacy/policy', toPath: '/blueflag-privacypolicy', isPermanent: true });
    actions.createRedirect({ fromPath: '/nevdis-terms', toPath: '/blueflag-nevdis-generalterms', isPermanent: true });
    actions.createRedirect({ fromPath: '/vin-or-chassis-number', toPath: '/blog/vin-and-chassis-numbers/', isPermanent: true });
    actions.createRedirect({ fromPath: '/nevdis/vin-or-chassis-number/', toPath: '/blog/vin-and-chassis-numbers/', isPermanent: true });
    actions.createRedirect({ fromPath: '/our-packages', toPath: '/pricing/', isPermanent: true });
    actions.createRedirect({ fromPath: '/nevdis/try-nevdis-rego-to-vin/', toPath: '/contact-us/', isPermanent: true });
    actions.createRedirect({ fromPath: '/about2', toPath: '/about-us/', isPermanent: true });
    actions.createRedirect({ fromPath: '/nevdis/api-documentation/', toPath: '/docs/api/products/nevdis/vehicle_details/', isPermanent: true, redirectInBrowser: true });

    const autoRedirectToBlog = [
        '/blog/parc-what-it-good',
        '/blog/parc-what-it-good/',
        '/blog/what-big-data-and-how-can-it-help-enterprise-businesses',
        '/blog/what-big-data-and-how-can-it-help-enterprise-businesses/',
    ];

    // Blog permanent
    autoRedirectToBlog.forEach(path => actions.createRedirect({ fromPath: path, toPath: '/blog/', isPermanent: true }));
};
