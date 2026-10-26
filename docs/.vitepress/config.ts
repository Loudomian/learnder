import { defineConfig } from 'vitepress'

const siteTitle = 'Learnder'
const siteDescription = '一个朴实无华的 3D 制作流程学习文档，涵盖 Blender 与 Source Filmmaker 的入门、进阶与实战案例。'
const siteUrl = 'https://learnder.org'
const ogImage = 'https://pic1.imgdb.cn/item/634aeeb016f2c2beb12028d7.jpg'

export default defineConfig({
  title: siteTitle,
  description: siteDescription,
  lang: 'zh-CN',
  cleanUrls: 'with-subfolders',
  // 死链会让构建直接失败；本地开发时也能在控制台看到对应页面。
  ignoreDeadLinks: false,

  vite: {
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['video-player', 'video-neutral-skin'].includes(tag)
        }
      }
    }
  },

  sitemap: {
    hostname: siteUrl
  },

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'theme-color', content: '#faf9f6', media: '(prefers-color-scheme: light)' }],
    ['meta', { name: 'theme-color', content: '#121317', media: '(prefers-color-scheme: dark)' }],

    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:site_name', content: siteTitle }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],

    ['script', { src: 'https://umm.learnder.org/script.js', async: true, defer: true, 'data-website-id': 'd8d8bb05-56be-4f37-a4e0-64cc9a0c800a' }],
  ],

  // 每个页面生成独立的 canonical 与 Open Graph 信息，避免分享时全部显示站点默认标题。
  transformHead({ pageData }) {
    const title = pageData.title
      ? pageData.frontmatter.titleTemplate
        ? `${pageData.title} | ${pageData.frontmatter.titleTemplate}`
        : `${pageData.title} | ${siteTitle}`
      : siteTitle
    const description = pageData.frontmatter.description || siteDescription
    const url = toPageUrl(pageData.relativePath)

    return [
      ['link', { rel: 'canonical', href: url }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }],
    ]
  },

  lastUpdated: true,

  themeConfig: {
    logo: '/logo-hero.png',
    lastUpdated: {
      text: '最后更新时间',
      formatOptions: { dateStyle: 'medium', forceLocale: true }
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '清除搜索',
            backButtonTitle: '返回',
            noResultsText: '没有找到相关结果',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    outline: 'deep',
    outlineTitle: '指南大纲',

    nav: nav(),

    sidebar: {
      '/guide/blender': sidebarBlender(),
      '/guide/sfm': sidebarSFM()
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '回到顶部',
    skipToContentLabel: '跳到正文',

    notFound: {
      title: '页面不存在',
      quote: '你要找的页面可能已经被移动或删除，试试从首页重新开始。',
      linkLabel: '返回首页',
      linkText: '返回首页',
      code: '404'
    },

    footer: {
      message: '代码以 <a href="https://github.com/Loudomian/learnder/blob/main/LICENSE">MIT</a> 协议开源，文档内容采用 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh">CC BY-NC-SA 4.0</a> 协议。',
      copyright: `Copyright © 2019 - ${new Date().getFullYear()} Loudomian.`
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Loudomian/learnder' },
    ],

    editLink: {
      pattern: 'https://github.com/Loudomian/learnder/edit/main/docs/:path',
      text: '完善文档'
    },
  }
})

/**
 * 侧边栏和导航
*/

function toPageUrl(relativePath: string) {
  const clean = relativePath
    .replace(/(^|\/)index\.md$/, '$1')
    .replace(/\.md$/, '')

  return clean ? `${siteUrl}/${clean}` : `${siteUrl}/`
}

function nav() {
  return [
    { text: '关于本站', link: '/about', activeMatch: '/about' },
    {
      text: '文档',
      items: [
        {
          text: 'Blender',
          link: '/guide/blender/intro',
        },
        {
          text: 'Source Filmmaker',
          link: '/guide/sfm/intro',
        },
      ],
      activeMatch: '/guide/'
    },
    { text: '编写指南', link: '/contributing', activeMatch: '/contributing' },
    { text: '创作者', link: '/team', activeMatch: '/team' },
    { text: '网站导航', link: 'https://nav.learnder.org' },
    { text: 'QQ频道', link: 'https://pd.qq.com/s/5wrrck9z2' }
  ]
}

