---
title: 'Aligning Step-by-Step Instructional Diagrams to Video Demonstrations'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Anoop Cherian
  - Yanbin Liu
  - Yizhak Ben-Shabat
  - Cristian Rodriguez
  - Stephen Gould

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: '2023-02-28T00:00:00Z'
doi: "10.1109/CVPR52729.2023.00245"

# Schedule page publish date (NOT publication's date).
# publishDate: '2022-10-07T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['1']

# Publication name and optional abbreviated publication name.
publication: In *Conference on Computer Vision and Pattern Recognition 2023*
publication_short: In *CVPR 2023*

abstract: "跨模态对齐能够在一种模态中发起查询，并在另一种模态中检索对应实例。本文研究一种新的对齐设定：在(i)以装配图示形式呈现的说明步骤（常见于宜家装配手册）与(ii)野外视频中的片段之间建立对应关系，这些视频展示了现实世界中的装配动作。为学习这种对齐，我们提出一种新的有监督对比学习方法，在一组新设计损失的引导下，使视频与装配图示中的细粒度细节对齐。为研究该问题并验证方法有效性，我们构建了新数据集IAW（Ikea Assembly in the Wild），包含来自多种家具装配场景的183小时视频、近8,300张对应说明书图示，并标注其真实对齐关系。我们在该数据集上定义了两个任务：其一是视频片段与图示之间的最近邻检索；其二是对每个视频中的说明步骤与片段进行对齐。IAW上的大量实验表明，我们的方法显著优于现有替代方案。"

# Summary. An optional shortened abstract.
summary: "我们提出了一套新框架和数据集（IAW），用于将装配说明书中的图示步骤与真实世界的装配视频片段进行对齐，实现图文与视频间的跨模态检索和逐步对应。"

tags:
  - Deep Learning

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
links:
  - name: ArXiv
    url: https://arxiv.org/abs/2303.13800
  - name: 补充材料
    url: supplementary.pdf

url_pdf: https://openaccess.thecvf.com/content/CVPR2023/papers/Zhang_Aligning_Step-by-Step_Instructional_Diagrams_to_Video_Demonstrations_CVPR_2023_paper.pdf
url_project:
url_code: https://github.com/DavidZhang73/AssemblyVideoManualAlignment
url_dataset: https://iaw.davidz.cn
url_poster: https://cvpr2023.thecvf.com/media/PosterPDFs/CVPR%202023/22280.png
url_slides: https://cvpr2023.thecvf.com/media/cvpr-2023/Slides/22280.pdf
url_video: https://www.youtube.com/watch?v=8iC5QyP8U6o

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  placement: 2
  caption: "视频-图示对齐任务示意图：上方为 YouTube 视频 [He0pCeCTJQM](https://www.youtube.com/watch?v=He0pCeCTJQM)，下方为 IKEA 家具说明书 [s49069795](https://www.ikea.com/au/en/p/tarva-bed-frame-pine-luroey-s49069795/)。"
  focal_point: 'fit'
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
