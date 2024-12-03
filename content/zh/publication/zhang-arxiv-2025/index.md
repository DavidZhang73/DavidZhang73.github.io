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

date: "2024-11-28T00:00:00Z"
doi:

# Schedule page publish date (NOT publication's date).
# publishDate: '2022-10-07T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: ArXiv Preprint
publication_short: ArXiv Preprint

abstract: "Assembling furniture amounts to solving the discrete-continuous optimization task of selecting the furniture parts to assemble and estimating their connecting poses in a physically realistic manner. The problem is hampered by its combinatorially large yet sparse solution space thus making learning to assemble a challenging task for current machine learning models. In this paper, we attempt to solve this task by leveraging the assembly instructions provided in diagrammatic manuals that typically accompany the furniture parts. Our key insight is to use the cues in these diagrams to split the problem into discrete and continuous phases. Specifically, we present Manual-PA, a transformer-based instruction Manual-guided 3D Part Assembly framework that learns to semantically align 3D parts with their illustrations in the manuals using a contrastive learning backbone towards predicting the assembly order and infers the 6D pose of each part via relating it to the final furniture depicted in the manual. To validate the efficacy of our method, we conduct experiments on the benchmark PartNet dataset. Our results show that using the diagrams and the order of the parts lead to significant improvements in assembly performance against the state of the art. Further, Manual-PA demonstrates strong generalization to real-world IKEA furniture assembly on the IKEA-Manual dataset."

# Summary. An optional shortened abstract.
summary: "这篇论文提出了一种基于手册的3D部件装配方法，旨在通过学习装配顺序和预测6D位姿，自动化实现复杂家具的组装。本文利用对比学习和变换器架构，设计了Manual-PA框架，以手册中的步骤图为指导，进行部件的语义对齐和装配顺序推理，结合位置编码优化装配过程。实验表明，该方法在PartNet和IKEA-Manual数据集上显著提升了装配性能，尤其是在复杂结构和多部件任务上的鲁棒性和泛化能力。未来工作可进一步探索更灵活的检测机制、多视角处理，以及统一的类别无关模型。(ChatGPT4o)"

tags:
  - Deep Learning

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
links:
  - name: ArXiv
    url: https://arxiv.org/abs/2411.18011

url_pdf: https://arxiv.org/pdf/2411.18011
url_code:
url_dataset:
url_poster:
url_project:
url_slides:
url_source:
url_video:

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  placement: 2
  caption: "An illustration of the manual-guided 3D part assembly task. Given (a) a diagrammatic manual book demonstrating the step-by-step assembly process and (b) a set of texture-less furniture parts, the goal is to (c) infer the order of parts for the assembly from the manual sequence and predict the 6DoF pose for each part such that the spatially transformed parts assembles the furniture described in the manual."
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
