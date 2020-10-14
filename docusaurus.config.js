module.exports = {
  title: 'Plant An App',
  tagline: 'Low-Code for Software Engineers',
  url: 'https://learn.plantanapp.com',
  baseUrl: '/',
  favicon: 'img/pap-logo.png',
  organizationName: 'plantanapp', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Plant An App',
      logo: {
        alt: 'Plant an App Logo',
        src: 'img/pap-logo.png',
      },
      links: [
        {
          to: 'https://community.plantanapp.com/',
          label: 'Community',
          position: 'left',
        },
        {
          to: 'docs/audience',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
        },
        {
          to: 'https://www.youtube.com/playlist?list=PL67RlTAxc73ESnxFEw0i7AU7yMrmLYAyh',
          label: 'Videos',
          position: 'left',
        },
        {
          href: 'https://github.com/plantanapp/documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Audience',
              to: 'docs/audience',
            },
            {
              label: 'Entities',
              to: 'docs/entities',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Community Portal',
              href: 'https://community.plantanapp.com/',
            },
            {
              label: 'Join the Low-Code Café',
              href: 'https://us02web.zoom.us/webinar/register/9416012971120/WN_Y0OUx5njQFatTEMCk3B0yg',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UC7wl5WsqwdQTx_pGDhrY-3g',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Plant an App Home',
              href: 'https://www.plantanapp.com/',
            },
            {
              label: 'Partners',
              href: 'https://www.plantanapp.com/community/partners',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Plant an App, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/plantanapp/documentation/edit/master',
            showLastUpdateAuthor: true,
            showLastUpdateTime: true
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
          'https://github.com/plantanapp/documentation/edit/master',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    '/scripts/external-links.js'
  ],
};
