module.exports = {
  base: "/f-e/",
  title: "一只小前端的进阶之路",
  description: "一只小前端的进阶之路",
  // theme: 'meteorlxy',
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
    // personalInfo: {
    //   nickname: 'shirlychenlalala',
    //   description: 'Happy Coding<br/>Happy Life',
    //   avator: '/assets/img/avator.jpg',
    //   sns: {
    //     github: {
    //       account: 'ShirlyChenLaLaLa',
    //       link: 'https://github.com/ShirlyChenLaLaLa'
    //     },
    //   }
    // },
    nav: [{ text: "github", link: "https://github.com/ShirlyChenLaLaLa" }],
    // nav: [
    //   { text: 'Home', link: '/', exact: true },
    //   { text: 'Posts', link: '/posts/', exact: false  },
    //   { text: 'About', link: '/about/', exact: false  }, 
    // ],
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
        title: "推荐好书",
        collapsable: false,
        children: ["/books/books"]
      },
      {
        title: "React Native",
        collapsable: false,
        children: ["/reactNative/dailyBugs","/reactNative/animation"],
      },
      {
        title: "Flutter",
        collapsable: false,
        children: ["/flutter/learn","/flutter/note1"],
      },
      {
        title: "Node",
        collapsable: false,
        children: ["/node/avoidMemoryLeak"]
      },
      {
        title: "Js 基础要打牢",
        collapsable: false,
        children: ["/js/throttle", "/js/debounce", "/js/events"]
      },
      {
        title: "TypeScript",
        collapsable: false,
        children: ["/typescript/learn"]
      },
      {
        title: "Graphql",
        collapsable: false,
        children: ["/graphql/learn"]
      }
    ]
  }
};

