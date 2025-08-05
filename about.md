---
title: About
layout: post

---

## Andrei Vladimirovich Konstantinov

This website serves as a portfolio showcasing my research and professional activities. I am a PhD in Physics and Mathematics with a strong focus on developing innovative solutions within machine learning and related fields. My background combines rigorous mathematical training with practical experience in data science and computational techniques.

## Academic Background & Research Interests

I completed my undergraduate education at Peter the Great Polytechnic University, earning a degree in Applied Mathematics.  My doctoral research centers around addressing challenging problems in machine learning through novel theoretical frameworks and algorithmic development. My primary research interests include:

*   **Hard Constraints in Neural Networks:** Developing methods to enforce explicit constraints on neural network outputs, ensuring adherence to domain-specific rules and regulations.
*   **Hybrid Models: Decision Trees & Neural Networks:**  Developing novel architectures that combine the interpretability of decision trees with the representational power of neural networks, aiming to achieve both accuracy and explainability.
*   **Interpretable Machine Learning (xAI):** Developing and applying techniques to enhance the transparency and understandability of machine learning models, enabling users to gain insights into model decision-making processes.
*   **Concept-Based Learning:** Investigating approaches that explicitly represent and leverage human-understandable concepts within machine learning models, facilitating knowledge transfer and improving generalization capabilities.
*   **Multiple Instance Learning (MIL):** Exploring MIL approaches for scenarios with ambiguous data labels, enabling robust learning from incomplete or uncertain information.
*   **Survival Analysis:** Applying machine learning techniques to model time-to-event outcomes, particularly in contexts where censoring is present.
*   **Heterogeneous Treatment Effect:** Investigating methods for identifying and modeling how treatment effects vary depending on instance features.


## Publications & Theses

{% assign theses = site.data.theses | sort: 'year', 'last' | reverse %}


- [Publications](publications)
    {% include_relative _includes/publications_summary.md %}
- [Theses](theses)
{% for t in theses %}
    - [**{{ t.degree }}** ({{ t.year | default: "in progress" }}) {{ t.translation }} ](theses#{{ t.degree | slugify }})
{% endfor %}

## Skills & Experience

Beyond my research, I have cultivated a diverse skillset through various experiences.  Participation in debate teams honed my abilities in critical thinking, persuasive communication, and active listening – skills essential for effective collaboration and presenting complex ideas clearly. Furthermore, managing a student video department provided valuable experience in creative problem-solving, storytelling, and project management within a collaborative environment.
In my leisure time, I enjoy playing the guitar and piano.

