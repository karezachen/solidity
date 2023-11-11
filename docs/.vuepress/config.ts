import { defineUserConfig, defaultTheme } from 'vuepress';
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance';

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Hello Solidity!',
  description: '一起快乐学习solidity吧～ 👏',
  base: '/solidity/',
  head: [
    ['link', { rel: 'shortcut icon', href: '/images/hero.png' }],
    ],
  theme: defaultTheme({
    navbar: [{
      text: '首页',
      link: '/'
    },{
      text: '关于',
      link: '/about.md'
    },{
      text: 'GitHub',
      link: 'https://github.com/karezachen/solidity'
    }],
    sidebar: [{
      text: '支付与提现',
      link: 'payment-and-withdrawal.md',
      collapsable: false,
      sidebarDepth: 1,
      children: [
        'payable.md',
        'withdrawal.md',
      ]
    }]
  })
})