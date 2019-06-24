# Contributing to developer.equinor.com


## Pull request process
1. Fork the git repo in github
1. Clone the forked repo. : `git clone git@github.com:<username>/developer.git`
1. Write your blog post in a new branch, based on the `develop` branch: `git checkout -b my-blog-post-branch develop`
    - See [Blog post](#blog) for how to create a blog post.
    - The [Run Locally][locally] section in the README describes how you can run the site to see the looks of your post.
1. When you have completed your blog post, create a single commit using a commit message containing the
title of your blog post: `git commit -a -m "my-blog-post blog post"`
1. Push your branch to GitHub: `git push --set-upstream origin my-blog-post-branch`
1. Create a pull request on GitHub from your branch to the `develop` branch

## <a name="blog"></a> Blog post

A blog post is written in markdown, based on the the template shown below.
Start by create a new directory in the `/content/blog` folder, with a [kebab-cased](https://chaseonsoftware.com/most-common-programming-case-types/#kebab-case) name based on the title of you blog post. Then create `index.md` in this directory and copy the content of the template into this file. Then you are ready to blog!

```
---
title: TITLE
date: 2019-01-01
tags:
  - TAG 1
  - TAG 2
authors:
  - GITHUB USERNAME 1
  - GITHUB USERNAME 2
---

Write your blog post here...
```



## Static content

Static content is maintained by the Leading Advisors for software development.

There are two types of static content; _theme pages_ and _documents_.

### Theme Page

A theme page contains a description about a theme (e.g. _API_, _Open Source_, _Software Security_, etc) and set of
links to documents covering the theme. The links are collected by matching the tags in the theme page with the tags of the documents.
E.g. a theme page with the tag `API` will contains links to all pages tagged with `API`.

Template:

```
---
title: TITLE
tags: ['TAG 1']
---

Write your theme description here...
```

### Document

Documents are placed in `index.md` in a separate directories under `/content/docs`.

Template:

```
---
title: TITLE
tags:
  - TAG 1
  - TAG 2
---

Write your document content here...
```

[locally]: https://github.com/equinor/developer/blob/develop/README.md#locally


### Tags
Tags on all content is optional. If no tag is set, the document will automatically be listed in a separate Miscellaneous theme page with a general icon. 
Documents with multiple tags will be listed under multiple theme pages. We encourage writers to be selective in choosing tags. 