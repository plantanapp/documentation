const versions = require('./versions.json');

function getNextVersionName() {

  const lastReleasedVersion = versions[0];

  return lastReleasedVersion.split('.')[0] + '.' + (parseInt(lastReleasedVersion.split('.')[1]) + 1)

}

module.exports = {
  title: 'Get started',
  tagline: 'Low Code Fundamentals Course is now Available',
  url: 'https://learn.plantanapp.com',
  baseUrl: '/',
  favicon: 'img/pap-logo.png',
  organizationName: 'plantanapp', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  trailingSlash: undefined,
  themeConfig: {
     metadata: [
       {
         name: 'keywords', 
         content: 'Low Code Course'
       },
       {
         name: 'description', 
         content: 'The only app development platform that gives IT teams the speed of low-code without compromising the power and flexibility of custom coding.'
       }
     ],
    navbar: {
      title: 'Plant An App',
      logo: {
        alt: 'Plant an App Logo',
        src: 'img/pap-logo.png',
      },
      items: [
        {
          to: 'https://community.plantanapp.com/',
          label: 'Community',
          position: 'left',
        },
        {
          to: 'docs/next/general/welcome',
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
        {
          type: 'docsVersionDropdown',
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
    }
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
          versions: {
              current: {
                label: `${getNextVersionName()} (Current)`,
                banner: "none",
              },
            },
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
          'https://github.com/plantanapp/documentation/edit/master'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap :  {
          changefreq: 'weekly',
          priority: 0.5,
        },
        gtag: {
          trackingID: 'G-1MFCQQZSNK',
          anonymizeIP: true,
        },
      },
    ],
  ],
  scripts: [
    '/scripts/external-links.js'
  ],
  plugins: [
    "@cmfcmf/docusaurus-search-local"
  ],
};
