# 火之高兴的博客

基于 Hexo 的个人博客，二次元玻璃拟态主题。

在线地址：<https://gitfirehappy.github.io/>

## 快速开始

```bash
npm install
npx hexo server     # 本地预览 http://localhost:4000
npx hexo generate   # 生成静态文件到 public/
npx hexo clean      # 清理缓存
```

## 写文章

### 新建文章

```bash
npx hexo new post "文章标题"
```

这会在 `source/_posts/` 下生成：

```
source/_posts/文章标题.md
source/_posts/文章标题/       ← 该文章专属图片文件夹
```

### Front-matter 模板

```markdown
---
title: 文章标题
date: 2026-07-05 20:00:00
tags: [标签1, 标签2]
categories: articles        ← articles 或 blog
cover: /images/covers/xxx.jpg   ← 封面图（可选，不写则显示占位图标）
---
```

### 图片放哪里？

项目已配置 `post_asset_folder: true`（文章和图片打包在一起）：

| 图片类型 | 存放位置 | 引用方式 |
|---------|---------|---------|
| 文章内嵌图片 | `source/_posts/文章标题/xxx.png` | `![alt](xxx.png)` |
| 文章封面图 | `source/images/covers/xxx.jpg` | front-matter 中 `cover: /images/covers/xxx.jpg` |
| 个人头像 | `source/images/avatar.png` | 直接替换该文件 |
| 二次元背景 | `source/images/bg/bg-1.jpg`, `bg-2.jpg`, ... | 按数字命名，页面随机选取 |

> **推荐用 MD + 同名文件夹的方式**：`hexo new` 自动创建，图片和文章不散落。

## 背景图

在 `source/images/bg/` 下放入图片，命名规则 `bg-1.jpg`、`bg-2.jpg`、`bg-3.jpg` ……

页面每次加载随机选一张。建议分辨率 1920×1080 以上。

## 部署

通过 GitHub Actions 部署到 GitHub Pages，push 到 `main` 分支即可自动触发。
