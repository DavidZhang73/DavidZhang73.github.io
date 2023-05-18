---
title: 'Aligning Step-by-Step Instructional Diagrams to Video Demonstrations'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Anoop Cherian
  - 刘彦斌
  - Yizhak Ben-Shabat
  - Cristian Rodriguez
  - Stephen Gould

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: '2023-02-28T00:00:00Z'
# doi: ''

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
summary: "本文讨论了一种新颖的设置，其中指令步骤以装配图的形式表示，并与来自野外视频的片段进行对齐。作者引入了一种监督对比学习方法，该方法学习将视频与装配图的细微细节对齐，由一组新颖的损失指导。他们还引入了一个新的数据集：IAW-用于宜家野外装配-包括来自不同家具装配集合的183小时视频和近8,300幅来自相关说明手册的插图，并注释了其地面真实对齐。作者在此数据集上定义了两个任务：首先，在视频片段和插图之间进行最近邻检索；其次，将指令步骤和每个视频的片段对齐。在IAW上进行的广泛实验表明，我们的方法相对于替代方案具有优越的性能。(由 New Bing 生成)."

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

url_pdf: https://arxiv.org/pdf/2303.13800.pdf
url_code: https://github.com/DavidZhang73/AssemblyVideoManualAlignment
url_dataset: https://iaw.davidz.cn
url_poster: poster.pdf
url_project: https://academic.davidz.cn/en/publication/zhang-cvpr-2023/
url_slides:
url_source:
url_video:

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
