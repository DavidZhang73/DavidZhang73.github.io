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
# doi: ''

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

abstract: "Foundation models have significantly reduced the need for task-specific training, while also enhancing generalizability. However, state-of-the-art 6D pose estimators either require further training with pose supervision or neglect advances obtainable from 3D foundation models. The latter is a missed opportunity, since these models are better equipped to predict 3D-consistent features, which are of significant utility for the pose estimation task. To address this gap, we propose Pos3R, a method for estimating the 6D pose of any object from a single RGB image, making extensive use of a 3D reconstruction foundation model and requiring no additional training. We identify template selection as a particular bottleneck for existing methods that is significantly alleviated by the use of a 3D model, which can more easily distinguish between template poses than a 2D model. Despite its simplicity, Pos3R achieves competitive performance on the BOP benchmark across seven diverse datasets, matching or surpassing existing refinement-free methods. Additionally, Pos3R integrates seamlessly with render-and-compare refinement techniques, demonstrating adaptability for high-precision applications."

# Summary. An optional shortened abstract.
summary: ""

tags:
  - Deep Learning

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
#   - name: ArXiv
#     url:

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
