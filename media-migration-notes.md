# Learnder 图片与视频存储盘点

盘点 README 和 docs 源文件内的图片、视频与 SVG 外链。按完整 URL 去重共有 231 项：227 张图片、3 个视频、1 个 SVG；这些地址在文档中出现 235 次。重复资源只列一次，并记录其引用次数和文件位置。

| 当前主机 | 去重资源数 | 类型 |
| --- | ---: | --- |
| `pic.downk.cc` | 94 | 90 PNG、4 JPG |
| `ae01.alicdn.com` | 69 | 56 JPG、13 PNG |
| `pic1.imgdb.cn` | 21 | 21 JPG |
| `img-blog.csdnimg.cn` | 16 | 14 JPG、2 PNG |
| `i.loli.net` | 11 | 11 PNG |
| `img.imgdb.cn` | 10 | 10 JPG |
| `pic.imgdb.cn` | 6 | 3 JPG、3 PNG |
| `cdn.learnder.org` | 2 | 2 MP4 |
| `sean.novak.us` | 1 | 1 视频 |
| `repobeats.axiom.co` | 1 | 1 SVG 统计图 |

`docs/public/` 另有 3 个本地 PNG（标志和图标），不计入 CDN 外链清单。完整 URL 和引用页见同目录的 `media-cdn-inventory.csv`。CSV 给每项列了建议路径，形如 `/images/2026/sfm/<文件名>`；两段新 Blender 视频按现有 URL 归入 `/docs/2026/10/`。这些都是路径草案，尚未迁移对象或改写链接。

## 按年份整理的建议

建议新路径格式：`/images/<年份>/<栏目>/<语义名>-<短哈希>.<扩展名>` 和 `/videos/<年份>/<栏目>/<语义名>-<短哈希>.<扩展名>`。年份优先表示内容首次发布或原始资源年份。对无法确认年份的历史素材，单列 `/legacy/`，或明确将目录年份定义为迁移批次，避免让 2026 看起来像旧图片的拍摄年份。

迁移时按 URL 去重上传，保留旧 URL 到新路径映射，并记录 SHA-256、文件类型、尺寸、来源文档和目标键。每批迁移后替换源文件引用、运行 `bun run build`，再抽查页面加载及视频播放。旧域名如果可控，给旧路径配置重定向。

Blender 抖动文章引用的社区案例视频托管在 `sean.novak.us`。它通过回答页链接提供一个浮动原点演示，也应纳入迁移核对，或确认保留第三方链接。
