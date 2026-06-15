import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {themes as prismThemes} from 'prism-react-renderer';

const config: Config = {
  title: 'Nebari Superset Pack',
  tagline: 'Deploy Apache Superset on Nebari',
  favicon: 'img/favicon.ico',

  url: 'https://nebari-dev.github.io',
  baseUrl: '/nebari-superset-pack/',

  organizationName: 'nebari-dev',
  projectName: 'nebari-superset-pack',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  plugins: [
    [
      'docusaurus-lunr-search',
      {
        languages: ['en'],
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          sidebarCollapsible: true,
          showLastUpdateTime: true,
          editUrl:
            'https://github.com/nebari-dev/nebari-superset-pack/edit/main/docs/docs/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'Nebari Superset Pack',
      logo: {
        alt: 'Nebari logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/nebari-dev/nebari-superset-pack',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Source',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/nebari-dev/nebari-superset-pack',
            },
            {
              label: 'Nebari',
              href: 'https://nebari.dev',
            },
          ],
        },
        {
          title: 'Superset',
          items: [
            {
              label: 'Apache Superset docs',
              href: 'https://superset.apache.org/docs/intro',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nebari contributors.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'yaml', 'toml', 'python'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
