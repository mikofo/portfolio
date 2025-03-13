---
title: Drippy Liquid
subtitle: Why I built my own micro-framework for static sites
template: post
---

## Introduction

While building my portfolio, I wanted to be able to write blog articles in markdown. I'm not the only one: there are many libraries and frameworks that support this for static sites. [Jekyll]() and [Astro]() are two of the most common ones as of 2025. I was loosely aware of them and how they worked already but I decided to do the opposite of what I normally would: I decided to build my own micro-framework with minimal research into these other approaches.

Normally, when I begin a project, I research anything and everything out there trying to do the same thing. But I've reached a point in my career where just learning how Jekyll or Astro works and using it to build a site is no longer interesting to me. There really is so much you can learn from using someone else's tool.

I also shied away from checking out the source code of these other projects. I wanted to tackle the same problem without any bias towards a particular solution. This way, I would be on my own to solve the problem. I hoped by taking the hard way out, I would understand at a deeper level some of the common problems any engineer would face trying to create a frontend framework of any kind.

## Requirements

There were a few things I knew I needed my framework to do:

- Allow me to write files in html
- Allow me to write files in markdown
- HTML files needed to be hydrated with info about the directory
- HTML files needed to be hydrated with pathname
- Support for reusable html

## Liquid

My first task was to decide what language or syntax I would use. I wanted something as close to html as possible, ideally html. I wanted to avoid a situation with a lot abstraction from html. I wanted less to manage with compiling and I want to be able to know exactly what I'm putting in a given html file.

[Liquid](https://shopify.github.io/liquid/) is a template language created by Shopify. It allows you to inject dynamic content into static HTML files using a simple syntax. With Liquid, you can write logic like loops and conditionals directly in your HTML using curly braces and percent signs. For example, `{% if user %}` allows you to conditionally render content, while `{{ user.name }}` lets you output dynamic values.

Liquid strikes a nice balance between being powerful enough to handle complex templating needs while remaining simple and approachable for content authors. The syntax is intentionally limited compared to full programming languages, making it safer to use in templates.

I chose Liquid for my framework because:

- It is html with just enough flow control syntax to elevate development without being overwhelming.
- Allows for the resuing of html without js/shadow-dom.
- I've used liquid for building custom Auth0 universal login pages at [Hum](https://www.humcapital.com), so I am familiar with it.
- It's battle-tested through years of use in Shopify and other platforms
- The syntax is clean and readable

[liquidjs] provides a simple to use interface for compiling liquid to html. I decided to bring it on board to power the compilation engine.

## Markdown
