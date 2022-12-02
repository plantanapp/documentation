export default {
  "title": "Get started",
  "tagline": "Low Code Fundamentals Course is now Available",
  "url": "https://learn.plantanapp.com",
  "baseUrl": "/",
  "favicon": "img/pap-logo.png",
  "organizationName": "plantanapp",
  "projectName": "documentation",
  "themeConfig": {
    "metadata": [
      {
        "name": "keywords",
        "content": "Low Code Course"
      },
      {
        "name": "description",
        "content": "The only app development platform that gives IT teams the speed of low-code without compromising the power and flexibility of custom coding."
      }
    ],
    "navbar": {
      "title": "Plant An App",
      "logo": {
        "alt": "Plant an App Logo",
        "src": "img/pap-logo.png"
      },
      "items": [
        {
          "to": "https://community.plantanapp.com/",
          "label": "Community",
          "position": "left"
        },
        {
          "to": "docs/general/welcome",
          "activeBasePath": "docs",
          "label": "Documentations",
          "position": "left"
        },
        {
          "to": "https://academy.plantanapp.com/",
          "label": "Academy",
          "position": "left"
        },
        {
          "to": "https://www.youtube.com/plantanapp",
          "label": "Videos",
          "position": "left"
        },
        {
          "href": "https://github.com/plantanapp/documentation",
          "label": "GitHub",
          "position": "right"
        },
        {
          "type": "docsVersionDropdown",
          "position": "right",
          "dropdownItemsBefore": [],
          "dropdownItemsAfter": []
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Documentation",
          "items": [
            {
              "label": "Audience",
              "to": "docs/audience"
            },
            {
              "label": "Entities",
              "to": "docs/entities"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Community Portal",
              "href": "https://community.plantanapp.com/"
            },
            {
              "label": "Join the Low-Code Café",
              "href": "https://us02web.zoom.us/webinar/register/9416012971120/WN_Y0OUx5njQFatTEMCk3B0yg"
            },
            {
              "label": "YouTube",
              "href": "https://www.youtube.com/plantanapp"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Plant an App Home",
              "href": "https://www.plantanapp.com/"
            },
            {
              "label": "Partners",
              "href": "https://www.plantanapp.com/community/partners"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2022 Plant an App, Inc."
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "C:\\documentation\\sidebars.js",
          "editUrl": "https://github.com/plantanapp/documentation/edit/master"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/plantanapp/documentation/edit/master"
        },
        "theme": {
          "customCss": "C:\\documentation\\src\\css\\custom.css"
        },
        "sitemap": {
          "changefreq": "weekly",
          "priority": 0.5,
          "trailingSlash": false
        },
        "gtag": {
          "trackingID": "G-1MFCQQZSNK",
          "anonymizeIP": true
        }
      }
    ]
  ],
  "scripts": [
    "/scripts/external-links.js"
  ],
  "plugins": [
    "@cmfcmf/docusaurus-search-local"
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};