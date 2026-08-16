---
# Leave the homepage title empty to use the site title
title: ""
date: 2024-02-23
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: Bio
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
  - block: collection
    id: featured
    content:
      title: Selected Publications
      filters:
        folders:
          - publication
        featured_only: true
    design:
      columns: "2"
      view: card
  - block: collection
    content:
      title: Publications
      subtitle:
      text: |-
        {{% callout note %}}
        Quickly discover relevant content by [filtering publications](./publication/).
        {{% /callout %}}
      filters:
        folders:
          - publication
        exclude_featured: false
    design:
      columns: "1"
      view: citation
  - block: portfolio
    id: projects
    content:
      title: Projects
      subtitle:
      filters:
        folders:
          - project
      # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
      default_button_index: 0
      # Filter toolbar (optional).
      # Add or remove as many filters (`filter_button` instances) as you like.
      # To show all items, set `tag` to "*".
      # To filter by a specific tag, set `tag` to an existing tag name.
      # To remove the toolbar, delete the entire `filter_button` block.
      buttons:
        - name: All
          tag: "*"
        - name: Deep Learning
          tag: Deep Learning
        - name: Web Development
          tag: Web Development
        - name: Tool
          tag: Tool
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: "1"
      view: showcase
      # For Showcase view, flip alternate rows?
      flip_alt_rows: true
  - block: experience
    id: experience
    content:
      title: Experience
      subtitle:
      # Date format for experience
      #   Refer to https://docs.hugoblox.com/customization/#date-format
      date_format: Jan 2006
      # Experiences.
      #   Add/remove as many `experience` items below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: Research Intern
          company: MetacognitionAI
          company_url: "https://metacognitionai.com/"
          company_logo: metacognitionai
          location: Australia (Remote)
          date_start: "2026-07-20"
          date_end: "2026-10-20"
          description: >-
            Studied compressible, composable KVCache memory for LLMs, agents, and VLAs; formulated the problem, designed experiments, validated prototypes, and implemented context composition, occupancy measurement, and visualization.
        - title: Research Intern
          company: Mitsubishi Electric Research Laboratories (MERL)
          company_url: "https://www.merl.com/"
          company_logo: merl
          location: Cambridge, USA
          date_start: "2025-10-27"
          date_end: "2026-03-20"
          description: >-
            Built and evaluated *AssemblyDyno* to jointly predict assembly order, final poses, and 6-DoF trajectories from multimodal manuals and 3D part point clouds. On the 2,789-object *AssemblyBench*, it improved final-pose success by 12% and achieved roughly 33% physics-simulation success versus a 3% baseline; co-authored the CVPR 2026 paper. Implemented and trained *StepPA*, running pilot experiments on accumulated-error mitigation in autoregressive assembly.
        - title: Research Intern
          company: Roblox
          company_url: "https://www.roblox.com/"
          company_logo: roblox
          location: San Mateo, USA
          date_start: "2025-07-21"
          date_end: "2025-10-17"
          description: >-
            First-authored and led *RoMo* end to end, distilling roughly 14 years of raw video into 820K+ text-conditioned 3D motions spanning 1,237+ hours and designing a 54-category, 2,065-subcategory taxonomy; published at CVPR 2026. Independently built *ProjectMay* across nearly 100 servers, cutting an estimated three-month pipeline to about two weeks and continuing to support *RoMo Hands*. Contributed to *Motion Toolbox* for motion processing, quality evaluation, visualization, dataset construction, and model evaluation.
        - title: Teaching Assistant
          company: The Australian National University
          company_url: "https://www.anu.edu.au/"
          company_logo: anu
          location: Canberra, Australia
          date_start: "2024-07-22"
          date_end: "2024-11-18"
          description: >-
            Tutor for [COMP8536 - Advanced Topics in Deep Learning for Computer Vision](https://programsandcourses.anu.edu.au/2024/course/comp8536).

        - title: Teaching Assistant
          company: The Australian National University
          company_url: "https://www.anu.edu.au/"
          company_logo: anu
          location: Canberra, Australia
          date_start: "2024-02-19"
          date_end: "2024-05-24"
          description: >-
            Tutor for [COMP4528/COMP6528 - Computer Vision](https://programsandcourses.anu.edu.au/2024/course/COMP4528).

        - title: Teaching Assistant
          company: The Australian National University
          company_url: "https://www.anu.edu.au/"
          company_logo: anu
          location: Canberra, Australia
          date_start: "2023-02-20"
          date_end: "2023-06-01"
          description: >-
            Tutor for [COMP2420/COMP6420 - Introduction to Data Management, Analysis and Security](https://programsandcourses.anu.edu.au/course/comp2420).

        - title: Teaching Assistant
          company: The Australian National University
          company_url: "https://www.anu.edu.au/"
          company_logo: anu
          location: Canberra, Australia
          date_start: "2022-07-11"
          date_end: "2022-11-30"
          description: >-
            Tutor for [COMP3670/COMP6670 - Introduction to Machine Learning](https://programsandcourses.anu.edu.au/2019/course/comp3670) and [COMP4650 - Document Analysis](https://programsandcourses.anu.edu.au/2023/course/COMP4650).

        - title: Research Assistant
          company: The Australian National University
          company_url: "https://www.anu.edu.au/"
          company_logo: anu
          location: Canberra, Australia
          date_start: "2022-05-09"
          date_end: "2023-02-20"
          description: >-
            Web maintainer for [InfluenceMap](https://influencemap.cmlab.dev/) and [CSMetrics](https://csmetrics.net/).

        - title: Intern Software Development Engineer
          company: Inspur
          company_url: "https://www.inspur.com/"
          company_logo: inspur
          location: Jinan, China
          date_start: "2019-11-20"
          date_end: "2020-01-31"
          description: >-
            Developed a configuration-driven plugin management system for server clusters with [Cpp Micro Services](http://cppmicroservices.org/), implementing plugin definitions, dependency resolution, ordered startup, and cyclic-dependency detection.

        - title: Developer of School Booking System
          company: Shandong University, Weihai, School of Mechanical, Electrical & Information Engineering
          company_url: "https://ie.wh.sdu.edu.cn/"
          company_logo: sdu
          location: Weihai, China
          date_start: "2019-05-06"
          date_end: "2019-07-01"
          description: >-
            I was an independent developer of the Booking System designed to simplify the appointment process. The system is in-use till now.

        - title: Major Developer of Weihai Construction Consulting System
          company: Shandong University, Weihai, School of Mechanical, Electrical & Information Engineering
          company_url: "https://ie.wh.sdu.edu.cn/"
          company_logo: sdu
          location: Weihai, China
          date_start: "2019-03-18"
          date_end: "2019-07-01"
          description: >-
            I was a major developer(one of six) of the Weihai Construction Consulting System, which is an enterprise-level business projects.

        - title: Major Maintainer for VJ
          company: Shandong University, Weihai, School of Mechanical, Electrical & Information Engineering
          company_url: "https://ie.wh.sdu.edu.cn/"
          company_logo: sdu
          location: Weihai, China
          date_start: "2018-02-01"
          date_end: "2019-07-01"
          description: >-
            I was the major maintainer(one of three) of the VJ(Virtual Judge for ACM practice) system developed by a senior student. The system has more than 10K submissions since first published in 2017.

    design:
      columns: "2"
  - block: accomplishments
    id: awards
    content:
      # Note: `&shy;` is used to add a 'soft' hyphen in a long heading.
      title: "Awards"
      subtitle:
      # Date format: https://docs.hugoblox.com/customization/#date-format
      date_format: Jan 2006
      # Accomplishments.
      #   Add/remove as many `item` blocks below as you like.
      #   `title`, `organization`, and `date_start` are the required parameters.
      #   Leave other parameters empty if not required.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - certificate_url:
          date_end:
          date_start: "2022-03-24"
          description:
          organization: ANU
          organization_url: https://www.anu.edu.au/
          title: "Postgraduate Research Scholarship"
        - certificate_url:
          date_end:
          date_start: "2021-05-04"
          description:
          organization: ANU
          organization_url: https://www.anu.edu.au/
          title: "Chancellor's Letter of Commendation"
          url: "https://davidz-blog.oss-cn-beijing.aliyuncs.com/asset/Chancellor'sLetterofCommendation.pdf"
        - certificate_url:
          date_end:
          date_start: "2020-10-15"
          description:
          organization: SDU
          organization_url: https://www.wh.sdu.edu.cn/
          title: First Scholarship of Studying Abroad
          url:
        - certificate_url:
          date_end:
          date_start: "2019-07-02"
          description:
          organization: SDU
          organization_url: https://www.wh.sdu.edu.cn/
          title: First Scholarship of Abroad Special
          url:
        - certificate_url:
          date_end:
          date_start: "2019-07-01"
          description:
          organization: SDU
          organization_url: https://www.wh.sdu.edu.cn/
          title: Third Scholarship of University
          url:
        - certificate_url:
          date_end:
          date_start: "2018-07-02"
          description:
          organization: SDU
          organization_url: https://www.wh.sdu.edu.cn/
          title: Second Scholarship of Research and Innovation
          url:
        - certificate_url:
          date_end:
          date_start: "2018-07-01"
          description:
          organization: SDU
          organization_url: https://www.wh.sdu.edu.cn/
          title: Third Scholarship of University
          url:
        - certificate_url:
          date_end:
          date_start: "2018-06-01"
          description:
          organization: LanQiao
          organization_url: http://dasai.lanqiao.cn/
          title: "LanQiao Programming Competition Province-Level Second Prize"
          url:
    design:
      columns: "1"
---
