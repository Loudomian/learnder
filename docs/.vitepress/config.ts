import { defineConfig } from 'vitepress'

const ogDescription = '一个朴实无华的3D制作流程学习文档'
const ogImage = 'https://pic1.imgdb.cn/item/634aeeb016f2c2beb12028d7.jpg'
const ogTitle = 'Learnder'
const ogUrl = 'https://learnder.org'

export default defineConfig({
  title: 'Learnder',
  description: '知识分享库',
  lang: 'zh-CN',
  cleanUrls: 'with-subfolders',
  ignoreDeadLinks: true,

  vite: {
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['video-player', 'video-neutral-skin'].includes(tag)
        }
      }
    }
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=device-dpi' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],


    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@vite_js' }],
    ['script', { src: 'https://umm.learnder.org/script.js', async: true, defer: true, 'data-website-id': 'd8d8bb05-56be-4f37-a4e0-64cc9a0c800a' }],
  ],

  lastUpdated: true,

  themeConfig: {
    logo: '/logo-hero.png',
    lastUpdatedText: '最后更新时间',
    search: {
      provider: 'local'
    },

    outline: 'deep',
    outlineTitle: '指南大纲',

    nav: nav(),

    sidebar: {
      '/guide/blender': sidebarBlender(),
      '/guide/sfm': sidebarSFM()
    },

    footer: {
      message: 'Released under the MIT License, Powered by <a href="https://cloudflare.com">Cloudflare</a>.',
      copyright: 'Copyright © 2019 - 2023 Loudomian.'
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
          text: 'Source Filmaker',
          link: '/guide/sfm/intro',
        },
      ],
      activeMatch: '/guide/'
    },
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
        { text: '引言', link: '/guide/blender/intro' },
        { text: 'Blender 视频教程推荐', link: '/guide/blender/basics/blender-video-tutorials-recommended' },
        //{ text: 'EEVEE 设置', link: '/guide/blender/basics/eevee-setting' },
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
    },
    {
      text: '🎮三角洲行动',
      collapsible: true,
      items: [
        { text: 'NinjaRipper 提取枪械', link: '/guide/blender/delta-force/ninjaripper-extract-weapon' },
        { text: '数据结构', link: '/guide/blender/delta-force/data-structure' },
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
        { text: '引言', link: '/guide/sfm/instance/monika-poster/intro' },
        { text: '摆好动作', link: '/guide/sfm/instance/monika-poster/posting-well' },
        { text: '镜头与布景', link: '/guide/sfm/instance/monika-poster/lens-scenebuild' },
        { text: '打光', link: '/guide/sfm/instance/monika-poster/lighting' }
      ]
    },
    {
      text: '🚀入门',
      collapsible: true,
      items: [
        { text: '引言', link: '/guide/sfm/intro' },
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
        { text: 'Rig', link: '/guide/sfm/basics/rig' },
        //{ text: '导出成片', link: '/guide/sfm/basics/export' }
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
        { text: '初识 vmt', link: '/guide/sfm/chaos/vmt-meet' },
        { text: '自发光 vmt', link: '/guide/sfm/chaos/vmt-self-luminous' },
        { text: '冯氏高光 vmt', link: '/guide/sfm/chaos/vmt-phong' }
      ]
    },
    {
      text: '🥶冷知识',
      collapsable: true,
      items: [
        { text: '音频格式', link: '/guide/sfm/trivia/sound-format' },
        { text: '调整分辨率', link: '/guide/sfm/trivia/resolutions' },
        { text: 'Source SDK', link: '/guide/sfm/trivia/sdk' },
        { text: '离线启动', link: '/guide/sfm/trivia/nosteam' }
      ]
    },
    {
      text: '💩BUG',
      collapsable: true,
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

