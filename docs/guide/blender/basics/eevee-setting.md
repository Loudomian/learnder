---
title: EEVEE 渲染器简介
description: 了解 EEVEE 实时渲染器的工作原理、相对 Cycles 的局限与适用场景。
lang: zh-CN
---

# EEVEE 渲染器简介

EEVEE 是 Blender 的实时渲染引擎。它和 Cycles 使用同一套着色器节点，但渲染方式不同：EEVEE 基于光栅化算法估算光线与材质，Cycles 则基于物理光线追踪计算每条光线的反弹。

## EEVEE 的局限

相比 Cycles，EEVEE 有不少限制，包括但不限于：

- **显存管理由显卡驱动完成**。庞大场景不适合 EEVEE，因为驱动会不断交换资产以保证所有物体正确渲染；显存溢出会导致驱动崩溃、程序冻结甚至闪退。
- **不支持多显卡交火**，也就是不能用多张显卡一起渲染。
- **基于光栅化**，并非为 CPU 渲染设计，CPU 渲染效率很低。
- **活动光源、光照探头、着色器节点都有限制**。

更多限制请参考 [Limitations - Blender Manual](https://docs.blender.org/manual/en/3.3/render/eevee/limitations.html)。

## 什么时候用 EEVEE

- 需要快速预览材质与灯光效果时。
- 场景规模不大、显存充足时。
- 对物理准确度要求不高、更看重迭代速度时。

如果需要更准确的光照与反射，请改用 Cycles；如果要把渲染交给服务器，可以参考 [服务器云渲染](/guide/blender/advanced/cloud-render)。
