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
# doi: ''

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

abstract: "We study the challenging problem of simultaneously localizing a sequence of queries in the form of instructional diagrams in a video. This requires understanding not only the individual queries but also their interrelationships. However, most existing methods focus on grounding one query at a time, ignoring the inherent structures among queries such as the general mutual exclusiveness and the temporal order. Consequently, the predicted timespans of different step diagrams may overlap considerably or violate the temporal order, thus harming the accuracy. In this paper, we tackle this issue by simultaneously grounding a sequence of step diagrams. Specifically, we propose composite queries, constructed by exhaustively pairing up the visual content features of the step diagrams and a fixed number of learnable positional embeddings. Our insight is that self-attention among composite queries carrying different content features suppress each other to reduce timespan overlaps in predictions, while the cross-attention corrects the temporal misalignment via content and position joint guidance. We demonstrate the effectiveness of our approach on the IAW dataset for grounding step diagrams and the YouCook2 benchmark for grounding natural language queries, significantly outperforming existing methods while simultaneously grounding multiple queries."

# Summary. An optional shortened abstract.
summary: "这篇文章的主要研究对象是在视频中同时定位多个查询序列，尤其是将说明性图解与视频中的时间点对齐的问题。作者指出，现有的很多方法只针对单个查询进行定位，忽略了查询之间的内在关系（如互斥性和时间顺序），这可能导致不同步骤图解的时间跨度重叠或顺序错误，进而影响定位的准确性。为了应对这个问题，作者提出了一种新的方法，通过构造复合查询（将步骤图解的视觉内容特征与固定数量的可学习位置嵌入结合）来同时定位多个步骤图解。该方法通过自注意力机制减少时间跨度的重叠，并通过内容和位置的联合指导校正时间上的错位。文章展示了该方法在Ikea Assembly in the Wild（IAW）数据集和YouCook2基准数据集上的有效性，能够显著优于现有方法，同时能够同时定位多个查询。这种方法的核心贡献是设计了一种新的检测Transformer模型，能够同时定位一系列步骤图解，并通过复合查询和联合指导的交叉注意力机制提高定位准确性。(ChatGPT4o)"

tags:
  - Deep Learning

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
links:
  - name: ArXiv
    url: https://arxiv.org/abs/2407.12066

url_pdf: https://arxiv.org/pdf/2407.12066
url_code: https://github.com/DavidZhang73/TDGV
url_poster:
url_project:
url_slides:
url_source:
url_video:

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  placement: 2
  caption: "An illustration of the temporal instructional diagram grounding task between a YouTube video (top) [xPNkHAii3fU](https://www.youtube.com/watch?v=xPNkHAii3fU) and an Ikea furniture manual (bottom) [00352894](https://www.ikea.com/au/en/p/hemnes-bookcase-white-stain-00352894/). This task aims to predict the start and end timestamps for all step diagrams simultaneously."
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
