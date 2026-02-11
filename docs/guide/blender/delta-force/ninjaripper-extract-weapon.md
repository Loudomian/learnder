# 使用 NinjaRipper 提取三角洲枪械模型

本教程将指导你如何使用 NinjaRipper 从《三角洲行动》中提取枪械模型，并在 Blender 中正确导入和处理。

适合不想一个个在解包里找模型然后慢慢拼的懒人。

## 前置准备

::: tip 所需工具
- NinjaRipper
- WeGame 客户端
- 三角洲行动游戏
- Blender 3.0+
:::

## 第一步：游戏设置

在使用 NinjaRipper 之前，先调整游戏画面设置：

1. **关闭 DLSS 相关功能**
   - DLSS、DLSS 帧生成等全部禁用

2. **设置画面为最高质量**
   - 所有画质选项调至最高

3. **重启游戏使设置生效**

## 第二步：启动 NinjaRipper

### 启动流程

完成游戏设置后，必须通过 NinjaRipper 启动游戏：

```bash
1. 启动 NinjaRipper
2. 通过 NinjaRipper 启动 WeGame
3. 通过 WeGame 启动三角洲行动
```

::: warning 重要
建议使用小号进行。
:::

## 第三步：准备枪械配置

1. 进入**烽火模式**
2. 在武器工作台完成枪械配件配置
3. 配置完成后进入**靶场**

## 第四步：截取模型

1. 在靶场中按 **Tab** 键进入武器配置界面
2. 确保枪械在画面中显示完整
3. 使用 NinjaRipper 截取当前画面
4. 等待截取完成，检查输出文件夹

## 第五步：导入 Blender

### NinjaRipper 导入设置

打开 Blender，使用 NinjaRipper 插件导入模型，按以下参数配置：

| 参数 | 值 |
|------|------|
| **World Space** | 启用 |
| **Position** | Reprojection (Full) |
| **分辨率** | 2560 × 1440 |
| **FOV_Y** | 29.3675 |
| **Flip Geometry** | 启用 ✅ |
| **Get Texcoords From Local Space** | 启用 ✅ |

::: tip 其他分辨率
如果你的游戏分辨率不同，需要相应调整这些参数。一般来说，FOV_Y 值可以保持不变，但分辨率必须与游戏内实际分辨率一致。
:::

点击导入，等待模型加载完成。

## 第六步：修正模型旋转

导入后的模型旋转角度可能不正确，需要运行以下脚本进行修正。

### 旋转修正脚本

1. 在 Blender 中选中需要修正的所有枪械模型
2. 打开 **Scripting** 工作区
3. 创建新脚本并粘贴以下代码：

   ```python
   import bpy
   import mathutils

   def apply_rotation_to_selected():
       """对选中的对象应用旋转变换"""
       
       # 源顶点（NinjaRipper 提取的原始位置）
       s0 = mathutils.Vector((1125.064, -638.281, 1663.746))
       s1 = mathutils.Vector((-1936.313, -663.598, 981.749))
       s2 = mathutils.Vector((1113.198, 1807.998, 1625.982))
       
       # 目标顶点（正确的世界空间位置）
       t0 = mathutils.Vector((-7500.172, 7500.172, -2576.781))
       t1 = mathutils.Vector((-7500.172, -7500.171, -2576.783))
       t2 = mathutils.Vector((-7500.172, 7500.171, 2576.783))
       
       # 计算质心
       s_center = (s0 + s1 + s2) / 3
       t_center = (t0 + t1 + t2) / 3
       
       # 中心化顶点
       s0c, s1c, s2c = s0 - s_center, s1 - s_center, s2 - s_center
       t0c, t1c, t2c = t0 - t_center, t1 - t_center, t2 - t_center
       
       # 构建源坐标系
       s_x = (s1c - s0c).normalized()
       s_z = s_x.cross(s2c - s0c).normalized()
       s_y = s_z.cross(s_x).normalized()
       
       # 构建目标坐标系
       t_x = (t1c - t0c).normalized()
       t_z = t_x.cross(t2c - t0c).normalized()
       t_y = t_z.cross(t_x).normalized()
       
       # 计算旋转矩阵
       source_basis = mathutils.Matrix((s_x, s_y, s_z)).transposed()
       target_basis = mathutils.Matrix((t_x, t_y, t_z)).transposed()
       rotation = target_basis @ source_basis.inverted()
       
       # 构建完整的变换矩阵
       transform = mathutils.Matrix.Translation(t_center) @ \
                   rotation.to_4x4() @ \
                   mathutils.Matrix.Translation(-s_center)
       
       # 应用变换到选中的对象
       count = 0
       for obj in bpy.context.selected_objects:
           if obj.type == 'MESH':
               obj.matrix_world = transform @ obj.matrix_world
               count += 1
               print(f"  - 已处理: {obj.name}")
       
       print(f"\n✅ 已成功变换 {count} 个选中对象的旋转")

   # 执行脚本
   apply_rotation_to_selected()
   ```

4. 点击 **运行脚本** 或按 **Alt + P**

::: tip 脚本说明
这个脚本通过计算源坐标系和目标坐标系之间的旋转关系，将模型从 NinjaRipper 的坐标系转换到正确的世界空间坐标系。
:::

## 第七步：清理无效模型

NinjaRipper 可能会提取一些没有材质的辅助模型（如碰撞体、辅助网格等），这些模型需要清理。

### 清理脚本

1. 打开 **Scripting** 工作区
2. 创建新脚本并粘贴以下代码：

   ```python
   import bpy

   # 取消选择所有物体
   bpy.ops.object.select_all(action='DESELECT')

   # 准备删除列表
   objects_to_delete_names = []

   # 遍历场景中的所有物体
   for obj in bpy.context.scene.objects:
       # 检查是否是网格类型且没有材质槽
       if obj.type == 'MESH' and len(obj.material_slots) == 0:
           obj.select_set(True)
           objects_to_delete_names.append(obj.name)

   # 执行删除
   if objects_to_delete_names:
       print("以下模型因缺少材质槽，将被删除：")
       for name in objects_to_delete_names:
           print(f"  - {name}")
       
       bpy.ops.object.delete()
       print(f"\n✅ 成功删除了 {len(objects_to_delete_names)} 个无效模型")
   else:
       print("✅ 场景中没有发现需要清理的模型")
   ```

3. 运行脚本

## 常见问题

### Q: 导入后模型位置不对？
确保已正确设置 Position 为 `Reprojection (Full)` 并运行了旋转修正脚本。

### Q: 材质丢失或不完整？
检查 NinjaRipper 输出文件夹中的纹理文件是否完整，必要时手动重新关联材质。

### Q: FOV_Y 值如何获取？
29.3675 是三角洲行动武器配置界面的默认 FOV 值。如果效果不对，可以尝试通过场景里的球体判断FOV。

## 总结

完成以上步骤后，你应该获得了一个干净、旋转正确的三角洲枪械模型。接下来你可以：

- 调整材质和纹理
- 导出为其他格式（FBX、OBJ 等）
- 用于后续的渲染或游戏开发

::: tip 提示
建议将处理好的模型保存为 .blend 文件，方便后续使用。
:::
