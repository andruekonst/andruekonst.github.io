---
title: Scientific Publications
layout: post
kinds:
  journal: Journals
  conference: Conferences
  preprint: Preprints
selected:
  - konstantinov2023naf
  - konstantinov2023new
  - konstantinov2021interpretable
  - konstantinov2022multi
  - utkin2019weighted
  - konstantinov2022attention
  - konstantinov_interpretable_2023
---

## Selected

{% assign selected = page.selected %}
{% assign pubs = site.data.publications | where_exp: "item", "selected contains item.slug" | sort: "year" | reverse %}
{% for p in pubs %}
- {{ p.title }} ({{ p.year }})
{% if p.doi %}[[DOI]]({{ p.doi }}){% endif %}&nbsp;
{% if p.repo %}[[GitHub]]({{ p.repo }}){% endif %}&nbsp;
{% if p.arxiv %}[[ArXiV]]({{ p.arxiv }}){% endif %}
{% endfor %}


## List of All Publications [[BibTex]]({% link bibtex_publications.html %})

{% assign kinds = site.data.publications | map: 'kind' | uniq %}

{% if kinds.size > page.kinds.size %}
**Some kinds are not handled:** {{kinds | inspect}}
{% endif %}

{% for kind_title in page.kinds %}
{% if kinds contains kind_title[0] %}
### {{ kind_title[1] }}

{% assign pubs = site.data.publications | where: 'kind', kind_title[0] | sort: 'year' | reverse %}
{% for p in pubs %}
{{ forloop.index }}. {{ p.title }} ({{ p.year }})
{% if p.doi %}[[DOI]]({{ p.doi }}){% endif %}&nbsp;
{% if p.repo %}[[GitHub]]({{ p.repo }}){% endif %}&nbsp;
{% if p.arxiv %}[[ArXiV]]({{ p.arxiv }}){% endif %}
{% endfor %}
{% endif %}
{% endfor %}


