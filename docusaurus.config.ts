import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
const isDev = process.env.NODE_ENV === 'development';
const config: Config = {
  title: 'SOFTWARITY',
  tagline: 'Focus on what matters',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://softwarity.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'softwarity', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        gtag: {
          trackingID: 'G-C2RHTSMMQ4',
          anonymizeIP: false,
        },
        docs: {
          lastVersion: 'current',
          versions: {
            current: {
              label: 'Current',
              path: '',
            },
          },
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/softwarity/website/tree/main',
          routeBasePath: '/'
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    colorMode: {
      defaultMode: 'dark',
    },
    // Replace with your project's social card
    image: 'img/social-card.jpg',
    navbar: {
      title: 'SOFTWARITY',
      logo: {
        alt: 'Softwarity Logo',
        src: 'img/softwarity.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'presSidebar',
          position: 'left',
          label: 'Presentation',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutoSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          type: 'docSidebar',
          sidebarId: 'docuSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/showcase', label: 'Showcase'},
        // {to: '/licensing', label: 'Licenses'},
        {to: 'https://demo.softwarity.dev/login', label: 'Demo (guest/guest)'},
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
        // isDev && {to: '/__docusaurus/debug', label: 'Debug'},
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'documentationSidebar',
        //   position: 'left',
        //   label: 'Documentation',
        // },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'API',
        // },
        // {to: '/blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/softwarity/website',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Presentation',
              to: '/pres/intro',
            },{
              label: 'Documentation',
              to: '/doc/start',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/archway',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/softwarity',
            },
          ],
        },
        // {
        //   title: 'More',
        //   items: [
        //     // {
        //     //   label: 'Blog',
        //     //   to: '/blog',
        //     // },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/softwarity/archway',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}, Softwarity Inc. Built with Love.`,
    },
    prism: {
      theme: prismThemes.github,
      additionalLanguages: ['bash', 'json'],
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
