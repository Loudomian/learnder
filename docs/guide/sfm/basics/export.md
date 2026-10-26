---
title: 导出成片
description: SFM 的成片导出流程：先渲染图片序列，再在剪辑软件中编码为 MP4。
---

# 导出成片

SFM 的成片导出通常分两步：**先在 SFM 中渲染，再用剪辑软件编码**。这样即使渲染中断，也不会丢失已完成的进度。

## 推荐流程

1. 在 SFM 中将镜头渲染为 **PNG 图片序列**。图片序列便于补帧，也不依赖老旧的视频编码器。
2. 把图片序列导入 Premiere Pro、DaVinci Resolve 等剪辑软件。
3. 在剪辑软件中合成音频、调色，并导出 MP4。

## 为什么不直接导出 MP4

- SFM 内置编码器老旧，输出的视频体积很大。
- QuickTime 在 Windows 上已经停止维护多年，存在安全隐患。
- 渲染中断时，无法暂停或保留已经渲染的部分。

如果你的 SFM 只提供 `avi` 输出，可以先阅读 [增加视频编码器](/guide/sfm/getting-start/add-media-encoder)，再决定是否安装 QuickTime。

## 相关阅读

- [增加视频编码器](/guide/sfm/getting-start/add-media-encoder)
- [调整分辨率](/guide/sfm/trivia/resolutions)
- [音频格式](/guide/sfm/trivia/sound-format)
