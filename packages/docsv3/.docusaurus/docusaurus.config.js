export default {
  "title": "Docs",
  "tagline": "Find a customers vehicle by looking up their registration plate, VIN or chassis number.",
  "url": "https://blueflag.com.au",
  "baseUrl": "/docs/",
  "trailingSlash": true,
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "Blue Flag",
  "projectName": "User Guide Docs",
  "themeConfig": {
    "sidebarCollapsible": true,
    "colorMode": {
      "defaultMode": "dark",
      "switchConfig": {
        "darkIcon": "☾",
        "darkIconStyle": {
          "marginLeft": "2px",
          "color": "gray"
        },
        "lightIcon": "☀",
        "lightIconStyle": {
          "marginLeft": "1px",
          "color": "gray"
        }
      },
      "disableSwitch": false,
      "respectPrefersColorScheme": false
    },
    "navbar": {
      "logo": {
        "alt": "Blue Flag Logo",
        "src": "/img/blueflag-logo.svg"
      },
      "items": [
        {
          "to": "/",
          "label": "Docs",
          "position": "right",
          "className": "button button--link"
        },
        {
          "to": "https://blueflag.com.au/docs/api/",
          "target": "_self",
          "label": "API & SDKs",
          "position": "right",
          "className": "button button--link"
        },
        {
          "to": "https://app.blueflag.com.au/get-started",
          "label": "Create Account",
          "position": "right",
          "className": "button button--link"
        },
        {
          "to": "https://app.blueflag.com.au/",
          "label": "Sign In",
          "position": "right",
          "className": "button button--outline button--primary"
        }
      ],
      "hideOnScroll": false
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "routeBasePath": "/",
          "sidebarPath": "/Users/adonisdsa/Documents/GitHub/blueflag-api-website/packages/docsv3/sidebars.js"
        },
        "blog": {
          "showReadingTime": true
        },
        "theme": {
          "customCss": "/Users/adonisdsa/Documents/GitHub/blueflag-api-website/packages/docsv3/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};