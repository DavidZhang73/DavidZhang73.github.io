---
title: "RoMo: A Large-Scale, Richly Organized Dataset and Semantic Taxonomy for Human Motion Generation"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Joseph Liu
  - Young-Yoon Lee
  - Seonghyeon Moon
  - Victor Zordan
  - Guy Tevet
  - Karen Liu
  - Stephen Gould
  - Oren Jacob
  - Haomiao Jiang
  - Mubbasir Kapadia
  - Yizhak Ben-Shabat

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

abstract: "Success in generative modeling across language, image, and video demonstrates that large, well-curated datasets are the key driver for building capable models. 3D Human motion, however, has lagged behind, constrained by an unsatisfying choice between small, high-fidelity motion capture datasets and large-scale in-the-wild collections dominated by static or low-quality sequences. We introduce RoMo, a rich, large-scale, carefully curated dataset of in-the-wild human motions that resolves these tradeoffs. To ensure quality, we introduce a taxonomy-aware filtering pipeline that aggressively removes static and artifact-prone sequences. Every sequence is annotated with detailed captions and organized by a novel three-level semantic taxonomy. This hierarchical structure enables fine-grained, per-category evaluation, that reveals model strengths and weaknesses obscured by global metrics. We demonstrate that models trained on RoMo achieve state-of-the-art fidelity and diversity while gaining a superior understanding of complex, subtle text prompts. Finally, we release the Motion Toolbox to standardize metrics, data conversion, and visualization, establishing a foundation for reproducible and interpretable motion generation research."

# Summary. An optional shortened abstract.
summary: "RoMo is a large-scale, curated in-the-wild 3D human motion dataset with taxonomy-aware filtering and hierarchical annotations for fine-grained evaluation. It enables state-of-the-art motion generation with improved fidelity, diversity, and text understanding."

tags:
  - Deep Learning

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
links:
  - name: ArXiv
    url:

url_pdf:
url_project: https://davidzhang73.github.io/romo-website/
url_code: https://github.com/RoMoDataset/motion-toolbox
url_dataset: https://huggingface.co/datasets/RoMoDataset/RoMo-SMPLX
url_poster: media/cvpr26-31605-poster.pdf
url_slides: media/cvpr26-31605-slides.pdf
url_video: https://www.youtube.com/watch?v=mVibnhb-KcU

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  placement: 2
  caption: "We present RoMo, a large hierarchical dataset of 820K in-the-wild 3D human motions with detailed text captions organized into a three-level taxonomy (Category -> Subcategory -> Atomic-action), and annotated with text-rich prompts. The pie chart shows the distribution of categories and subcategories, while four examples illustrate diverse motions."
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
