// * 侧边栏
const { createSideBarConfig } = require('./util')
const JAVASCRIPT_PATH = '/blogs/javascript'
const PERFORMANCE_PATH = '/blogs/performance'
const ENGINEERING_PATH = '/blogs/engineering'
// const CSS_PATH = '/blogs/css'
const NET_PATH = '/blogs/net'
// const INTERVIEW_PATH = '/blogs/interview'
const BROWSER_PATH = '/blogs/browser'
module.exports = {
    [JAVASCRIPT_PATH]: [
        createSideBarConfig('JS-基础', JAVASCRIPT_PATH + '/js-base'),
        // createSideBarConfig('JS-深入数组', JAVASCRIPT_PATH + '/js-array'),
        // createSideBarConfig('JS-其它API原理', JAVASCRIPT_PATH + '/js-api'),
        // createSideBarConfig('JS-V8引擎原理', JAVASCRIPT_PATH + '/js-v8'),
        // createSideBarConfig('JS-异步I/O及异步编程', JAVASCRIPT_PATH + '/js-async'),
      ],
      [PERFORMANCE_PATH]: [createSideBarConfig('JS性能相关', PERFORMANCE_PATH)],
      [ENGINEERING_PATH]: [
        createSideBarConfig('前端工程化概述', ENGINEERING_PATH + '/summarize'),
        createSideBarConfig('脚手架工具', ENGINEERING_PATH + '/cli'),
      ]
    //   [CSS_PATH]: [createSideBarConfig('CSS 技巧', CSS_PATH)],
    //   [NET_PATH]: [
    //     createSideBarConfig("TCP 协议", NET_PATH + '/tcp'),
    //     createSideBarConfig("HTTP 协议", NET_PATH + '/http')
    //   ],
    //   [INTERVIEW_PATH]: [createSideBarConfig('面试经历', INTERVIEW_PATH)],
    //   [BROWSER_PATH]: [
    //     createSideBarConfig('浏览器渲染', BROWSER_PATH + '/browser-render'),
    //     createSideBarConfig('浏览器安全', BROWSER_PATH + '/browser-security'),
    //   ]
}