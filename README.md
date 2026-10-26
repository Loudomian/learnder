<p align="center">
<img src="https://pic1.imgdb.cn/item/634aeeb016f2c2beb12028d7.jpg" alt="Learnder" width="100%" style="border-radius: 8px;">
</p>

# Learnder

Learnder 是一个公益、开源的 3D 创作学习文档，内容覆盖 **Blender** 与 **Source Filmmaker（SFM）**。

- 🍃 以 Markdown 为中心的项目结构，用简练的文字描述操作
- 📚 以贡献者的实践经验为基础，填补教程里常见的遗漏与技巧
- 🐳 开放式文档，任何人都可以在线阅读、编辑并提交
- 🍱 提供社区支持，欢迎提出意见和建议

## 🛠️ 本地开发 | Development

需要 Node.js 18+ 和 [Bun](https://bun.sh/)：

```bash
bun install
bun run dev      # 启动开发服务器
bun run build    # 构建静态站点
bun run serve    # 预览构建结果
```

也兼容 npm / pnpm：`npm install && npm run dev`。

## 📂 目录结构 | Structure

```text
docs/
├── .vitepress/          # 站点配置、主题与样式
├── guide/
│   ├── blender/         # Blender 文档
│   └── sfm/             # Source Filmmaker 文档
├── public/              # 静态资源（图片、图标）
├── contributing.md      # 文档编写指南与页面模板
└── index.md             # 首页
```

## ✏️ 参与编写 | Contributing

新增或修改文档前，请先阅读 [文档编写指南](docs/contributing.md)。里面包含：

- 写作原则与术语约定
- 操作教程、故障排查、概念、实例四类页面模板
- VitePress 语法速查
- 提交前检查清单

新增页面后，记得在 `docs/.vitepress/config.ts` 的侧边栏中注册链接。

## 🔍 分析 | Repobeats Analytics

![Alt](https://repobeats.axiom.co/api/embed/e15c9ba6c43638ffad2ca79ffba91c175773daf4.svg "Repobeats analytics image")

## 💿 许可 | License

- 代码：[MIT](./LICENSE)
- 文档内容：[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh)

Copyright © 2019-Present Loudomian
