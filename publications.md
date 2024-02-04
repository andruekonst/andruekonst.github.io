---
title: Publications
layout: post
selected:
  - konstantinov2023naf
  - konstantinov2023new
  - konstantinov2021interpretable
  - konstantinov2022multi
  - utkin2019weighted
  - konstantinov2022attention
  - konstantinov_interpretable_2023
---

<style>
    table.no-borders td {
        border: none;
    }
    table img.preview {
        max-width: 75px;
    }
</style>

This page contains a list of articles in peer-reviewed scientific journals.
[[BibTex]]({% link bibtex_publications.html %})

<p>
{% include_relative _includes/publications_summary.md %}
</p>


## Selected

{% assign selected = page.selected %}
{% assign pubs = site.data.publications | where_exp: "item", "selected contains item.slug" | sort: "year" | reverse %}
<table class="no-borders">
{% for p in pubs %}
    <tr>
        <td>
            {% if p.image %}
                <img src="{{ p.image }}" class="preview"/>
            {% endif %}
        </td>
        <td>
{{ p.title }}
        </td>
        <td>
            <i>{{ p.year }}</i>
        </td>
        <td>
        {% if p.doi %}{% include link_to.html title='DOI' platform='doi' link=p.doi %}{% endif %}
        {% if p.repo %}{% include link_to.html title='GitHub Repository' platform='github' link=p.repo %}{% endif %}
        {% if p.arxiv %}{% include link_to.html title='ArXiV' platform='arxiv' link=p.arxiv %}{% endif %}
        </td>
</tr>
{% endfor %}
</table>


## All
{% assign kinds = site.data.publications | map: 'kind' | uniq %}

{% if kinds.size > site.data.publication_kinds.size %}
**Some kinds are not handled:** {{kinds | inspect}}
{% endif %}

{% for kind_title in site.data.publication_kinds %}
{% if kinds contains kind_title[0] %}
### {{ kind_title[1] }} {#{{ kind_title[0] }}}

{% assign pubs = site.data.publications | where: 'kind', kind_title[0] | sort: 'year' | reverse %}
{% for p in pubs %}
{{ forloop.index }}. {{ p.title }} ({{ p.year }})
{% if p.doi %}[[DOI]]({{ p.doi }}){% endif %}&nbsp;
{% if p.repo %}[[GitHub]]({{ p.repo }}){% endif %}&nbsp;
{% if p.arxiv %}[[ArXiV]]({{ p.arxiv }}){% endif %}
{% endfor %}
{% endif %}
{% endfor %}


