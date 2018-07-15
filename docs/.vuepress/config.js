module.exports = {
  base:'/vuepress/',
  dest: 'vuepress',
  locales: {
    // '/en': {
    //   lang: 'en-US',
    //   title: 'VuePress',
    //   description: 'Vue-powered Static Site Generator'
    // },
    '/': {
      lang: 'zh-CN',
      title: 'ROWEB',
      description: '坚持 分享 超脱 存在'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    repo: 'luoweb/vuepress',
    editLinks: true,
    docsDir: 'docs',
    serviceWorker: {
      updatePopup: true
    },
    locales: {
      // '/en': {
      //   label: 'English',
      //   selectText: 'Languages',
      //   editLinkText: 'Edit this page on GitHub',
      //   lastUpdated: 'Last Updated',
      //   nav: [
      //     {
      //       text: 'Guide',
      //       link: '/en/guide/',
      //     },
      //     {
      //       text: 'Config Reference',
      //       link: '/en/config/'
      //     },
      //     {
      //       text: 'Default Theme Config',
      //       link: '/en/default-theme-config/'
      //     },
      //     {
      //       text: 'Changelog',
      //       link: 'https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md'
      //     }
      //   ],
      //   sidebar: {
      //     '/en/guide/': genSidebarConfig('Guide')
      //   }
      // },
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: [
          {
            text: '前端技术',
            link: '/zh/frontend/',
            items: [
              { text: 'JAVASCRIPT', link: '/frontend/javascript' },
              { text: 'HTML', link: '/frontend/html' },
              { text: 'CSS', link: '/frontend/css' },
              { text: 'VUE', link: '/frontend/vuejs' },
              { text: '小程序', link: '/frontend/miniapp' }
            ]
          },
          {
            text: '后端技术',
            link: '/zh/backend/',
            items: [
              { text: 'JAVA', link: '/backend/java' },
              { text: 'NODEJS', link: '/backend/nodejs' },
              { text: 'GO', link: '/backend/go' },
              { text: 'PYTHON', link: '/backend/python' },
              { text: 'DB', link: '/backend/db' }
            ]
          },
          {
            text: '架构设计',
            link: '/zh/architect/',
            items: [
              { text: '算法', link: '/architect/algorithm' },
              { text: '数据结构', link: '/architect/datastrueture' },
              { text: '区块链', link: '/architect/blockchain' }
            ]
          },
          {
            text: '日常笔记',
            link: '/zh/notebook/'
          },          
          {
            text: '最新',
            link: 'https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md'
          }
        ],
        sidebar: {
          '/zh/guide/': genSidebarConfig('指南')
        }
      }
    }
  }
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'basic-config',
        'assets',
        'markdown',
        'using-vue',
        'custom-themes',
        'i18n',
        'deploy'
      ]
    }
  ]
}
