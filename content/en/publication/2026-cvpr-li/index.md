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

abstract: "Assembling objects from parts requires understanding multimodal instructions, linking them to 3D components, and predicting physically plausible 6-DoF motions for each assembly step. Existing datasets focus on simplified scenarios, overlooking shape complexities and assembly trajectories in industrial assemblies. We introduce AssemblyBench, a synthetic dataset of 2,789 industrial objects with multimodal instruction manuals, corresponding 3D part models, and part assembly trajectories. We also propose a transformer-based model, AssemblyDyno, which uses the instructional manual and the 3D shape of each part to jointly predict assembly order and part assembly trajectories. AssemblyDyno outperforms prior works in both assembly pose estimation and trajectory feasibility, where the latter is evaluated by our physics-based simulations."

# Summary. An optional shortened abstract.
summary: "We introduce AssemblyBench, a large-scale synthetic dataset of 2,789 industrial objects with multimodal manuals, 3D part models, and assembly trajectories. We also propose AssemblyDyno, a transformer-based model that jointly predicts assembly order and physically feasible part trajectories, achieving state-of-the-art performance in pose estimation and trajectory feasibility."

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
  caption: "Given a step-wise manual with diagrams and text (lower left), we aim to assemble the corresponding set of 3D parts (upper left) in the virtual environment, outputting its step-wise assembly trajectories, which can be rendered into 4D animations (right)."
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
