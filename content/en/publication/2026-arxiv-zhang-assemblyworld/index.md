---
title: "AssemblyWorld: Rethinking 3D Assembly with General-Purpose Agents"
authors:
  - admin
  - Yeying Fan
  - Moitreya Chatterjee
  - Suhas Lohit
  - Bernhard Egger
  - Tim K. Marks
  - Anoop Cherian
  - Stephen Gould
author_notes:
  - "Equal contribution"
  - "Equal contribution"
  - ""
  - ""
  - ""
  - ""
  - ""
  - ""
date: "2026-09-30T17:59:14Z"
doi: "10.48550/arXiv.2609.40353"
publication_types: ["3"]
publication: '*arXiv preprint arXiv:2609.40353*'
publication_short: '*arXiv 2026*'
abstract: "The task of 3D assembly requires translating an understanding of parts and their relationships into precise spatial arrangements. Can pretrained general-purpose agents assemble objects through visual interaction without additional assembly-specific fine-tuning? To investigate this question, we introduce AssemblyWorld, an interactive 3D environment in which agents inspect rendered views and manipulate supplied rigid parts, guided by images or assembly manuals when available. Agents perceive part geometry through 2D views rather than direct access to mesh vertices or faces, while their resulting assemblies are evaluated geometrically. Building on this environment, we construct AssemblyWorldBench, comprising 100 assembly tasks across 80 objects spanning furniture, industrial assembly, and fracture reassembly. Evaluating eight agent systems reveals substantial differences in their capabilities. The strongest system achieves 80.9% part accuracy but 59.4% complete-assembly success. The evaluated open-source systems lag substantially behind their stronger closed-source peers in both execution reliability and assembly accuracy. Analyses of visual references, interaction trajectories, and failures show how agents revise assemblies while leaving residual positioning errors. AssemblyWorld provides a common setting for both assessing the capabilities of interactive assembly agents and characterizing the gap between approximate structure recovery and precise reconstruction."

summary: "AssemblyWorld evaluates pretrained general-purpose agents on interactive 3D assembly without assembly-specific fine-tuning. AssemblyWorldBench spans 100 tasks across 80 objects in furniture, industrial assembly, and fracture reassembly; the strongest of eight systems achieves 80.9% part accuracy and 59.4% complete-assembly success."

tags:
  - Deep Learning
  - 3D Assembly
  - Multimodal Agents
featured: true
links:
  - name: ArXiv
    url: https://arxiv.org/abs/2609.40353
url_pdf: https://arxiv.org/pdf/2609.40353
url_project: https://assemblyworld.github.io/
url_code: ''
url_dataset: ''
url_poster: ''
url_slides: ''
url_video: ''
image:
  placement: 2
  caption: "(a) Prior specialized assembly methods across three domains. (b) AssemblyWorld connects a general-purpose model and execution harness to an interactive 3D environment through MCP. Agents inspect views and manipulate supplied parts, using visual references when available. Targets illustrate assembly goals, not agent outputs; reference conditions, layouts, colors, and the manual icon are illustrative."
  focal_point: fit
  preview_only: false
projects: []
slides: ''
---
