module.exports = {
  base: "/little-fe/",
  title: "一只小前端的进阶之路",
  description: "一只小前端的进阶之路",
  ga: "UA-132397402-1",
  head: [
    ["link", { rel: "icon", href: `/logo.png` }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#fd8649" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#1f1f1f" }]
  ],
  themeConfig: {
    repo: "",
    docsDir: "docs",
    editLinks: false,
    editLinkText: "编辑此页",
    activeHeaderLinks: false,
    sidebarDepth: 2,
    lastUpdated: "上次更新",
    nav: [{ text: "blog", link: "" }],
    sidebar: [
      {
        title: "简介",
        collapsable: false,
        children: ["/"]
      },
      {
        title: "每周好文",
        collapsable: false,
        children: ["/weeklyDigest/20190118"]
      },
      {
        title: "React Native",
        collapsable: false,
        children: ["/reactNative/dailyBugs"]
      },
      {
        title: "Node",
        collapsable: false,
        children: ["/node/avoidMemoryLeak"]
      },
      {
        title: "Js 基础要打牢",
        collapsable: false,
        children: ["/js/throttle"]
      }
    ]
  }
};