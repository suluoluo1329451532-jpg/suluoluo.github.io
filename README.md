# YHN® — Digital Art Archive

个人数字媒体作品集网站。纯静态 HTML/CSS/JS，部署到 GitHub Pages。

## 页面结构

| 页面 | 文件 | 说明 |
|------|------|------|
| Home | `index.html` | 首页：主视觉 + 精选作品 + 简介摘要 |
| Works | `works.html` | 完整作品列表 + 分类筛选 |
| Project Detail | `work.html?id=<slug>` | 统一作品详情页 |
| About | `about.html` | 个人介绍 + 教育背景 + 简历下载 |
| Terminal | `terminal.html` | 交互终端（help / works / whoami 等命令） |
| 404 | `404.html` | 未找到页面 |

## 数据管理

所有作品数据存放在 `data.js` 中。每个项目包含：

- `id` / `slug` — 唯一标识
- `title` / `category` / `year` / `summary` — 基本信息
- `cover` — 封面图路径
- `media` — 详情页多图/视频数组
- `tools` / `role` / `status` — 项目元信息
- `modules` — 按类型选择性展示的内容模块
- `links` — 外部链接数组
- `featured` — 是否在首页展示

个人资料（邮箱、社交、教育经历等）存放在 `data.js` 的 `profile` 对象中。

## 替换个人信息

1. 在 `data.js` 中填写 `profile.email`、`profile.social` 等字段
2. 在 `data.js` 中填写 `profile.resume` 为 `"./assets/resume.pdf"`
3. 将简历 PDF 放到 `assets/` 目录
4. 替换 `assets/work-*.png` 为真实作品截图

## 本地预览

直接双击 `index.html`，或使用任意静态服务器打开项目根目录。

## 部署

将文件上传到 GitHub 仓库，在仓库设置中开启 GitHub Pages 即可。