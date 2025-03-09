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
      message: '<div style=" display: flex; align-items: center; justify-content: center; "><span data-v-33cfc005="" class="icon" style=" display: inline-block; width: 1.3em; "><svg data-v-33cfc005="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" style=" fill: #1e80ff; "><title data-v-33cfc005="">ICP备案号</title><path data-v-33cfc005="" d="M778.24 163.84c-76.8-40.96-165.888-61.44-269.312-61.44s-192.512 20.48-269.312 61.44h-133.12l23.552 337.92c8.192 113.664 67.584 217.088 162.816 280.576l215.04 144.384 215.04-144.384c96.256-63.488 155.648-166.912 163.84-280.576l23.552-337.92H778.24z m47.104 333.824c-7.168 94.208-56.32 181.248-135.168 233.472l-181.248 120.832L327.68 731.136c-78.848-53.248-129.024-139.264-135.168-233.472L173.056 225.28h136.192v-26.624c58.368-23.552 124.928-34.816 199.68-34.816s141.312 12.288 199.68 34.816V225.28H844.8l-19.456 272.384z"></path><path data-v-33cfc005="" d="M685.056 328.704v-46.08H455.68c2.048-4.096 6.144-9.216 11.264-15.36 5.12-7.168 9.216-12.288 11.264-15.36L419.84 240.64c-31.744 46.08-75.776 87.04-133.12 123.904 4.096 4.096 10.24 11.264 18.432 21.504l17.408 17.408c23.552-15.36 45.056-31.744 63.488-50.176 26.624 25.6 49.152 43.008 67.584 51.2-46.08 15.36-104.448 27.648-175.104 35.84 2.048 5.12 6.144 13.312 9.216 24.576 4.096 11.264 6.144 19.456 7.168 24.576l39.936-7.168v218.112H389.12V680.96h238.592v19.456h54.272V481.28H348.16c60.416-12.288 114.688-27.648 163.84-46.08 49.152 19.456 118.784 34.816 210.944 46.08 5.12-17.408 10.24-34.816 17.408-51.2-62.464-4.096-116.736-12.288-161.792-24.576 38.912-20.48 74.752-46.08 106.496-76.8z m-150.528 194.56h94.208v41.984h-94.208v-41.984z m0 78.848h94.208v41.984h-94.208v-41.984z m-144.384-78.848h94.208v41.984H390.144v-41.984z m0 78.848h94.208v41.984H390.144v-41.984zM424.96 326.656h182.272c-26.624 22.528-57.344 41.984-94.208 57.344-31.744-15.36-61.44-34.816-88.064-57.344z"></path></svg></span><a style="margin-left: 0.5em" href="https://beian.miit.gov.cn/" target="_blank">豫ICP备18006881号-2</a></div>',
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
];
// https://vitepress.dev/reference/site-config
export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions))
