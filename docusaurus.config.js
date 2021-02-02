module.exports = {
  title: "Developer tools and resources to integrate Volibra",
  tagline: "Build a web or mobile integration to accept Diem payments online or in person",
  url: "https://shareqube.github.io/",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "ShareQube", // Usually your GitHub org/user name.
  projectName: "volibra-developers", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Volibra Developers",
      logo: {
        alt: "Volibra",
        src: "img/logo.svg",
      },
      items: [
        {
          label: "Getting Started",
          to: "docs/getting-started",
          position: "left",
        },
        {
          label: "API",
          to: "docs/api",
          position: "left",
        },

        { to: "https://t.me/joinchat/K32itxP7gBhwZew6DAmvaw", label: "Community", position: "left" },
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
              href: "https://t.me/joinchat/K32itxP7gBhwZew6DAmvaw",
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
      copyright: `Copyright © ${new Date().getFullYear()} Volibra Developers Website. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
         
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/ShareQube/volibra-docs/edit/master/volibra-docs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
