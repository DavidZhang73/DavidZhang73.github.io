---
# Leave the homepage title empty to use the site title
title: ''
date: 2024-02-23
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: 简介
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
  - block: collection
    id: featured
    content:
      title: 精选文章
      filters:
        folders:
          - publication
        featured_only: true
    design:
      columns: '2'
      view: card
  - block: collection
    content:
      title: 文章
      subtitle: 2022年以来
      text: |-
        {{% callout note %}}
        [查看更多](./publication/).
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
      title: 项目
      subtitle: 2017年以来
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
        - name: 所有
          tag: '*'
        - name: 深度学习
          tag: Deep Learning
        - name: 网页开发
          tag: Web Development
        - name: 工具
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
      title: 经历
      subtitle: 2017年以来
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
          location: 堪培拉，澳大利亚
          date_start: '2024-02-19'
          date_end: ''
          description: >-
            我是[COMP4528/COMP6528 - Computer Vision](https://programsandcourses.anu.edu.au/2024/course/COMP4528)的助教。

        - title: Teaching Assistant
          company: The Australian National University
          company_url: 'https://www.anu.edu.au/'
          company_logo: anu
          location: 堪培拉，澳大利亚
          date_start: '2023-02-20'
          date_end: '2023-06-01'
          description: >-
            我是[COMP2420/COMP6420 - Introduction to Data Management, Analysis and Security](https://programsandcourses.anu.edu.au/course/comp2420)的助教。

        - title: Teaching Assistant
          company: The Australian National University
          company_url: 'https://www.anu.edu.au/'
          company_logo: anu
          location: 堪培拉，澳大利亚
          date_start: '2022-07-11'
          date_end: '2022-11-30'
          description: >-
            我是[COMP3670/COMP6670 - Introduction to Machine Learning](https://programsandcourses.anu.edu.au/2019/course/comp3670)和[COMP4650 - Document Analysis](https://programsandcourses.anu.edu.au/2023/course/COMP4650)的助教。

        - title: Research Assistant
          company: The Australian National University
          company_url: 'https://www.anu.edu.au/'
          company_logo: anu
          location: 堪培拉，澳大利亚
          date_start: '2022-05-09'
          date_end: '2023-02-20'
          description: >-
            我负责[InfluenceMap](https://influencemap.cmlab.dev/)和[CSMetrics](https://csmetrics.net/)网站的容器化工作。

        - title: 软件开发工程师(实习)
          company: 浪潮
          company_url: 'https://www.inspur.com/'
          company_logo: inspur
          location: 济南，中国
          date_start: '2019-11-20'
          date_end: '2020-01-31'
          description: >-
            我在浪潮实习期间，帮助开发了一个基于[Cpp Micro Service](http://cppmicroservices.org/)的插件管理系统。

        - title: 威海机电学院预约系统开发者
          company: 山东大学(威海)，机电与信息工程学院
          company_url: 'https://ie.wh.sdu.edu.cn/'
          company_logo: sdu
          location: 威海，中国
          date_start: '2019-05-06'
          date_end: '2019-07-01'
          description: >-
            我独立开发了学院的预约系统，该系统旨在简化预约流程。该系统目前仍在使用。

        - title: 威海建筑咨询系统开发者
          company: 山东大学(威海)，机电与信息工程学院
          company_url: 'https://ie.wh.sdu.edu.cn/'
          company_logo: sdu
          location: 威海，中国
          date_start: '2019-03-18'
          date_end: '2019-07-01'
          description: >-
            我是威海建筑咨询系统的主要开发者之一(六人团队)，该系统是一个企业级的业务项目。

        - title: VJ维护人员
          company: 山东大学(威海)，机电与信息工程学院
          company_url: 'https://ie.wh.sdu.edu.cn/'
          company_logo: sdu
          location: 威海，中国
          date_start: '2018-02-01'
          date_end: '2019-07-01'
          description: >-
            我是学院ACM训练用VJ(Virtual Judge)系统的主要维护者之一。该系统自2017年发布以来已经有超过1万次提交。

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
          date_start: '2021-05-04'
          description:
          organization: ANU
          organization_url: https://www.anu.edu.au/
          title: 校长表扬信
          url: https://davidz-blog.oss-cn-beijing.aliyuncs.com/asset/Chancellor'sLetterofCommendation.pdf
        - certificate_url:
          date_end:
          date_start: '2020-10-15'
          description:
          organization: SDU
          organization_url: https://www.wh.sdu.edu.cn/
          title: 海外留学一等奖学金
          url:
        - certificate_url:
          date_end:
          date_start: '2019-07-02'
          description:
          organization: SDU
          organization_url: https://www.wh.sdu.edu.cn/
          title: 海外留学一等奖学金
          url:
        - certificate_url:
          date_end:
          date_start: '2019-07-01'
          description:
          organization: SDU
          organization_url: https://www.wh.sdu.edu.cn/
          title: 校三等奖学金
          url:
        - certificate_url:
          date_end:
          date_start: '2018-07-02'
          description:
          organization: SDU
          organization_url: https://www.wh.sdu.edu.cn/
          title: 校科研创新二等奖学金
          url:
        - certificate_url:
          date_end:
          date_start: '2018-07-01'
          description:
          organization: SDU
          organization_url: https://www.wh.sdu.edu.cn/
          title: 校三等奖学金
          url:
        - certificate_url:
          date_end:
          date_start: '2018-06-01'
          description:
          organization: LanQiao
          organization_url: http://dasai.lanqiao.cn/
          title: '蓝桥杯省赛二等奖'
          url:
    design:
      columns: '1'
---
