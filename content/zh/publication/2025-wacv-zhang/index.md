---
title: "Temporally Grounding Instructional Diagrams in Unconstrained Videos"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Frederic Zhang
  - Cristian Rodriguez
  - Yizhak Ben-Shabat
  - Anoop Cherian
  - Stephen Gould

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: "2024-09-27T00:00:00Z"
doi: "10.1109/WACV61041.2025.00786"

# Schedule page publish date (NOT publication's date).
# publishDate: '2022-10-07T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *Winter Conference on Applications of Computer Vision 2025*
publication_short: In *WACV 2025*

abstract: "我们研究一个具有挑战性的问题：在视频中同时定位一组以说明书步骤图形式给出的查询。这不仅要求理解各个查询本身，还要建模它们之间的关系。然而，大多数现有方法一次只处理一个查询，忽略了查询间固有结构，如互斥关系与时间顺序。因此，不同步骤图预测的时间区间可能严重重叠或违反时序，从而降低精度。本文通过同时ground一系列步骤图来解决该问题。具体而言，我们提出复合查询：将步骤图的视觉内容特征与固定数量、可学习的位置嵌入进行穷举配对构建而成。我们的核心观察是，携带不同内容特征的复合查询之间的自注意力可相互抑制，从而减少预测时间区间重叠；同时，交叉注意力通过内容与位置的联合引导纠正时间错位。我们在IAW数据集的步骤图grounding任务和YouCook2基准的自然语言查询grounding任务上验证了方法有效性，在同时定位多个查询的设定下显著优于现有方法。"

# Summary. An optional shortened abstract.
summary: "我们提出了一种新方法，通过建模说明书步骤图之间的关系和时序，实现了在视频中同时定位多个步骤图，而非单独处理每一步。"

tags:
  - Deep Learning

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
links:
  - name: ArXiv
    url: https://arxiv.org/abs/2407.12066

url_pdf: https://openaccess.thecvf.com/content/WACV2025/papers/Zhang_Temporally_Grounding_Instructional_Diagrams_in_Unconstrained_Videos_WACV_2025_paper.pdf
url_project:
url_code: https://github.com/DavidZhang73/TDGV
url_dataset: https://huggingface.co/datasets/DavidZhang73/TDGVDatasets
url_poster: media/wacv25-126-poster.pdf
url_slides: media/wacv25-126-slides.pdf
url_video:

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  placement: 2
  caption: "时序说明图定位任务示意图：上方为 YouTube 视频 [xPNkHAii3fU](https://www.youtube.com/watch?v=xPNkHAii3fU)，下方为 IKEA 家具说明书 [00352894](https://www.ikea.com/au/en/p/hemnes-bookcase-white-stain-00352894/)。该任务目标是同时预测所有步骤图对应的起止时间戳。"
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
