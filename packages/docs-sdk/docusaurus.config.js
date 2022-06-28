const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const { red } = require('kleur');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'API & SDKs',
  tagline: 'A suite of APIs that allow developers to add vehicle search and vehicle data to their applications or services.',
  url: 'https://blueflag.com.au',
  baseUrl: '/docs/api/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Blue Flag',
  projectName: 'User Guide Docs',
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: '\u{263E}',

        // CSS to apply to dark icon,
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: '2px',
          color: 'gray',
        },

        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        lightIcon: '\u{2600}',

        lightIconStyle: {
          marginLeft: '1px',
          color: 'gray',
        },
      },
    },
    navbar: {
      logo: {
        alt: 'Blue Flag Logo',
        src: '/img/blueflag-logo.svg',
      },
      items: [
        {to: 'https://blueflag.com.au/docs', label: 'Docs', position: 'right', className:'button button--link'},
        {to: '/' , label: 'API & SDKs', position: 'right', className:'button button--link'},
        {to: 'https://app.blueflag.com.au/get-started', label: 'Create Account', position: 'right', className:'button button--link'},
        {to: 'https://app.blueflag.com.au/', label: 'Sign In', position: 'right', className:'button button--outline button--primary'},
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: false,
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
