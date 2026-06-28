---
title: "Pos3R: 6D Pose Estimation for Unseen Objects Made Easy"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Weijian Deng
  - Dylan Campbell
  - Chunyi Sun
  - admin
  - Shubham Kanitkar
  - Matthew E. Shaffer
  - Stephen Gould

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: "2025-02-27T00:00:00Z"
doi: "10.1109/CVPR52734.2025.01567"

# Schedule page publish date (NOT publication's date).
# publishDate: '2022-10-07T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *Conference on Computer Vision and Pattern Recognition 2025*
publication_short: In *CVPR 2025*

abstract: "基础模型显著降低了对任务特定训练的需求，同时提升了泛化能力。然而，最先进的6D位姿估计器要么仍需带位姿监督的进一步训练，要么忽视了3D基础模型可带来的进展。后者是一种错失，因为这类模型更擅长预测3D一致特征，而这对位姿估计非常有价值。为弥补这一缺口，我们提出Pos3R：一种可从单张RGB图像估计任意物体6D位姿的方法，广泛利用3D重建基础模型且无需额外训练。我们发现模板选择是现有方法的关键瓶颈，而使用3D模型可显著缓解该问题，因为相比2D模型，3D模型更容易区分不同模板位姿。尽管方法简单，Pos3R在涵盖七个多样化数据集的BOP基准上取得了有竞争力的表现，与现有无需精化的方法持平或更优。此外，Pos3R可与render-and-compare精化技术无缝结合，展现了面向高精度应用的适应性。"

# Summary. An optional shortened abstract.
summary: "我们提出了Pos3R，一种利用3D基础模型、无需训练即可从单张RGB图像估算任意物体6D位姿的方法，无需姿态监督或特定任务训练。"

tags:
  - Deep Learning

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
#   - name: ArXiv
#     url:

url_pdf: https://openaccess.thecvf.com/content/CVPR2025/papers/Deng_Pos3R_6D_Pose_Estimation_for_Unseen_Objects_Made_Easy_CVPR_2025_paper.pdf
url_project: https://pos3r.rios.ai/
url_code:
url_dataset:
url_poster: https://pos3r.rios.ai/resources/poster.pdf
url_slides: https://pos3r.rios.ai/resources/slides.pdf
url_video: https://www.youtube.com/watch?v=_a9q_O8yN4E

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  placement: 2
  caption: ""
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
