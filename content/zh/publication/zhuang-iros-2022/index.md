---
title: 'GoferBot: A Visual Guided Human-Robot Collaborative Assembly System'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Zheyu Zhuang
  - Yizhak Ben-Shabat
  - admin
  - Stephen Gould
  - Robert Mahony

# Author notes (optional)
author_notes:
  - '相同贡献'
  - '相同贡献'

date: '2022-10-01T00:00:00Z'
doi: '10.1109/IROS47612.2022.9981122'

# Schedule page publish date (NOT publication's date).
# publishDate: '2022-10-07T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['1']

# Publication name and optional abbreviated publication name.
publication: In *International Conference on Intelligent Robots and Systems 2022*
publication_short: In *IROS 2022*

abstract: The current transformation towards smart manufacturing has led to a growing demand for human-robot collaboration (HRC) in the manufacturing process. Perceiving and understanding the human co-worker's behaviour introduces challenges for collaborative robots to efficiently and effectively perform tasks in unstructured and dynamic environments. Integrating recent data-driven machine vision capabilities into HRC systems is a logical next step in addressing these challenges. However, in these cases, off-the-shelf components struggle due to generalisation limitations. Real-world evaluation is required in order to fully appreciate the maturity and robustness of these approaches. Furthermore, understanding the pure-vision aspects is a crucial first step before combining multiple modalities in order to understand the limitations. In this paper, we propose GoferBot, a novel vision-based semantic HRC system for a real-world assembly task. It is composed of a visual servoing module that reaches and grasps assembly parts in an unstructured multi-instance and dynamic environment, an action recognition module that performs human action prediction for implicit communication, and a visual handover module that uses the perceptual understanding of human behaviour to produce an intuitive and efficient collaborative assembly experience. GoferBot is a novel assembly system that seamlessly integrates all sub-modules by utilising implicit semantic information purely from visual perception.

# Summary. An optional shortened abstract.
summary: "这篇文章介绍了一种名为GoferBot的视觉引导人机协作装配系统，旨在应对智能制造环境中人机协作的需求。文章中提出的GoferBot系统主要通过视觉感知来识别人类的动作和任务进展，并进行相应的反应。该系统包括三个子模块：视觉伺服模块、动作识别模块和视觉交接模块。GoferBot能够在动态且非结构化的环境中完成装配任务，例如通过识别和预测人类动作来实现零件的抓取和交接。研究表明，该系统在不依赖深度传感器、标记物或运动追踪器的情况下，仅使用两个RGB摄像头即可实现高效的协同工作。通过实验验证，GoferBot在家具装配任务（例如IKEA桌子装配）中表现出良好的效率，并且与基于语音指令的系统相比，人机交互更加直观自然。文章还讨论了GoferBot的评估方法，分为以机器人为中心的评估和以人为中心的评估。实验结果表明，GoferBot在多个装配循环中达到了90%的成功率，尽管在重复任务中系统的性能会有所下降。文章最后总结了GoferBot的局限性，并提出了未来改进方向。(ChatGPT4o)"

tags:
  - Deep Learning

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
links:
  - name: ArXiv
    url: https://arxiv.org/abs/2304.08840

url_pdf: 'https://ieeexplore.ieee.org/abstract/document/9981122'
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: 'https://www.youtube.com/watch?v=Fo5XI5OJ4QQ'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  placement: 2
  caption: ''
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ''
---
