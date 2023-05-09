---
title: About
layout: default
---

# About

My name is Andrei Vladimirovich Konstantinov,
and I am originally from Saint-Petersburg, Russia.
Having completed my undergraduate education at Peter the Great Polytechnic University
with a major in Applied Mathematics,
my academic pursuits have been primarily focused on developing expertise in areas including
machine learning, computer vision, and data science.

Outside of academia, I enjoy in playing the guitar and piano.
Being a part of a debate team taught me valuable skills such as critical thinking,
public speaking, and active listening;
meanwhile, managing a student video department allowed me to express creativity
through filmmaking and storytelling

## Education

{% assign theses = site.data.theses | sort: 'year', 'last' | reverse %}
{% for t in theses %}
### {{ t.degree }} ({{ t.year | default: "in progress" }})
**Title:** {{ t.translation }}. 
{% if t.lang == 'ru' %}
Original title in russian:
> {{ t.title }}
{% endif %}

<table>
{% if t.speciality %}
<tr>
    <td>
        Speciality
    </td>
    <td>
        {{ t.speciality }}<br/>
        {{ t.subspeciality }}
    </td>
</tr>
{% endif %}
{% if t.tags %}
<tr>
    <td>
        Tags
    </td>
    <td>
        {{ t.tags | join: ', ' }}
    </td>
</tr>
{% endif %}
</table>
{% else %}
Something went wrong and collection of theses is empty :(
{% endfor %}


