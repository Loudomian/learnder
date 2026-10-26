---
title: 屏闪
description: 修复 SFM 预览窗口移动镜头时疯狂闪烁的问题（Windows 10 兼容性 Bug）。
---

# 屏闪

如果你在使用 Source Filmmaker 时，移动预览窗口的镜头会疯狂闪烁，这篇文档会帮你定位并解决。

## 现象

在 SFM 的预览窗口中拖动镜头，画面持续闪烁，无法正常观察场景。

## 原因

这是 Windows 10 某次更新引入的兼容性问题，与 SFM 的引擎窗口渲染方式冲突。

## 解决方法

1. 打开 Source Filmmaker。
2. 在顶部菜单点击 **Windows > Engine Window > Auto Hide Engine Window**。
3. 回到预览窗口移动镜头，确认闪烁已经消失。

![在 SFM 菜单中开启 Auto Hide Engine Window](https://ae01.alicdn.com/kf/HTB1lJ5jT7voK1RjSZFNq6AxMVXag.jpg)

## 如果仍然闪烁

- 更新显卡驱动后重试。
- 在 Steam 中验证 Source Filmmaker 的文件完整性。
- 带上系统版本、显卡型号和录屏，到社区提问。
