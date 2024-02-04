{% assign kinds = site.data.publications | map: 'kind' | uniq %}

    <table>
        <tr>
{% for kind_title in site.data.publication_kinds %}
{% if kinds contains kind_title[0] %}
{% assign pubs = site.data.publications | where: 'kind', kind_title[0] | sort: 'year' | reverse %}
            <td>
                <a href="publications.html#{{ kind_title[0] }}">{{ kind_title[1] }}</a>
            </td>
{% endif %}
{% endfor %}
        </tr>
        <tr>
{% for kind_title in site.data.publication_kinds %}
{% if kinds contains kind_title[0] %}
{% assign pubs = site.data.publications | where: 'kind', kind_title[0] | sort: 'year' | reverse %}
            <td>~{{ pubs | size }}</td>
{% endif %}
{% endfor %}
        </tr>
    </table>
