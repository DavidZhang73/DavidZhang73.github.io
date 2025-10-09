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
doi:

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

abstract: "Assembling furniture amounts to solving the discrete-continuous optimization task of selecting the furniture parts to assemble and estimating their connecting poses in a physically realistic manner. The problem is hampered by its combinatorially large yet sparse solution space thus making learning to assemble a challenging task for current machine learning models. In this paper, we attempt to solve this task by leveraging the assembly instructions provided in diagrammatic manuals that typically accompany the furniture parts. Our key insight is to use the cues in these diagrams to split the problem into discrete and continuous phases. Specifically, we present Manual-PA, a transformer-based instruction Manual-guided 3D Part Assembly framework that learns to semantically align 3D parts with their illustrations in the manuals using a contrastive learning backbone towards predicting the assembly order and infers the 6D pose of each part via relating it to the final furniture depicted in the manual. To validate the efficacy of our method, we conduct experiments on the benchmark PartNet dataset. Our results show that using the diagrams and the order of the parts lead to significant improvements in assembly performance against the state of the art. Further, Manual-PA demonstrates strong generalization to real-world IKEA furniture assembly on the IKEA-Manual dataset."

# Summary. An optional shortened abstract.
summary: "We introduce Manual-PA, a transformer-based framework that leverages diagrammatic assembly manuals to guide both the selection and 6D pose estimation of furniture parts, enabling efficient and realistic 3D assembly by aligning parts with instructional illustrations."

tags:
  - Deep Learning

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
links:
  - name: ArXiv
    url: https://arxiv.org/abs/2411.18011

url_pdf: https://arxiv.org/pdf/2411.18011
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
