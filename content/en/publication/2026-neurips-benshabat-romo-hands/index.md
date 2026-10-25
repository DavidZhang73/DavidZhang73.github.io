---
title: "RoMo Hands: A Large Scale Richly Organized Text to Hand Motion Dataset"
authors:
  - "Yizhak Ben-Shabat"
  - "admin"
  - "Joseph Liu"
  - "Seonghyeon Moon"
  - "Young-Yoon Lee"
  - "Haomiao Jiang"
  - "Oren Jacob"
  - "Mubbasir Kapadia"
# Website registration date; not the official acceptance date.
date: "2026-10-15T00:00:00Z"
publication_types: ["1"]
publication: In *Conference on Neural Information Processing Systems 2026*
publication_short: In *NeurIPS 2026*
abstract: "While text-driven body motion generation has matured, pure-hand synthesis remains bottlenecked by data. Existing datasets often treat hands as rigid end-effectors, lack fine-grained captions, or are too limited in scale to support robust generalization. We introduce RoMo Hands, an in-the-wild, text-paired dataset of ∼542K sequences (884 hours, 95.5M frames at 30fps) which is an order of magnitude larger than prior work. To ensure high-quality supervision, a stringent dexterity filter discards low-articulation sequences, focusing the distribution on complex bimanual movement. Each clip is paired with five captions at increasing granularities from global semantic tags to atomic finger states, organized under a hierarchical taxonomy. To bridge the gap between body and hand architectures, we propose a novel 393-D bimanual representation that adapts redundant body-motion paradigms to the high-DoF kinematics of hands. Systematic benchmarking of diffusion, masked-token, and autoregressive generators reveals distinct trade-offs under these hand-specific adaptations, including a sharp divergence between semantic alignment and kinematic plausibility. Our dataset, representation, and benchmark establish a rigorous foundation for the next generation of dexterous motion synthesis."
summary: "RoMo Hands is a large-scale text-paired hand motion dataset with approximately 542K bimanual sequences, five caption granularities, and a unified 393-D representation for evaluating text-to-hand motion generation."
tags:
  - Deep Learning
  - Hand Motion Generation
featured: false
url_pdf: https://romodataset.github.io/romo-hands/static/paper/RoMo_Hands.pdf
url_project: https://romodataset.github.io/romo-hands/
url_dataset: https://huggingface.co/datasets/RoMoDataset/RoMo-Hands
image:
  placement: 2
  caption: "RoMo Hands dataset overview with hierarchical action categories and bimanual motion examples."
  focal_point: fit
  preview_only: false
projects: []
slides: ''
---

