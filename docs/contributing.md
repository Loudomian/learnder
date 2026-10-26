---
title: 文档编写指南
description: Learnder 文档的写作规范、页面模板与提交方法，帮助贡献者写出统一、易读的教程。
outline: deep
---

# 文档编写指南

Learnder 的文档由社区共同维护。好的教程应该让读者「照着做就能成功」，而不只是把知识堆在一起。这份指南约定文档的结构、语气和格式，并提供可以直接复制的页面模板。

> 编写思路参考了 [Vue 文档写作指南](https://cn.vuejs.org/guide/contributing/writing-guide.html)、Nuxt 团队的 [Docus 写作规范](https://github.com/nuxt-content/docus/blob/main/docs/skills/create-docs/references/writing-guide.md) 和 [VitePress Markdown 扩展](https://vitepress.dev/guide/markdown)，并结合本项目的实际内容做了简化。

## 写作原则

### 先让读者找到答案

- 标题写清楚「做什么」，不要只写「设置」「问题」「教程」。
- 开头用 1–2 句话说明这篇文档解决什么问题、适合谁。
- 步骤按操作顺序排列，一步只做一件事。
- 先给结论或最终效果，再解释原理。

### 用第二人称和主动语态

| 不推荐 | 推荐 |
| --- | --- |
| 文件可以被导入 | 点击「导入」载入文件 |
| 建议用户进行设置 | 在设置中打开… |
| 如果出现了报错，可以尝试… | 如果看到 …，请 … |
| 该功能被用于调整亮度 | 这个功能用来调整亮度 |

### 术语统一

| 统一写法 | 不要混用 |
| --- | --- |
| Source Filmmaker（首次出现写全称，之后写 SFM） | Source Filmaker、SFM 软件 |
| Blender | blender、BLENDER |
| Rig（骨架） | 锁具、索具 |
| 渲染 | 算图、跑图 |
| 工程文件 | 项目文件、存档（在不产生歧义时） |

### 截图和代码要能复现

- 截图只保留必要区域，裁掉无关的桌面和窗口。
- 截图前关掉聊天软件、账号信息等隐私内容。
- 命令要能直接复制，路径中的变量用 `<尖括号>` 标出并解释。
- 代码块标注语言，例如 `bash`、`python`、`ini`。

## 页面结构

一篇操作类文档建议包含以下部分，按需增减：

1. **frontmatter**：`title` 与 `description`（必填）。
2. **H1**：与标题一致，全页只出现一次。
3. **导语**：说明文档解决什么问题。
4. **你将学会 / 适用场景**：给读者一个预期。
5. **开始之前**：软件版本、前置知识、所需素材。
6. **步骤**：用 H2 分步，一步一个动作。
7. **验证结果**：告诉读者怎样确认成功。
8. **常见问题**：列出容易踩的坑。
9. **相关阅读**：链接到下一篇文档。

## 页面模板

### 模板 A：操作教程

适合「从零完成一件事」的页面，例如安装、配置、提取资产。

````md
---
title: 用 XXX 完成 YYY
description: 一句话说明读者读完能做什么，40–80 个汉字。
---

# 用 XXX 完成 YYY

> 一句话说明这篇文档解决什么问题，以及适合谁。

## 你将学会

- …
- …

## 开始之前

- 软件版本：…
- 前置知识：…
- 所需素材：…

## 步骤一：…

1. 打开 …
2. 点击 …

![说明这张截图展示了什么](/images/xxx/step-1.png)

## 步骤二：…

1. …
2. …

## 验证结果

如果看到 …，说明操作成功。

## 常见问题

### 为什么 …？

…

## 相关阅读

- [相关文档](/guide/…)
````

### 模板 B：故障排查

适合报错、闪退、显示异常等问题。先写现象，再写原因，最后给方案。

````md
---
title: 解决 XXX 报错
description: 一句话说明这个报错的现象、原因与解决方向。
---

# 解决 XXX 报错

## 现象

描述读者会看到什么：报错文字、截图、发生时机。

## 影响范围

说明哪些版本、系统或操作会触发。

## 原因

用一两句话解释根本原因，不确定时写明「可能」。

## 解决方法

### 方法一：…

1. …
2. …

### 方法二：…

1. …

## 如何验证

重新执行 …，如果不再出现 …，说明已修复。

## 相关讨论

- [社区帖子](https://…)
````

### 模板 C：概念与冷知识

适合解释术语、原理、参数含义，不要求读者立刻动手。

````md
---
title: 理解 XXX
description: 用一句话解释 XXX 是什么，以及它为什么重要。
---

# 理解 XXX

## 一句话解释

…

## 为什么需要它

…

## 关键概念

| 概念 | 说明 |
| --- | --- |
| … | … |

## 在 SFM / Blender 中的位置

…

## 延伸阅读

- [官方文档](https://…)
````

### 模板 D：实例复盘

适合海报、短片、完整项目。重点写「为什么这样做」，而不只是步骤。

````md
---
title: 用 SFM 制作《XXX》海报
description: 从构图到后期的完整实例复盘，附参数与工程文件说明。
---

# 用 SFM 制作《XXX》海报

## 成品与思路

![最终效果](/images/xxx/final.jpg)

## 准备工作

- 使用的地图：…
- 使用的模型：…
- 参考图：…

## 拆解步骤

### 1. 构图

…

### 2. 摆动作

…

### 3. 打光

…

### 4. 后期

…

## 参数与工程文件

…

## 复盘

哪些地方可以做得更好？下次会怎么改？
````

## 格式规范

### 标题

- 每页只有一个 H1。
- H2 用动词短语或明确的名词，例如「配置启动项」「常见问题」。
- 不要跳级：H1 → H2 → H3。
- 标题里不要手动写编号，VitePress 会生成大纲。

### 标点与排版

- 中文使用全角标点，中英文之间加一个空格。
- 参数、菜单、文件名用行内代码：`-nosteam`、`Auto Hide Engine Window`、`layoutTest.ini`。
- 菜单路径用 `>` 连接：**Windows > Engine Window > Auto Hide Engine Window**。
- 不要用多个感叹号或问号；警告交给提示容器表达。

### 图片

- 所有说明性截图都要写 alt：

  ```md
  ![在 SFM 菜单中开启 Auto Hide Engine Window](/images/sfm/flash-screen/menu.png)
  ```

- 新图片放在 `docs/public/images/<页面名>/`，引用时使用 `/images/...` 绝对路径。
- 外部图床可能失效；新文档建议把图片放进仓库。
- 纯装饰图片可以留空 alt，但不要滥用。

### 代码块

- 标注语言：`bash`、`python`、`ini`、`lua`、`md`。
- 命令和输出分开，不要混在同一个代码块里。
- 多行命令保持可复制，不要把提示符 `$` 写进去。

### 提示容器

VitePress 内置五种容器，按语义选择：

```md
::: tip 提示
补充技巧或推荐做法。
:::

::: info 说明
背景信息、参考资料。
:::

::: warning 注意
可能导致失败或数据丢失的操作。
:::

::: danger 危险
高风险操作，例如删除文件、覆盖工程。
:::

::: details 展开查看
默认折叠的补充内容。
:::
```

### 链接

- 站内链接使用根路径，不带 `.html`：`[Rig](/guide/sfm/basics/rig)`。
- 链接文字要描述目标，不要写「点击这里」。
- 引用外部资料时注明来源和语言。
- 指向站内小节的锚点要与标题一致，修改标题后记得同步更新链接。

### 代码组

当同一件事有多种等价写法时，用 `code-group`：

````md
::: code-group

```bash [npm]
npm install
```

```bash [pnpm]
pnpm install
```

:::
````

## 新增一篇文档

1. 在 `docs/guide/` 下对应目录新建 `kebab-case.md` 文件。
2. 按上面的模板写 frontmatter 和正文。
3. 在 `docs/.vitepress/config.ts` 的 `sidebarBlender()` 或 `sidebarSFM()` 中加入链接，否则页面只能通过 URL 访问。
4. 运行 `bun run dev` 本地预览，检查图片、链接和代码块。
5. 运行 `bun run build`，确认没有死链警告。
6. 提交 PR，在描述里说明改了什么、为什么改。

::: tip 本地命令
```bash
bun install
bun run dev
bun run build
```
:::

## 提交前检查清单

- [ ] 标题和 `description` 已填写，描述能独立说明页面内容
- [ ] 开头说明了「解决什么问题、适合谁」
- [ ] 步骤可复现，没有跳步
- [ ] 截图有 alt，隐私信息已打码
- [ ] 命令可复制，路径变量有解释
- [ ] 术语与本文档一致
- [ ] 站内链接没有 `.html`，锚点存在
- [ ] 新增页面已加入侧边栏
- [ ] 本地 `bun run dev` 预览正常

## 参考资料

- [Vue 文档写作指南](https://cn.vuejs.org/guide/contributing/writing-guide.html)
- [Docus 写作规范（Nuxt 团队）](https://github.com/nuxt-content/docus/blob/main/docs/skills/create-docs/references/writing-guide.md)
- [VitePress Markdown 扩展](https://vitepress.dev/guide/markdown)
- [VitePress 默认主题配置](https://vitepress.dev/reference/default-theme-config)
