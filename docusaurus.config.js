// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pure DePIN docs',
  tagline: 'Just. Pure. DePIN.',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://docs.puredepin.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // organizationName: // Usually your GitHub org/user name.
  // projectName: // Usually your repo name.

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/justentropy-lol',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { property: 'og:title', content: 'Pure DePIN docs' },
        { property: 'og:description', content: 'Just. Pure. DePIN.' },
        { property: 'og:image', content: 'https://2gkirazboc1los4a.public.blob.vercel-storage.com/assets/ogcard_docs-OSoiwfkkilmcNWJ249gu92gXceEV1A' },
        { property: 'og:url', content: 'https://docs.puredepin.com' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Pure DePIN docs' },
        { property: 'og:locale', content: 'en_US' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Pure DePIN docs' },
        { name: 'twitter:description', content: 'Just. Pure. DePIN.' },
        { name: 'twitter:image', content: 'https://2gkirazboc1los4a.public.blob.vercel-storage.com/assets/ogcard_docs-OSoiwfkkilmcNWJ249gu92gXceEV1A' },
        { name: 'twitter:site', content: '@justentropylol' },        
      ],
      navbar: {
        title: 'Pure DePIN',
        logo: {
          alt: 'Pure DePIN logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/justentropy-lol/entropy-docs',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Pages',
            items: [
              {
                label: 'Docs',
                to: '/',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Socials',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/minerseatfirst',
              },
              {
                label: '𝕏',
                href: 'https://x.com/justentropylol',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'ENTROPY',
                href: 'https://justentropy.lol',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/justentropy-lol',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Pure DePIN. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
};

export default config;
