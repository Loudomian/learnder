---
title: 音频格式
description: SFM 支持的音频格式、采样率与长度限制，以及音频导入与使用步骤。
---

# 音频格式

Source Filmmaker 支持的声音格式非常有限：必须是 **16 位 PCM 的 WAV 文件**。

不兼容的格式可能导致 SFM 无响应，甚至无法控制音频输出。换句话说，格式不对时文件也许能导入，但一定会出问题。

## 推荐的音频参数

| 参数 | 推荐值 |
| --- | --- |
| 格式 | WAV |
| 位深度 | 16 位 |
| 采样率 | 44100 Hz（11025 / 22050 Hz 也可用，但效果不理想） |
| 声道 | 单声道（最稳定） |
| 单段长度 | 不超过 30 秒 |

同时，SFM 无法处理过长的音频文件，无论其格式是否正确。请把音频切成较短的片段再导入。

::: tip 提示
最稳的配置是单声道 22050 Hz；即便如此仍可能闪退，建议随时保存。
:::

## 修改音频

你可以使用 [Adobe Audition](https://baike.baidu.com/item/Adobe%20Audition/6782463) 等音频软件转换格式、调整采样率并裁剪长度。

## 导入

把 `.wav` 文件放到 SFM 能识别的素材库路径，例如：

```text
SourceFilmmaker\game\usermod\sound\XXX
```

`usermod` 可以换成 `workshop` 或其他同类素材库；`XXX` 是自定义子目录，可有可无。

## 在 SFM 中使用

1. 打开 Source Filmmaker，在片段编辑器的 Timeline 下滑，找到 **Music** 轨道。
2. 右键音轨，选择 **Add Clip to Track**。
3. 选择刚才放入的音频文件。

![在 Timeline 中找到 Music 轨道](https://img.imgdb.cn/item/6028b764d2a061fec7c562a2.jpg)

![右键音轨选择 Add Clip to Track](https://img.imgdb.cn/item/6028b77ad2a061fec7c56d50.jpg)

![音频添加到音轨后的效果](https://img.imgdb.cn/item/6028b791d2a061fec7c57ae5.jpg)
