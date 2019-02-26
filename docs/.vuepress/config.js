module.exports = {
  base: "/f-e/",
  title: "一只小前端的进阶之路",
  description: "一只小前端的进阶之路",
  theme: 'vuepress-theme-meteorlxy',
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
    personalInfo: {
      nickname: 'meteorlxy',
      description: 'Happy Coding<br/>Happy Life',
      email: 'meteor.lxy@foxmail.com',
      location: 'Xi\'an City, China',
      organization: 'Xi\'an Jiao Tong University',
      avator: '/assets/img/avator.jpg',
      sns: {
        github: {
          account: 'ShirlyChenLaLaLa',
          link: 'https://github.com/ShirlyChenLaLaLa'
        },
        linkedin: {
          account: 'meteorlxy',
          link: 'http://www.linkedin.com/in/meteorlxy'
        },
        twitter: {
          account: 'meteorlxy_cn',
          link: 'https://twitter.com/meteorlxy_cn'
        },
        weibo: {
          account: '@焦炭君_Meteor',
          link: 'https://weibo.com/u/2039655434'
        }
      }
    },
    nav: [{ text: "github", link: "https://github.com/ShirlyChenLaLaLa" }],
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
        children: ["/js/throttle"]
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

