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

abstract: "语言、图像与视频生成建模的成功表明，大规模且高质量策划的数据集是构建强大模型的关键驱动力。然而，3D人体动作领域一直落后，受限于两难选择：要么使用小规模但高保真的动作捕捉数据集，要么使用大规模野外采集但以静态或低质量序列为主的数据集。我们提出RoMo，一个内容丰富、大规模且精心整理的野外人体动作数据集，解决了这一权衡。为保证质量，我们提出了具备分类体系感知的过滤流程，能够积极剔除静态及易产生伪影的序列。每条序列都配有细粒度文本描述，并按照新的三级语义分类体系组织。该层级结构首次支持按类别的细粒度评测基准，揭示了全局指标掩盖下的模型优势与不足。我们证明，在RoMo上训练的模型在保真度与多样性上达到最新水平，同时对复杂、细微文本提示具有更强理解能力。最后，我们发布Motion Toolbox，用于统一评测指标、数据转换与可视化，为可复现、可解释的人体动作生成研究奠定基础。"

# Summary. An optional shortened abstract.
summary: "RoMo是一个大规模、精心整理的野外3D人体动作数据集，通过分类体系感知过滤与层级语义标注支持细粒度评测，并显著提升动作生成的保真度、多样性与文本理解能力。"

tags:
  - Deep Learning

# Display this page in the Featured widget?
featured: true

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
  caption: "我们提出 RoMo：一个包含 82 万条野外 3D 人体动作的大规模层级数据集，带有细粒度文本描述，并按三级分类体系（类别 -> 子类别 -> 原子动作）组织，同时提供信息丰富的文本提示标注。饼图展示了类别与子类别分布，右侧四个示例展示了动作多样性。"
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
