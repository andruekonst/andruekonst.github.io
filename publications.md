---
title: Publications
layout: default
kinds:
  preprint: Preprints
  journal: Journals
  conference: Conferences
---

List of all publications: [[BibTex]]({% link bibtex_publications.html %})

{% assign kinds = site.data.publications | map: 'kind' | uniq %}

{% if kinds.size > page.kinds.size %}
**Some kinds are not handled:** {{kinds | inspect}}
{% endif %}

{% for kind_title in page.kinds %}
{% if kinds contains kind_title[0] %}
## {{ kind_title[1] }}

{% assign pubs = site.data.publications | where: 'kind', kind_title[0] | sort: 'year' | reverse %}
{% for p in pubs %}
- {{ p.title }} ({{ p.year }})
{% if p.doi %}[[DOI]]({{ p.doi }}){% endif %}&nbsp;
{% if p.repo %}[[GitHub]]({{ p.repo }}){% endif %}&nbsp;
{% if p.arxiv %}[[ArXiV]]({{ p.arxiv }}){% endif %}
{% endfor %}
{% endif %}
{% endfor %}


