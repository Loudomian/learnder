---
title: 离线启动
description: 为 SFM 添加 -nosteam 启动项，实现离线启动，并了解它的优缺点。
---

# 离线启动（-nosteam）

> 离线可是个好东西啊。 ——哈纳人wy
>
> 我开了离线，Steam 没记录我几千小时的使用时长，哈↑哈↓。 ——哈纳人wy

离线使用 Source Filmmaker 是个不错的选择：启动速度快，可以断网使用，也不用担心下载的工坊模型被下架。

但它也有代价：Steam 不会记录你的 SFM 游戏时长，也无法正常下载创意工坊新订阅的模型。你可以参考 [获取社区资产](/guide/sfm/getting-start/getting-model) 中的插曲，手动下载模型。

## 修改启动项

1. 关闭 Source Filmmaker。
2. 在 Steam 库中右键 **Source Filmmaker**，打开「属性」。
3. 在「通用」页找到「启动选项」，输入 `-nosteam`。
4. 关闭窗口并启动游戏。

![在 Steam 属性中设置启动项](https://ae01.alicdn.com/kf/HTB1dHejTZbpK1RjSZFyq6x_qFXam.jpg)

## 同时使用多个启动项

启动项之间用空格分隔，例如同时开启离线模式与 1080P 分辨率：

```bash
-nosteam -sfm_resolution 1080 -w 1920 -h 1080
```
