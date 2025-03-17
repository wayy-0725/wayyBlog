import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';

const vitePressOptions = {
  title: "WAYY の BLOG",
  description: "wayy的个人博客",
  head:[
      ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  markdown: {
    math: true,
    lazyLoading: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',

    nav: [
      {
        text: '算法刷题',
        items: [
          { text: '代码随想录', link: '/docs/algorithm/sxl/index', activeMatch: '/docs/algorithm/sxl/index/' },
          { text: 'PAT', link: '/docs/algorithm/pat/index', activeMatch: '/docs/algorithm/pat/index/' },
          { text: 'Acwing', link: '/docs/algorithm/acwing/index', activeMatch: '/docs/algorithm/acwing/index/' },
        ],
        activeMatch: '/docs/algorithm/'
      },
      {
        text: '基础知识',
        items: [
          { text: 'Java八股文', link: '/docs/basicKnowledge/java/index', activeMatch: '/docs/basicKnowledge/java/index/' },
          { text: '数据结构', link: '/courses/mysql/index', activeMatch: '/courses/mysql/' },
          { text: '操作系统', link: '/courses/mybatis/index', activeMatch: '/courses/mybatis/' },
          { text: '计算机网络', link: '/courses/mybatis/index', activeMatch: '/courses/mybatis/' },
          { text: '计算机组成原理', link: '/courses/mybatis/index', activeMatch: '/courses/mybatis/' }
        ],
        activeMatch: '/docs/basicKnowledge/'
      },
      {
        text: '项目笔记',
        link: '/project',
        activeMatch: '/project/index',
      },
      {
        text: '人工智能',
        link: '/ai',
        activeMatch: '/ai'
      },
      {
        text: '关于',
        link: '/docs/about/index',
        activeMatch: '/docs/about/index' // // 当前页面处于匹配路径下时, 对应导航菜单将突出显示
      },
    ],
    footer: {
      message: '<span data-v-33cfc005="" class="icon" style=" display: inline-block; width: 1.3em; margin-bottom: -0.3em"><img src="/icons/beian.svg" alt="SVG Image" width="200" height="200"></span><a style="margin-left: 0.1em" href="https://beian.miit.gov.cn/" target="_blank">豫ICP备18006881号-2</a>',
      copyright: 'Copyright © 2017-2025 WAYY'
    },
    lastUpdated: true,
    lastUpdatedText: '最后更新', // 最后更新时间文本配置, 需先配置lastUpdated为true
    lightModeSwitchTitle: '切换浅色模式',
    darkModeSwitchTitle: '切换深色模式',
    outline: {
      level: 'deep', // 右侧大纲标题层级
      label: '目录', // 右侧大纲标题文本配置
    },
    sidebarMenuLabel: '文章',
    editLink: {
      pattern: 'https://github.com/Charles7c/charles7c.github.io/edit/main/docs/:path',
      text: '不妥之处，敬请雅正'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "啥也没找到",
            resetButtonTitle: "清空",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭"
            },
          },
        },
      },
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
};

const vitePressSidebarOptions = [
  {
    documentRootPath: '/',
    basePath: '/',  //需要指定基地址，不然可能导致url叠加
    scanStartPath: '/docs/basicKnowledge/java', //从哪个文件夹开始扫描
    resolvePath: '/docs/basicKnowledge/java/', //从哪个文件夹开始显示
    useTitleFromFileHeading: true,
    collapsed: false,
    capitalizeFirst: true
  },
  {
    documentRootPath: '/',
    basePath: '/',  //需要指定基地址，不然可能导致url叠加
    scanStartPath: '/docs/algorithm/sxl', //从哪个文件夹开始扫描
    resolvePath: '/docs/algorithm/sxl/', //从哪个文件夹开始显示
    useTitleFromFileHeading: true,
    collapsed: false,
    capitalizeFirst: true
  },
];
// https://vitepress.dev/reference/site-config
export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions))
