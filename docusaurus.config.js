module.exports = {
  title: 'Get started with Plant an App',
  tagline: 'Low Code Fundamentals Course is now Available',
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
          to: 'https://academy.plantanapp.com/',
          label: 'Academy',
          position: 'left',
        },
        {
          to: 'https://www.youtube.com/plantanapp',
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
              href: 'https://www.youtube.com/plantanapp',
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
    gtag: {
      trackingID: 'G-1MFCQQZSNK',
      anonymizeIP: true,
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
  plugins: [
    [
      '@docusaurus/plugin-sitemap',
      {
        changefreq: 'weekly',
        priority: 0.5,
        trailingSlash: false,
      },
    ],
    ['@docusaurus/plugin-google-gtag'],
    '@aldridged/docusaurus-plugin-lunr',
  ],
};