function sidebarBlender() {
  return [
    {
      text: '🚀入门',
      collapsible: true,
      items: [
        { text: 'Blender 学习指南', link: '/guide/blender/intro' },
        { text: 'Blender 视频教程推荐', link: '/guide/blender/basics/blender-video-tutorials-recommended' },
        { text: 'EEVEE 渲染器', link: '/guide/blender/basics/eevee-setting' },
      ]
    },
    {
      text: '📚进阶',
      collapsible: true,
      items: [
        { text: '服务器云渲染', link: '/guide/blender/advanced/cloud-render' },
        { text: '提取守望先锋资产', link: '/guide/blender/advanced/extract-overwatch-assets' },
      ]
    },
    {
      text: '🛠️排错',
      collapsible: true,
      items: [
        { text: '角色远离原点后出现抖动', link: '/guide/blender/bug/rig-origin-jitter' },
      ]
    }
  ]
}

function sidebarSFM() {
  return [
    {
      text: '📓海报实例',
      collapsible: true,
      collapsed: true,
      items: [
        { text: '实例介绍', link: '/guide/sfm/instance/monika-poster/intro' },
        { text: '摆好动作', link: '/guide/sfm/instance/monika-poster/posting-well' },
        { text: '镜头与布景', link: '/guide/sfm/instance/monika-poster/lens-scenebuild' },
        { text: '打光', link: '/guide/sfm/instance/monika-poster/lighting' }
      ]
    },
    {
      text: '🚀入门',
      collapsible: true,
      items: [
        { text: 'SFM 学习指南', link: '/guide/sfm/intro' },
        { text: '下载 Source Filmmaker', link: '/guide/sfm/getting-start/download-sfm' },
        { text: '汉化补丁', link: '/guide/sfm/getting-start/hanization-patch' },
        { text: '获取社区资产', link: '/guide/sfm/getting-start/getting-model' },
        { text: '增加视频编码器', link: '/guide/sfm/getting-start/add-media-encoder' }
      ]
    },
    {
      text: '💡基础',
      collapsible: true,
      items: [
        { text: '基础打光', link: '/guide/sfm/basics/lighting' },
        { text: 'Rig（骨架）', link: '/guide/sfm/basics/rig' },
        { text: '导出成片', link: '/guide/sfm/basics/export' },
      ]
    },
    {
      text: '📚进阶',
      collapsible: true,
      items: [
        { text: '让模型富有光泽', link: '/guide/sfm/advanced/make-the-model-shiny' },
        { text: '模型换头', link: '/guide/sfm/advanced/headswap' },
        { text: 'JiggleBone（动骨）', link: '/guide/sfm/advanced/jigglebone' },
        { text: 'Auto Rigger（自动装配）', link: '/guide/sfm/advanced/auto-rigger' }
      ]
    },
    {
      text: '💀混沌',
      collapsible: true,
      items: [
        { text: '初识 VMT', link: '/guide/sfm/chaos/vmt-meet' },
        { text: '自发光 VMT', link: '/guide/sfm/chaos/vmt-self-luminous' },
        { text: '冯氏高光 VMT', link: '/guide/sfm/chaos/vmt-phong' }
      ]
    },
    {
      text: '🥶冷知识',
      collapsible: true,
      items: [
        { text: '音频格式', link: '/guide/sfm/trivia/sound-format' },
        { text: '调整分辨率', link: '/guide/sfm/trivia/resolutions' },
        { text: 'Source SDK', link: '/guide/sfm/trivia/sdk' },
        { text: '离线启动', link: '/guide/sfm/trivia/nosteam' }
      ]
    },
    {
      text: '💩BUG',
      collapsible: true,
      items: [
        { text: '屏闪', link: '/guide/sfm/bug/flash-screen' },
        { text: '环境错误', link: '/guide/sfm/bug/env-error' },
        { text: '汉化补丁', link: '/guide/sfm/bug/hanization-patch-bug' },
        { text: '七彩眩光', link: '/guide/sfm/bug/7-color' },
        { text: '文档损坏', link: '/guide/sfm/bug/document-broke' },
        { text: '屏闪后崩溃', link: '/guide/sfm/bug/crash-after-flash' },
        { text: 'CUtlRBTree overflow', link: '/guide/sfm/bug/cutlrbtree-overflow' }
      ]
    }
  ]
}
