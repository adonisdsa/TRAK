
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','7fd'),
  exact: true,
},
{
  path: '/docs/',
  component: ComponentCreator('/docs/','325'),
  
  routes: [
{
  path: '/docs/getting-started/',
  component: ComponentCreator('/docs/getting-started/','aa3'),
  exact: true,
},
{
  path: '/docs/getting-started/depositing-funds/',
  component: ComponentCreator('/docs/getting-started/depositing-funds/','050'),
  exact: true,
},
{
  path: '/docs/getting-started/generate-live-keys/',
  component: ComponentCreator('/docs/getting-started/generate-live-keys/','4f6'),
  exact: true,
},
{
  path: '/docs/getting-started/generate-sandbox-keys/',
  component: ComponentCreator('/docs/getting-started/generate-sandbox-keys/','f89'),
  exact: true,
},
{
  path: '/docs/getting-started/make-requests/using-curl/',
  component: ComponentCreator('/docs/getting-started/make-requests/using-curl/','dd3'),
  exact: true,
},
{
  path: '/docs/getting-started/make-requests/using-postman/',
  component: ComponentCreator('/docs/getting-started/make-requests/using-postman/','e6c'),
  exact: true,
},
{
  path: '/docs/getting-started/sign-up-to-blueflag-api/',
  component: ComponentCreator('/docs/getting-started/sign-up-to-blueflag-api/','9fc'),
  exact: true,
},
{
  path: '/docs/getting-started/submitting-an-application/',
  component: ComponentCreator('/docs/getting-started/submitting-an-application/','c53'),
  exact: true,
},
{
  path: '/docs/getting-started/test-vehicles/',
  component: ComponentCreator('/docs/getting-started/test-vehicles/','4d1'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
