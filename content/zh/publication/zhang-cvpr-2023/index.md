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

abstract: 'Multimodal alignment facilitates the retrieval of instances from one modality when queried using another. In this paper, we consider a novel setting where such an alignment is between (i) instruction steps that are depicted as assembly diagrams (commonly seen in Ikea assembly manuals) and (ii) video segments from in-the-wild videos; these videos comprising an enactment of the assembly actions in the real world. To learn this alignment, we introduce a novel supervised contrastive learning method that learns to align videos with the subtle details in the assembly diagrams, guided by a set of novel losses. To study this problem and demonstrate the effectiveness of our method, we introduce a novel dataset: IAW---for Ikea assembly in the wild---consisting of 183 hours of videos from diverse furniture assembly collections and nearly 8,300 illustrations from their associated instruction manuals and annotated for their ground truth alignments. We define two tasks on this dataset: First, nearest neighbor retrieval between video segments and illustrations, and, second, alignment of instruction steps and the segments for each video. Extensive experiments on IAW demonstrate superior performances of our approach against alternatives.'

# Summary. An optional shortened abstract.
summary: "文章讨论了如何对齐逐步说明图与现实世界中的视频演示，尤其是在家具组装场景下。传统的Ikea组装手册通常使用图解说明步骤，但这些图解有时可能含糊不清或与实际的产品存在差异，而通过视频来展示组装过程可以有效弥补这些不足。然而，网络上的DIY视频往往包含大量与实际任务无关的内容，这使得视频与说明图的对齐成为一个复杂的问题。为了解决这一问题，文章提出了一种新的对比学习框架，旨在通过多模态特征的对齐，将视频片段与图解进行匹配。文章引入了一个新的数据集——IAW（Ikea Assembly in the Wild），该数据集包含超过183小时的家具组装视频以及8000多张图解说明，用于评估该方法的效果。实验结果表明，该方法在视频片段和说明图解之间的检索和对齐任务上取得了显著的性能提升。此外，文章提出了三种针对性的新型损失函数，旨在通过对比学习更好地对齐视频和图解，包括视频与图解的全局对比损失、视频与手册的局部对比损失，以及手册内图解之间的对比损失。实验显示，使用这些损失函数可以显著提高模型的对齐性能。这项研究在视频-图解对齐、多模态对齐领域具有重要意义，尤其是在机器人模仿学习和人类组装任务辅助等应用中，具有广泛的潜在应用前景。(ChatGPT4o)."

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
url_code: https://github.com/DavidZhang73/AssemblyVideoManualAlignment
url_dataset: https://iaw.davidz.cn
url_poster: https://cvpr2023.thecvf.com/media/PosterPDFs/CVPR%202023/22280.png
url_project:
url_slides: https://cvpr2023.thecvf.com/media/cvpr-2023/Slides/22280.pdf
url_source:
url_video: https://www.youtube.com/watch?v=8iC5QyP8U6o

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  placement: 2
  caption: "An illustration of video-diagram alignment between
  a YouTube video (top) [He0pCeCTJQM](https://www.youtube.com/watch?v=He0pCeCTJQM) and
  an Ikea furniture manual (bottom) [s49069795](https://www.ikea.com/au/en/p/tarva-bed-frame-pine-luroey-s49069795/)"
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
