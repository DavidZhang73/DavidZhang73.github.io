---
title: "RoMo Hands: A Large Scale Richly Organized Text to Hand Motion Dataset"
authors:
  - "Yizhak Ben-Shabat"
  - "admin"
  - "Joseph Liu"
  - "Seonghyeon Moon"
  - "Young-Yoon Lee"
  - "Haomiao Jiang"
  - "Oren Jacob"
  - "Mubbasir Kapadia"
# Website registration date; not the official acceptance date.
date: "2026-10-15T00:00:00Z"
publication_types: ["1"]
publication: In *Conference on Neural Information Processing Systems 2026*
publication_short: In *NeurIPS 2026*
abstract: "尽管文本驱动的人体动作生成已日趋成熟，纯手部动作合成仍受数据瓶颈制约。现有数据集往往将手视为刚性末端执行器，缺乏细粒度文本描述，或规模过小，难以支持稳健的泛化。我们提出 RoMo Hands，一个从真实场景视频中构建、与文本配对的数据集，包含约 54.2 万条序列（884 小时，以每秒 30 帧计共 9,550 万帧），规模比已有工作高出一个数量级。为确保高质量监督，我们采用严格的灵巧度筛选，剔除关节活动不足的序列，使数据分布聚焦于复杂的双手动作。每段片段均配有五级文本描述，粒度从全局语义标签逐步细化至原子级手指状态，并按照层级分类体系组织。为弥合人体与手部动作模型架构之间的差距，我们提出一种新的 393 维双手表示，将人体动作的冗余表示范式适配到手部的高自由度运动学结构。对扩散、掩码 token 和自回归生成模型的系统性评测揭示了这些手部专用适配下的不同权衡，其中包括语义对齐与运动学合理性之间的显著分歧。我们的数据集、表示与评测基准为下一代灵巧动作合成奠定了严谨的基础。"
summary: "RoMo Hands 是一个大规模文本配对手部动作数据集，包含约 54.2 万条双手动作序列，提供五级文本描述与统一的 393 维表示，用于文本到手部动作生成评测。"
tags:
  - Deep Learning
  - Hand Motion Generation
featured: true
url_pdf: https://romodataset.github.io/romo-hands/static/paper/RoMo_Hands.pdf
url_project: https://romodataset.github.io/romo-hands/
url_dataset: https://huggingface.co/datasets/RoMoDataset/RoMo-Hands
image:
  placement: 2
  caption: "RoMo Hands 数据集概览：层级动作分类与双手动作示例。"
  focal_point: fit
  preview_only: false
projects: []
slides: ''
---

