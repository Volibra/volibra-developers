module.exports = {
  title: "Volibra Developers Website",
  tagline: "Volibra API Documentation",
  url: "https://shareqube.github.io/",
  baseUrl: "/volibra-docs/",
  favicon: "img/favicon.ico",
  organizationName: "judeebene", // Usually your GitHub org/user name.
  projectName: "volibra-docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Volibra Developers Website",
      logo: {
        alt: "Volibra",
        src: "img/logo.svg",
      },
      links: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "", label: "Community", position: "left" },
        {
          href: "https://github.com/ShareQube/volibra-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Getting Started",
              to: "docs/getting-started",
            },
            { label: "API Reference", to: "docs/api" },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/volibra",
            },
            {
              label: "Telegram",
              href: "",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/volibra1",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/ShareQube/volibra-docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "doc1",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/ShareQube/volibra-docs/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/ShareQube/volibra-docs/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
