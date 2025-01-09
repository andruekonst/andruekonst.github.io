---
title: About
layout: post

---

Hi, I am Andrei Vladimirovich Konstantinov and this is my personal website.

I am originally from Saint-Petersburg, Russia.
Having completed my undergraduate education at Peter the Great Polytechnic University
with a major in Applied Mathematics,
my academic pursuits have been primarily focused on developing expertise in areas including
machine learning, computer vision, and data science.


## Academia

{% assign theses = site.data.theses | sort: 'year', 'last' | reverse %}


- [Publications](publications)
    {% include_relative _includes/publications_summary.md %}
- [Theses](theses)
{% for t in theses %}
    - [**{{ t.degree }}** ({{ t.year | default: "in progress" }}) {{ t.translation }} ](theses#{{ t.degree | slugify }})
{% endfor %}

## Other

Outside of academia, I enjoy in playing the guitar and piano.
Being a part of a debate team taught me valuable skills such as critical thinking,
public speaking, and active listening;
meanwhile, managing a student video department allowed me to express creativity
through filmmaking and storytelling.

