import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
const isDev = process.env.NODE_ENV === 'development';
const config: Config = {
  title: 'ARCHWAY',
  tagline: 'Concentrez-vous sur ce qui compte',
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
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      fr: {
        label: 'Français',
        direction: 'ltr',
        htmlLang: 'fr-FR',
        calendar: 'gregory',
        path: 'fr',
      },
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/softwarity/website/tree/main',
          routeBasePath: '/'
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   editUrl: 'https://github.com/softwarity/website/tree/main',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
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
          type: 'localeDropdown',
          position: 'right',
        },
        {
          type: 'docSidebar',
          sidebarId: 'presSidebar',
          position: 'left',
          label: 'Présentation',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutoSidebar',
          position: 'left',
          label: 'Tutoriel',
        },
        {
          type: 'docSidebar',
          sidebarId: 'docuSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/showcase', label: 'Galerie'},
        // {to: '/licensing', label: 'Licenses'},
        {to: 'https://demo.softwarity.dev/login', label: 'Demo (guest/guest)'},
        isDev && {to: '/__docusaurus/debug', label: 'Debug'}
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
              label: 'Présentation',
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
