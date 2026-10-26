---
title: Rig（骨架）
description: 了解 SFM 中 FK、IK 与动画骨架的区别、适用场景和切换方法。
---

# Rig（骨架）

Rig 在 3D 软件里指一套用于驱动模型的骨骼与控制器。在 Source Filmmaker 中，Rig 与 Skeleton（骨架）基本是同义词，作用类似 Blender 的 Armature。

在模型上右键，可以看到 Rig 的多级菜单，这是更换当前模型骨架的主要入口。

Rig 分为三类：FK Rig（正向动力学骨架）、IK Rig（反向动力学骨架）和 Animation Rig（动画骨架）。下面分别说明它们的特性与用法。

## FK Rig（正向动力学骨架）

FK 是最基础的骨架。子骨骼无法影响父骨骼，需要从父级到子级逐级旋转。

它适合摆静态姿势：动作稳定、可控；但做动画时工作量很大，因为每一级骨骼都要手动设置关键帧。

![FK Rig 的骨骼层级](https://ae01.alicdn.com/kf/HTB1uUehT3HqK1RjSZFPq6AwapXaj.jpg)

## IK Rig（反向动力学骨架）

IK 允许子级影响父级，或由特定父级控制一组子级。例如：手部控制器可以带动整条手臂，骨盆可以带动身体主干，但不会改动手脚。

IK 更适合做动画，调整姿态也更直观。

### 如何使用

在 Source Filmmaker 中右键模型，选择 **Rig**，再选择对应的 IK Rig。等待几秒后，原来的 FK Rig 就会切换为 IK Rig。

::: tip 补充说明

IK Rig 分为通用和限定两种，保存在 `/script` 目录中。很多 SFMLab 模型作者会附带适配自己模型的 IK Rig，通常命名为 `rig_biped_<模型名>`。

IK Rig 有两套骨骼适配：`bip_` 和 `ValveBiped_`，需要根据模型骨骼的命名前缀选择。

:::

::: warning 常见问题

使用通用 IK Rig 后，修改手指部分时可能会出现卡顿，这属于正常现象。

可以把当前片段缩短到 10 秒，或使用 [Auto Rigger](/guide/sfm/advanced/auto-rigger) 制作独立的 IK Rig 来解决。

:::

![在模型右键菜单中选择 IK Rig](https://ae01.alicdn.com/kf/HTB1jEihT3HqK1RjSZFPq6AwapXaZ.jpg)

### 效果

角色的动作摆放会更方便，尤其是需要手脚定位的姿势。

![使用 IK Rig 后角色动作更易摆放](https://ae01.alicdn.com/kf/HTB1ZgSqT4jaK1RjSZFAq6zdLFXap.jpg)

## Animation Rig（动画骨架）

动画骨架自带一系列循环动画序列，相当于动画预设。

### 如何使用

替换流程与 IK Rig 相同，但会额外生成一套骨架。此时无法再通过模型本身的骨架控制模型，需要改用新的骨架。

::: tip 补充说明
模型的 Flex 和视觉目标（Visual Target）仍然要在模型本身的视图中操作。
:::

![Animation Rig 会生成一套额外的骨架](https://ae01.alicdn.com/kf/HTB1ksKkTVzqK1RjSZFCq6zbxVXa0.jpg)

### 使用序列动画

右键带有 `Host` 后缀的模型动画集，选择 **Import > Sequence**。

![右键动画集选择 Import > Sequence](https://ae01.alicdn.com/kf/HTB1Qx1eT9zqK1RjSZFjq6zlCFXaj.jpg)

在弹出的窗口中选择需要的动画序列，点击 **Open**。

![选择要导入的动画序列](https://ae01.alicdn.com/kf/HTB1Ib9jT3HqK1RjSZFEq6AGMXXa9.jpg)

动画会加载到角色身上，之后可以通过曲线编辑器调整。

![动画序列加载到角色上](https://ae01.alicdn.com/kf/HTB1Gb5jT3HqK1RjSZFEq6AGMXXaJ.jpg)

## 结语

以上就是三种 Rig 的介绍与特性。你可以通过右键模型，选择 **Rig > Detach Rig > Detach All** 删除替换效果。

![Detach Rig 菜单](https://ae01.alicdn.com/kf/HTB1BeidTY2pK1RjSZFsq6yNlXXaz.jpg)
