---
title: Deep Forests
layout: post
---

Deep Forests can be viewed as computational pipelines that act differently depending
on execution stage: *fit* or *transform*.
In contrast to neural networks such pipelines don't use backpropagation at the training step.

For managing such structures we've devised a new framework called
[bosk](https://github.com/NTAILab/bosk).
It can be used to build classical Deep Forests as well as arbitrary machine learning
model pipelines.


