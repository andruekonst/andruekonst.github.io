---
title: Theses
layout: post
---

{% assign theses = site.data.theses | sort: 'year', 'last' | reverse %}
{% for t in theses %}
### {{ t.degree }} ({{ t.year | default: "in progress" }}) {#{{ t.degree | slugify }}}
**«{{ t.translation }}»**
{% if t.lang == 'ru' %}
Original title in russian:
> {{ t.title }}
{% endif %}
{% if t.defence_url %}

<a href="{{ t.defence_url }}" target=_blank>Official defence page</a>
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
{% if t.date %}
<tr>
    <td>
        Date
    </td>
    <td>
        {{ t.date }}
    </td>
</tr>
{% endif %}
{% if t.links %}
<tr>
    <td>
        Links
    </td>
    <td>
        {% for link in t.links %}
            <a href="{{ link[1] }}" target=_blank>{{ link[0] }}</a><br />
        {% endfor %}
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
{% if t.annotation %}
<tr>
    <td>
        Annotation
    </td>
    <td>
        <pre style="white-space: pre-wrap">{{ t.annotation }}</pre>
    </td>
</tr>
{% endif %}
</table>
{% else %}
Something went wrong and collection of theses is empty :(
{% endfor %}
