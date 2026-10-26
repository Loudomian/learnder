---
title: 调整分辨率
description: 通过启动项参数让 SFM 以 1080P、2K 或 4K 分辨率运行与渲染。
---

# 调整分辨率

默认情况下，Source Filmmaker 以 720P 运行，动画渲染的最高选项也只有 720P。本文介绍如何通过 Steam 启动项开启 1080P 甚至更高的分辨率。

::: danger 注意
高分辨率会显著增加显存占用与渲染时间，请不要设置超过硬件承受范围的数值。
:::

## 修改启动项

1. 关闭 Source Filmmaker。
2. 在 Steam 库中右键 **Source Filmmaker**，打开「属性」。
3. 在「通用」页找到「启动选项」，填入下面的参数。
4. 关闭窗口并启动 SFM。

![在 Steam 属性中打开启动选项](https://ae01.alicdn.com/kf/HTB1dHejTZbpK1RjSZFyq6x_qFXam.jpg)

### 常用分辨率参数

| 分辨率 | 启动项 |
| ------ | ------ |
| 1080P | `-sfm_resolution 1080 -w 1920 -h 1080` |
| 2K | `-sfm_resolution 1440 -w 2560 -h 1440` |
| 4K | `-sfm_resolution 2160 -w 3840 -h 2160` |

`-sfm_resolution 1080` 告诉 SFM 以 1080P 启动；`-w 1920 -h 1080` 则避免每次启动时弹出「分辨率不支持」的提示。

![设置启动项后的效果](https://ae01.alicdn.com/kf/HTB1OnmfT3HqK1RjSZFgq6y7JXXap.jpg)

## 同时使用多个启动项

启动项之间用空格分隔。例如同时使用离线模式与 1080P：

```bash
-nosteam -sfm_resolution 1080 -w 1920 -h 1080
```

## 相关阅读

- [离线启动](/guide/sfm/trivia/nosteam)
- [导出成片](/guide/sfm/basics/export)
