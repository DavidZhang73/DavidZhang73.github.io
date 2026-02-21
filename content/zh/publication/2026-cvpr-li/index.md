---
title: "AssemblyBench: Physics-Aware Assembly of Complex Industrial Objects"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Danrui Li
  - admin
  - Bernhard Egger
  - Moitreya Chatterjee
  - Suhas Lohit
  - Tim K. Marks
  - Anoop Cherian

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: "2026-02-21T00:00:00Z"
doi:

# Schedule page publish date (NOT publication's date).
# publishDate: '2022-10-07T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *Conference on Computer Vision and Pattern Recognition 2026*
publication_short: In *CVPR 2026*

abstract: "从零件装配物体需要理解多模态说明，将其与3D组件关联，并为每个装配步骤预测物理上合理的6自由度运动。现有数据集多聚焦于简化场景，忽视了工业装配中的形状复杂性和装配轨迹。我们提出AssemblyBench，一个包含2,789个工业对象的合成数据集，提供多模态说明手册、对应的3D零件模型以及零件装配轨迹。我们还提出基于Transformer的模型AssemblyDyno，利用说明手册与各零件3D形状联合预测装配顺序和零件装配轨迹。AssemblyDyno在装配位姿估计和轨迹可行性两方面均优于先前方法，其中后者通过我们基于物理的仿真进行评估。"

# Summary. An optional shortened abstract.
summary: "我们提出AssemblyBench这一大规模合成数据集，包含2,789个工业对象及其多模态说明、3D零件模型与装配轨迹；并提出AssemblyDyno模型联合预测装配顺序和物理可行轨迹，在位姿估计与轨迹可行性上达到领先性能。"

tags:
  - Deep Learning

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
links:
  - name: ArXiv
    url:

url_pdf:
url_project:
url_code:
url_dataset:
url_poster:
url_slides:
url_video:

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  placement: 2
  caption: "给定带有图示与文本的分步说明书（左下）以及对应的 3D 零件集合（左上），我们在虚拟环境中执行装配，并输出逐步装配轨迹，可渲染为 4D 动画（右侧）。"
  focal_point: fit
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
slides:
---
