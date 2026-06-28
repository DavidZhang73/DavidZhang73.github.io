---
title: "Manual-PA: Learning 3D Part Assembly from Instruction Diagrams"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Anoop Cherian
  - Cristian Rodriguez
  - Weijian Deng
  - Stephen Gould

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: "2025-06-26T00:00:00Z"
doi: "10.1109/ICCV51701.2025.00595"

# Schedule page publish date (NOT publication's date).
# publishDate: '2022-10-07T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *International Conference on Computer Vision 2025*
publication_short: In *ICCV 2025*

abstract: "家具装配可视为一个离散-连续联合优化问题：既要选择待装配的家具零件，也要以物理真实的方式估计其连接位姿。该问题的解空间组合规模巨大但又稀疏，使当前机器学习模型难以有效学习装配。本文尝试利用通常随家具零件提供的图示化装配说明来解决这一任务。我们的关键洞见是利用图示中的线索，将问题分解为离散与连续两个阶段。具体地，我们提出Manual-PA，一个基于Transformer、由说明书引导的3D零件装配框架：通过对比学习主干将3D零件与说明书图示进行语义对齐，用于预测装配顺序，并通过关联说明书中展示的最终家具来推断每个零件的6D位姿。为验证方法有效性，我们在PartNet基准数据集上进行实验。结果表明，利用图示与零件顺序可显著提升装配性能，优于现有最先进方法。此外，Manual-PA在IKEA-Manual数据集上的真实世界宜家家具装配任务中也展现出很强的泛化能力。"

# Summary. An optional shortened abstract.
summary: "我们提出了Manual-PA，一种基于Transformer的框架，通过利用装配说明书中的图示信息，引导家具零件的选择与6D位姿估计，实现高效且真实的3D装配，能够将零件与说明书图示进行语义对齐。"

tags:
  - Deep Learning

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
links:
  - name: ArXiv
    url: https://arxiv.org/abs/2411.18011

url_pdf: https://openaccess.thecvf.com/content/ICCV2025/papers/Zhang_Manual-PA_Learning_3D_Part_Assembly_from_Instruction_Diagrams_ICCV_2025_paper.pdf
url_project:
url_code: https://github.com/DavidZhang73/Manual-PA
url_dataset: https://huggingface.co/datasets/DavidZhang73/ManualPADatasets
url_poster: media/iccv25-8993-poster.pdf
url_slides: media/iccv25-8993-slides.pdf
url_video: https://www.youtube.com/watch?v=ViO4U0HjSfk

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  placement: 2
  caption: "说明书引导的 3D 零件装配任务示意图：给定 (a) 展示逐步装配流程的图示化说明书与 (b) 一组无纹理家具零件，目标是 (c) 根据说明书序列推断装配顺序，并预测每个零件的 6DoF 位姿，使空间变换后的零件装配成说明书描述的家具。"
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

<video controls muted loop autoplay>
  <source src="animation_composed_rotate.mp4" type="video/mp4">
</video>
