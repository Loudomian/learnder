---
title: 服务器云渲染
lang: zh-CN
---

# {{ $frontmatter.title }}

为什么要云渲染？

很大原因是因为本地设备不满足高效渲染的需求。得益于人工智能学习蓬勃发展，CG 行业从中分了一杯羹，市面上涌现出了一大批廉价且高效实用的 GPU 服务器租用平台，我们可以用这些 [炼丹](https://zhuanlan.zhihu.com/p/23781756) 平台用作于云渲染。

因为操作涉及到纯命令行界面和 Linux 服务器，为了照顾萌新，本指南将会保姆级编写，不同平台的使用方法会导致重复性内容较多。

::: info 参考资料

你可以查阅以下补充资料：

 - 命令行参数（前往 [Blender Manual](https://docs.blender.org/manual/zh-hans/latest/advanced/command_line/arguments.html) 查阅）
 - 命令行渲染（前往 [Blender Manual](https://docs.blender.org/manual/zh-hans/latest/advanced/command_line/render.html) 查阅）
 - 打包数据（前往 [Blender Manual](https://docs.blender.org/manual/zh-hans/dev/files/blend/packed_data.html) 查阅）
 
:::

## 百度飞桨 AI Studio（白嫖）

![](https://pic1.imgdb.cn/item/634c691816f2c2beb129801c.jpg)

[百度飞桨 AI Studio](https://aistudio.baidu.com/aistudio/newbie?invitation=1&sharedUserId=2657741&sharedUserName=Loudomian) 是百度推出的一个免费的 AI 学习平台，提供了免费的 GPU 服务器，可以用于云渲染，提供了以下 5款配置：

| 名称        | GPU          | 显存     | CPU核心数 | 内存    | 硬盘    | 费用      |
|:---------:|:------------:|:------:|:------:|:-----:|:-----:|:-------:|
| 基础版       | 无            | 无      | 2C     | 8GB   | 100GB | 0点/小时   |
| V100 16GB | Tesla V100   | 16GB   | 2C     | 16GB  | 100GB | 0.5点/小时 |
| V100 32GB | Tesla V100   | 32GB   | 4C     | 32GB  | 100GB | 1点/小时   |
| A100 40GB | Tesla A100   | 40GB   | 12C    | 96GB  | 100GB | 4点/小时   |
| V100 四卡   | Tesla V100*4 | 4*32GB | 16C    | 128GB | 100GB | 8点/小时   |

这个平台以算力卡余额作为启动服务器的费用。

每日运行一次项目即送 8 点算力卡余额，赠送的算力卡余额有效期为 48 小时，无限续杯。

相同的项目可以随意切换运行环境，项目内的文件会自动转移。

---

### 不足之处

#### 驱动版本过旧

在本指南编写的时候（2022/10/15），上述的 GPU 服务器的显卡驱动版本号皆为 460，这意味着 A100 这台服务器无法正常运作，需要 470 及以上版本的驱动才能正常使用，你可以通过输入 `nvidia-smi` 查看驱动版本号，你可以 [点击这里](https://developer.blender.org/T91879) 了解详细原因。

![](https://pic1.imgdb.cn/item/634aae5716f2c2beb1a3de1c.jpg)

#### 内存限制

假若你的项目需要 32GB 以上的内存呢，你唯一的选择只有 1 小时就要花掉 8 点算力卡余额的 V100 四卡，~~生死时速~~。

---

### 渲染你的项目

#### 创建 Notebook

进入 项目 页面，点击右侧的 创建项目 按钮，选择 Notebook 类型。

Notebook 版本选择 BML Codelab，框架默认或者最新版本都可以，点击下一步。

![](https://pic1.imgdb.cn/item/634ab58816f2c2beb1b2789a.jpg)

随意填入名称，别光明正大的写着渲染项目就行，你可以参考我的写法。

声明：本指南介绍的方法需仅用于测试 Blender - Intel® Open Image Denoise AI 稳定性，属于深度学习测试研究。

![](https://pic1.imgdb.cn/item/634ab59616f2c2beb1b294b2.jpg)

点击启动环境，启动成功后即可进入 BML Codelab，即 JupyterLab 百度套皮版。

:::tip 小技巧

如果你没有准备好环境和项目，建议先启动纯 CPU 环境进行配置，这样可以节省算力卡余额，当准备就绪，可以再关闭环境，以 GPU 环境重新启动。

:::

![](https://pic1.imgdb.cn/item/634ab8e916f2c2beb1b8be4d.jpg)

#### 配置渲染环境

用人话来讲就是安装 Blender 和准备渲染项目。

点击加号添加一个新的标签页，然后启动终端。

![](https://pic1.imgdb.cn/item/634ab9cb16f2c2beb1ba6f99.jpg)

你可以通过在 [blender.org](https://www.blender.org/download/) 获取最新的 Linux 版本的 Blender 本体。

也可以通过输入下方命令下载 Blender 3.3.1，若想更换版本，请自行修改链接中的版本号

- 伯克利加州大学镜像（最快）

```bash
wget https://mirrors.ocf.berkeley.edu/blender/release/Blender3.3/blender-3.3.1-linux-x64.tar.xz --no-check-certificate
```

- 阿里云镜像（可能会限速）

```bash
wget https://mirrors.aliyun.com/blender/release/Blender3.3/blender-3.3.1-linux-x64.tar.xz --no-check-certificate
```

- 官网原版（荷兰卡炸）

```bash
https://www.blender.org/download/release/Blender3.3/blender-3.3.1-linux-x64.tar.xz/ --no-check-certificate
```

![](https://pic1.imgdb.cn/item/634abf2c16f2c2beb1c5a20b.jpg)

输入以下命令解压 Blender，也可以通过右键左侧的压缩文件进行解压。

```bash
tar xf blender-3.3.1-linux-x64.tar.xz
```

![](https://pic1.imgdb.cn/item/634abfb516f2c2beb1c6b934.jpg)

继续输入以下命令重命名 Blender 文件夹，以方便后续操作，你仍可以通过右键文件夹改名。

```bash
mv blender-3.3.1-linux-x64 blender
```

![](https://pic1.imgdb.cn/item/634ac05616f2c2beb1c7fce9.jpg)


上传你已经 [打包](https://docs.blender.org/manual/zh-hans/dev/files/blend/packed_data.html) 好或资产已经就绪的 Blender 工程，如果你的工程文件大于或等于 150MB，你需要上传到第三方允许直链的平台，比如任意对象存储、[钛盘](https://tmp.link/)、[Catbox](catbox.moe) 等。

#### 渲染项目

你可以通过以下命令进入 Blender 的主目录：

```bash
cd blender
```

然后输入渲染命令：

- 以 `Cycles` 渲染引擎 `OPTIX` 硬件加速，渲染 `项目名.blend` 项目中的 `1-250` 帧到 Blender 主目录下的 `Render` 文件夹。

```bash
./blender -b 项目名.blend -E 'CYCLES' -o "./Render/" -s 1 -e 250 -a -- --cycles-device OPTIX
```

- 以 `Cycles` 渲染引擎 `CUDA` 硬件加速，渲染 `/home/aistudio/test.blend` 项目中的第 `9` 帧以 `PNG` 格式输出到 Blender 主目录下的 `Output` 文件夹。

```bash
./blender -b /home/aistudio/test.blend -E 'CYCLES' -o "./Output/" -f 9 -F 'PNG' -- --cycles-device CUDA
```

::: tip 提示

- 百度 AI Studio 的主目录路径是 `/home/aistudio/`，你可以通过在终端输入 `pwd` 查看当前路径。
- OPTIX 硬件加速因驱动版本限制，可能会无法正常工作，请尝试使用 CUDA 硬件加速。

:::

#### 渲染成品下载

渲染结束后，你可以通过在 Blender 主目录中寻找之前设置好的输出文件夹，双击可以进行预览，右键可以下载或者打包文件夹下载。

![](https://pic1.imgdb.cn/item/634ad63a16f2c2beb1f442b0.jpg)

## AutoDL（付费，但廉价）

![](https://pic1.imgdb.cn/item/634c688716f2c2beb129287c.jpg)

[AutoDL](https://www.autodl.com/register?code=12ce68b5-80d3-41a5-80f7-bc3ed18c60a0) 是市面上少有的极为廉价的 GPU 租用服务提供商。注册即送 10 元代金卷，可以快乐白嫖顶级显卡好几小时，对于学生用户，还能有 95 折优惠。

我个人十分推荐使用这家的服务器进行渲染，优点如下：

- 多地区、多显卡，可自由搭配配置。
- 有内部云盘，可以事先上传好 Blender 本体和工程文件。
- 有镜像保存功能，可以保存你预先配置好的渲染环境，让每一台新开的服务器都能开箱即用。
- 关机不计算费用，能无卡模式启用，且费用低廉。

不足之处估计就只有一点了：**要钱**。

### 渲染你的项目

#### 上传工程文件

你可以事先将 Blender 本体和工程文件上传到 AutoDL 的内部云盘，这个内部云盘可以直接在同区域的所有服务器上使用。

请确定你上传的区域是你想要租用服务器的区域，因为内部云盘无法跨区域使用。

![](https://pic1.imgdb.cn/item/634c5f8716f2c2beb121633c.jpg)

#### 选择配置和启用环境

在这里，我选择了一台 Tesla A100，环境是 Ubuntu 20.04，多数情况下，只要考虑硬件配置，运行环境任意即可。

![](https://pic1.imgdb.cn/item/634c5e6816f2c2beb120a138.jpg)

接着，进入**我的实例**页面，点击 JupyterLab 进入这个无比好用的交互式的开发环境。

![](https://pic1.imgdb.cn/item/634c60bf16f2c2beb1221e40.jpg)

::: tip 提示

虽然 AutoDL 提供 SSH 登录方式来访问服务器，但这并不适合于渲染和炼丹这种**高危**操作，一旦 SSH 断开，没有做好 Screen 之类的操作，渲染就会被强制终止。

而 JupyterLab 则是一个完全的 Web 环境，即使你对 AutoDL 的网络断开，渲染也不会被强制终止，因为所有的操作都在服务器上进行。

:::

#### 配置渲染环境

假如你没有事先上传 Blender 本体，你可以在 JupyterLab 的终端中直接下载 Blender 本体，你实现上传的 Blender 工程文件将储存在 `autodl-nas` 文件夹里，请复制到主目录下。

你可以通过在 [blender.org](https://www.blender.org/download/) 获取最新的 Linux 版本的 Blender 本体。

也可以通过输入下方命令下载 Blender 3.3.1，若想更换版本，请自行修改链接中的版本号

- 伯克利加州大学镜像（最快）

```bash
wget https://mirrors.ocf.berkeley.edu/blender/release/Blender3.3/blender-3.3.1-linux-x64.tar.xz --no-check-certificate
```

- 阿里云镜像（可能会限速）

```bash
wget https://mirrors.aliyun.com/blender/release/Blender3.3/blender-3.3.1-linux-x64.tar.xz --no-check-certificate
```

- 官网原版（荷兰卡炸）

```bash
https://www.blender.org/download/release/Blender3.3/blender-3.3.1-linux-x64.tar.xz/ --no-check-certificate
```

![](https://pic1.imgdb.cn/item/634c626916f2c2beb1232572.jpg)

输入以下命令解压 Blender。

```bash
tar xf blender-3.3.1-linux-x64.tar.xz
```

为了方便操作，继续输入以下命令重命名 Blender 文件夹，你也可以通过右键文件夹改名。

```bash
mv blender-3.3.1-linux-x64 blender
```

#### 渲染项目

通过以下命令进入 Blender 的主目录：

```bash
cd blender
```

然后输入渲染命令：

- 以 `Cycles` 渲染引擎 `OPTIX` 硬件加速，渲染 `项目名.blend` 项目中的 `1-250` 帧到 Blender 主目录下的 `Render` 文件夹。

```bash
./blender -b 项目名.blend -E 'CYCLES' -o "./Render/" -s 1 -e 250 -a -- --cycles-device OPTIX
```

- 以 `Cycles` 渲染引擎 `OPTIX` 硬件加速，渲染 `/root/test.blend` 项目中的第 `9` 帧以 `PNG` 格式输出到 Blender 主目录下的 `Output` 文件夹。

```bash
./blender -b /root/test.blend -E 'CYCLES' -o "./Output/" -f 9 -F 'PNG' -- --cycles-device OPTIX
```

::: tip 提示

- AutoDL 的主目录路径是 `/root/`，你可以通过在终端输入 `pwd` 查看当前路径。
- 在较新的显卡环境下，`OPTIX` 硬件加速会让渲染效率更高，如果出现问题或不支持这个加速方式，你可以选择使用 `CUDA` 硬件加速。

:::

#### 渲染成品下载

你可以简单地通过右键下载单个文件，也可以通过以下命令打包整个文件夹进行下载。

```bash
tar -cvf Output.tar.gz /root/blender/Output
```

![](https://pic1.imgdb.cn/item/634c64ec16f2c2beb126af52.jpg)