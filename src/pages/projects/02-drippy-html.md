---
title: Drippy Liquid
subtitle: Why I built my own micro-framework to make this site
template: post
---

## Introduction

While building my portfolio, I wanted to be able to write blog articles in markdown. I'm not the only one: there are many libraries and frameworks that support this for static sites. [Jekyll](https://jekyllrb.com/) and [Astro](https://astro.build/) are two of the most common ones as of 2025. I was loosely aware of them and how they worked already but I decided to do the opposite of what I normally would: I decided to build my own micro-framework with minimal research into these other approaches.

Normally, when I begin a project, I research anything and everything out there trying to do the same thing. But I've reached a point in my career where just learning how Jekyll or Astro works and using it to build a site is no longer interesting to me. There really is so much you can learn from using someone else's tool.

I also shied away from checking out the source code of these other projects. I wanted to tackle the same problem without any bias towards a particular solution. This way, I would be on my own to solve the problem. I hoped by taking the hard way out, I would understand at a deeper level some of the common problems any engineer would face trying to create a frontend framework of any kind.

## Requirements

There were a few things I knew I needed my framework to do:

- Allow me to write files in html
- Allow me to write files in markdown
- HTML files needed to be hydrated with info about the directory
- HTML files needed to be hydrated with pathname
- Support for reusable html

## Constraints

I needed to move relatively quickly so I could get my portfolio site up asap. So for this iteration I probably would be better off leveraging existing primitive libraries rather than writing a custom compiler.

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

[liquidjs](https://liquidjs.com/) provides a simple to use interface for compiling liquid to html. I decided to bring it on board to power the compilation engine.

## Markdown

Next I needed a way to convert markdown to html. [marked](https://marked.js.org/) is another great npm package that does just that. It's a full-featured markdown parser and compiler that's been downloaded over 40 million times. marked supports the standard markdown syntax like headers, lists, code blocks, and links.

## Templates

I knew that I may want to apply different styles to different markdown files. For example, in my portfolio I have a blog section and projects section. The styles that need to be applied may be different for each.

To account for this, I baked in the concept of templates. Liquid files that could be injected with compiled markdown content.

```html
<main>
  <article class="post">
    <h1 class="post__header">{{ title }}</h1>
    {% if subtitle %}
    <p class="post__subtitle">{{ subtitle }}</p>
    {% endif %}
    <div class="post__meta">
      {% if date %}
      <p>{{ date }}</p>
      <p>//</p>
      {% endif %}
      <p>{{ topic }}</p>
    </div>
    <div class="post__content">{{ content | raw }}</div>
  </article>
</main>
```

## Frontmatter

It occurred to me that I may want file-specific information passed into these templates and generally available so that index files could be aware of the structure and summary details of each blog page.

[Frontmatter](https://jekyllrb.com/docs/front-matter/) is a block of YAML at the beginning of a file that contains metadata about that file. It's commonly used in static site generators to define variables that can be accessed during the build process.

For example, in a blog post you might want to specify things like the title, date, author, tags, or other metadata that can be used to organize and display the content. This metadata can then be accessed by templates and used to generate navigation, archives, or other site features. I decided to also use the frontmatter to specify the template that should be applied to the markdown file.

```
---
title: Creating a Popover in React with Pure CSS
template: post
topic: React, CSS
date: Aug 08, 2024
---
```

## Building a website

With all these pieces in place, I deployed to an npm package called drippy-liquid. I was able to build [my portfolio website](https://github.com/mikofo/portfolio) using the `drippy build` command. The site you're on right now is built using drippy-liquid. Each page is a markdown file with frontmatter that specifies which template to use. The templates are liquid files that can access the frontmatter variables and the compiled markdown content.

The build process is simple:

1. Find all markdown files in the source directory
2. Parse the frontmatter and compile the markdown to HTML
3. Find the specified template and inject the compiled content
4. Write the final HTML files to the output directory

The result is a fast, static website that's easy to maintain and extend. No JavaScript frameworks, no complex build processes, just simple HTML and CSS.

## Next Steps

My micro-frontend is still very much intended for personal use only. However, as time allows I'd love to take it further:

- Scoped CSS
- Intellisense / Typing
- Fine-grained control over javascript
