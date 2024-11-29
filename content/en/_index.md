---
# Leave the homepage title empty to use the site title
title: ''
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
      columns: '2'
      view: card
  - block: collection
    content:
      title: Publications
      subtitle: 'Since 2022'
      text: |-
        {{% callout note %}}
        Quickly discover relevant content by [filtering publications](./publication/).
        {{% /callout %}}
      filters:
        folders:
          - publication
        exclude_featured: false
    design:
      columns: '1'
      view: citation
  - block: portfolio
    id: projects
    content:
      title: Projects
      subtitle: Since 2017
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
          tag: '*'
        - name: Deep Learning
          tag: Deep Learning
        - name: Web Development
          tag: Web Development
        - name: Tool
          tag: Tool
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '1'
      view: showcase
      # For Showcase view, flip alternate rows?
      flip_alt_rows: true
  - block: experience
    id: experience
    content:
      title: Experience
      subtitle: Since 2017
      # Date format for experience
      #   Refer to https://docs.hugoblox.com/customization/#date-format
      date_format: Jan 2006
      # Experiences.
      #   Add/remove as many `experience` items below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: Teaching Assistant
          company: The Australian National University
          company_url: 'https://www.anu.edu.au/'
          company_logo: anu
          location: Canberra, Australia
          date_start: '2024-07-22'
          date_end: '2024-11-18'
          description: >-
            Tutor for [COMP8536 - Advanced Topics in Deep Learning for Computer Vision](https://programsandcourses.anu.edu.au/2024/course/comp8536).

        - title: Teaching Assistant
          company: The Australian National University
          company_url: 'https://www.anu.edu.au/'
          company_logo: anu
          location: Canberra, Australia
          date_start: '2024-02-19'
          date_end: '2024-05-24'
          description: >-
            Tutor for [COMP4528/COMP6528 - Computer Vision](https://programsandcourses.anu.edu.au/2024/course/COMP4528).

        - title: Teaching Assistant
          company: The Australian National University
          company_url: 'https://www.anu.edu.au/'
          company_logo: anu
          location: Canberra, Australia
          date_start: '2023-02-20'
          date_end: '2023-06-01'
          description: >-
            Tutor for [COMP2420/COMP6420 - Introduction to Data Management, Analysis and Security](https://programsandcourses.anu.edu.au/course/comp2420).

        - title: Teaching Assistant
          company: The Australian National University
          company_url: 'https://www.anu.edu.au/'
          company_logo: anu
          location: Canberra, Australia
          date_start: '2022-07-11'
          date_end: '2022-11-30'
          description: >-
            Tutor for [COMP3670/COMP6670 - Introduction to Machine Learning](https://programsandcourses.anu.edu.au/2019/course/comp3670) and [COMP4650 - Document Analysis](https://programsandcourses.anu.edu.au/2023/course/COMP4650).

        - title: Research Assistant
          company: The Australian National University
          company_url: 'https://www.anu.edu.au/'
          company_logo: anu
          location: Canberra, Australia
          date_start: '2022-05-09'
          date_end: '2023-02-20'
          description: >-
            Web maintainer for [InfluenceMap](https://influencemap.cmlab.dev/) and [CSMetrics](https://csmetrics.net/).

        - title: Intern Software Development Engineer
          company: Inspur
          company_url: 'https://www.inspur.com/'
          company_logo: inspur
          location: Jinan, China
          date_start: '2019-11-20'
          date_end: '2020-01-31'
          description: >-
            I was an intern at the Inspur, which is a Server and Cloud company in China. I helped to build a plugin management system based on [Cpp Micro Service](http://cppmicroservices.org/).

        - title: Developer of School Booking System
          company: Shandong University, Weihai, School of Mechanical, Electrical & Information Engineering
          company_url: 'https://ie.wh.sdu.edu.cn/'
          company_logo: sdu
          location: Weihai, China
          date_start: '2019-05-06'
          date_end: '2019-07-01'
          description: >-
            I was an independent developer of the Booking System designed to simplify the appointment process. The system is in-use till now.

        - title: Major Developer of Weihai Construction Consulting System
          company: Shandong University, Weihai, School of Mechanical, Electrical & Information Engineering
          company_url: 'https://ie.wh.sdu.edu.cn/'
          company_logo: sdu
          location: Weihai, China
          date_start: '2019-03-18'
          date_end: '2019-07-01'
          description: >-
            I was a major developer(one of six) of the Weihai Construction Consulting System, which is an enterprise-level business projects.

        - title: Major Maintainer for VJ
          company: Shandong University, Weihai, School of Mechanical, Electrical & Information Engineering
          company_url: 'https://ie.wh.sdu.edu.cn/'
          company_logo: sdu
          location: Weihai, China
          date_start: '2018-02-01'
          date_end: '2019-07-01'
          description: >-
            I was the major maintainer(one of three) of the VJ(Virtual Judge for ACM practice) system developed by a senior student. The system has more than 10K submissions since first published in 2017.

    design:
      columns: '2'
  - block: accomplishments
    id: accomplishments
    content:
      # Note: `&shy;` is used to add a 'soft' hyphen in a long heading.
      title: 'Accomplish&shy;ments'
      subtitle: Since 2017
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
          date_start: '2022-03-24'
          description:
          organization: ANU
          organization_url: https://www.anu.edu.au/
          title: "Postgraduate Research Scholarship"
        - certificate_url:
          date_end:
          date_start: '2021-05-04'
          description:
          organization: ANU
          organization_url: https://www.anu.edu.au/
          title: "Chancellor's Letter of Commendation"
          url: "https://davidz-blog.oss-cn-beijing.aliyuncs.com/asset/Chancellor'sLetterofCommendation.pdf"
        - certificate_url:
          date_end:
          date_start: '2020-10-15'
          description:
          organization: SDU
          organization_url: https://www.wh.sdu.edu.cn/
          title: First Scholarship of Studying Abroad
          url:
        - certificate_url:
          date_end:
          date_start: '2019-07-02'
          description:
          organization: SDU
          organization_url: https://www.wh.sdu.edu.cn/
          title: First Scholarship of Abroad Special
          url:
        - certificate_url:
          date_end:
          date_start: '2019-07-01'
          description:
          organization: SDU
          organization_url: https://www.wh.sdu.edu.cn/
          title: Third Scholarship of University
          url:
        - certificate_url:
          date_end:
          date_start: '2018-07-02'
          description:
          organization: SDU
          organization_url: https://www.wh.sdu.edu.cn/
          title: Second Scholarship of Research and Innovation
          url:
        - certificate_url:
          date_end:
          date_start: '2018-07-01'
          description:
          organization: SDU
          organization_url: https://www.wh.sdu.edu.cn/
          title: Third Scholarship of University
          url:
        - certificate_url:
          date_end:
          date_start: '2018-06-01'
          description:
          organization: LanQiao
          organization_url: http://dasai.lanqiao.cn/
          title: 'LanQiao Programming Competition Province-Level Second Prize'
          url:
    design:
      columns: '1'
---
