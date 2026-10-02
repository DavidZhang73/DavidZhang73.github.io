---
title: "AssemblyWorld: Rethinking 3D Assembly with General-Purpose Agents"
authors:
  - admin
  - Yeying Fan
  - Moitreya Chatterjee
  - Suhas Lohit
  - Bernhard Egger
  - Tim K. Marks
  - Anoop Cherian
  - Stephen Gould
author_notes:
  - "共同第一作者"
  - "共同第一作者"
  - ""
  - ""
  - ""
  - ""
  - ""
  - ""
date: "2026-09-30T17:59:14Z"
doi: "10.48550/arXiv.2609.40353"
publication_types: ["3"]
publication: '*arXiv preprint arXiv:2609.40353*'
publication_short: '*arXiv 2026*'
abstract: "3D 装配任务要求将对零件及其相互关系的理解转化为精确的空间布局。预训练的通用智能体能否在不进行额外装配专用微调的情况下，通过视觉交互完成物体装配？为研究这一问题，我们提出 AssemblyWorld：一个交互式 3D 环境，智能体在其中观察渲染视图并操控给定的刚性零件，在有参考信息时利用图像或装配手册提供的指导。智能体通过二维视图感知零件几何，而不直接访问网格顶点或面；最终装配结果则通过几何指标进行评估。在此环境之上，我们构建了 AssemblyWorldBench，包含涵盖家具、工业装配和碎片重组的 80 个物体、共 100 项装配任务。对八种智能体系统的评估揭示了显著的能力差异：最强系统的零件准确率达到 80.9%，但完整装配成功率为 59.4%。受评估的开源系统在执行可靠性和装配准确性方面均明显落后于表现更强的闭源系统。对视觉参考、交互轨迹和失败案例的分析表明，智能体会不断修正装配结果，但仍会留下位置误差。AssemblyWorld 为评估交互式装配智能体的能力，以及刻画近似结构恢复与精确重建之间的差距，提供了统一的研究环境。"

summary: "AssemblyWorld 研究预训练通用智能体如何在无需装配专用微调的情况下，通过视觉交互完成 3D 装配。AssemblyWorldBench 涵盖家具、工业装配和碎片重组的 80 个物体、100 项任务；八种系统中最强者的零件准确率为 80.9%，完整装配成功率为 59.4%。"

tags:
  - Deep Learning
  - 3D Assembly
  - Multimodal Agents
featured: true
links:
  - name: ArXiv
    url: https://arxiv.org/abs/2609.40353
url_pdf: https://arxiv.org/pdf/2609.40353
url_project: https://assemblyworld.github.io/
url_code: https://github.com/AssemblyWorld/assembly-world-bench
url_dataset: https://huggingface.co/datasets/AssemblyWorld/AssemblyWorldBench
url_poster: ''
url_slides: ''
url_video: ''
image:
  placement: 2
  caption: "(a) 三个领域中的既有专用装配方法。(b) AssemblyWorld 通过 MCP 将通用模型及其执行框架连接到交互式 3D 环境。智能体观察视图、操控给定零件，并在有参考信息时利用视觉指导。图中的目标展示装配目标，并非智能体输出；参考条件、布局、颜色及手册图标均为示意。"
  focal_point: fit
  preview_only: false
projects: []
slides: ''
---
