---
title: 我的第一篇技术文章
date: 2026-07-04 20:00:00
tags: [前端, CSS, JavaScript]
categories: articles
cover: /images/covers/honkai3-cover.jpg
---

## 前言

欢迎来到我的博客！这是我的第一篇技术文章，记录一些前端开发中的小技巧。

## 为什么选择 Hexo

Hexo 是一个快速、简洁且高效的静态博客框架。它使用 Markdown 解析文章，在几秒内即可生成静态文件。

## 代码片段

```javascript
// 一个简单的防抖函数
function debounce(fn, delay) {
  let timer = null;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
```

## CSS 小技巧：毛玻璃效果

现代 CSS 的 `backdrop-filter` 属性可以轻松实现毛玻璃效果：

```css
.glass-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 12px;
}
```

## 结语

这只是开始，后续会有更多内容分享。敬请期待！
