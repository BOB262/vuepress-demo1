module.exports = {
  base: '/vuepress-demo/',
  title: '鲍麒',
  description: '技术文档',
  head: [
    ['link', { rel: 'apple-touch-icon', href: '/img/logo.png' }],
    // ['link', { rel: 'icon', href: '/img/logo.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      {
        text: '博文',
        items: [
          { text: 'Android', link: '/android/' },
          { text: 'ios', link: '/ios/' },
          { text: 'Web', link: '/web/' }
        ]
      },
      { text: '关于', link: '/about/' },
      { text: 'Github', link: 'https://www.github.com/codeteenager' },
    ],
    sidebar: {
      '/android/': [
        "/",
        "android1",
      ],
      "/ios/": [
        "",
      ],
      "/web/": [
        "",
      ],
      '/': [
        '',
        '/h123',
        ['/123', '搭建vue后台管理系统 系列一（搭建篇）']
      ],
    },
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    serviceWorker: true
    // sidebar: [
    //   '/',
    //   '/h123',
    //   ['/123', '搭建vue后台管理系统 系列一（搭建篇）']
    // ]
  }
}