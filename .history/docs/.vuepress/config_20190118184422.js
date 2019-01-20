module.exports = {
  base: "/fe-backend-guides/",
  title: "前后端进阶与指南",
  description: "前后端进阶与指南",
  ga: "UA-132397402-1",
  head: [
    ["link", { rel: "icon", href: `/logo.png` }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }]
  ],
  themeConfig: {
    repo: "itxuye/fe-backend-guides",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "编辑此页",
    activeHeaderLinks: false,
    sidebarDepth: 2,
    lastUpdated: "上次更新",
    nav: [{ text: "blog", link: "https://itxuye.com" }],
    sidebar: [
      {
        title: "简介",
        collapsable: false,
        children: ["/"]
      },
      {
        title: "FE",
        collapsable: false,
        children: ["/fe/Typescript"]
      },
      {
        title: "Graphql",
        collapsable: false,
        children: ["/graphql/Graphql"]
      },
      {
        title: "Node",
        collapsable: false,
        children: ["/node/node"]
      },
      {
        title: "InterView",
        collapsable: false,
        children: ["/interview/InterView"]
      }
    ]
  }
};