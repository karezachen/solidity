import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  base: '/solidity/',

  lang: 'zh-CN',
  title: 'Hello Solidity!',
  description: '一起快乐学习solidity吧～ 👏',
})

theme: defaultTheme({
  logo: 'images/hero.png'
})