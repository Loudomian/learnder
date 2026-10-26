---
title: 汉化补丁常见问题
description: 使用 SFM 汉化补丁后出现灰屏、乱码、创意工坊失效等问题的修复方法。
---

# 汉化补丁常见问题

汉化补丁会替换 SFM 的界面与脚本文件，因此可能带来一些副作用。下面列出常见现象和对应的处理方式。

## 窗口布局全部消失（灰屏）

使用补丁后界面变成灰屏，是因为窗口布局文件没有正确加载。

可以复制汉化补丁文件夹里的 `layoutTest.ini` 到 Source Filmmaker 主目录；也可以直接按 `Ctrl + F1` 重置布局。

![重置 SFM 窗口布局](https://ae01.alicdn.com/kf/HTB1zWGgT3HqK1RjSZFgq6y7JXXac.jpg)

如果快捷键无效，请在菜单 **Layouts** 中点击 **Reset**。

![在 Layouts 菜单中重置布局](https://pic.downk.cc/item/5fb67a5fb18d627113b63592.jpg)

## 文字乱码

编码不匹配导致的乱码，可以通过在 Steam 中验证游戏完整性、移除汉化补丁来解决。

## 创意工坊订阅无法使用

这个问题的根源是补丁修改了 Workshop 相关文件。目前没有稳定的修复方法，可以：

- 使用 [获取社区资产](/guide/sfm/getting-start/getting-model) 中提到的 Workshop Downloader 单独下载模型；
- 或者删除汉化补丁，恢复英文界面。

## 模型预览器字体重叠

目前没有稳定的解决方法。如果影响使用，建议暂时移除汉化补丁。

::: tip 提示
汉化补丁作者本身也建议不要使用补丁。如果只是偶尔需要中文界面，可以先用英文版熟悉菜单，再对照本手册操作。
:::
