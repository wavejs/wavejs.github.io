# wavejs.github.io

The wavejs.github.io static web with [Gatsbyjs](https://www.gatsbyjs.org)

# Important!

Out default branch is `source`. You can write post, create static page in `source` branch. `master` branch is just use for deploy.

## Branches

**source**

Gatsby's source is here. layouts, pages, templates, sass and others.

**posts**

Posting contents is here. All posts have to written by markdown.

**master**

Don't push direct to this branch. master branch is deploy branch. When you run deploy script, updated.

## Installation for development

Make sure that you have the Gatsby CLI program installed:

(If you don't install yarn yet, look at [this](https://yarnpkg.com/en/docs/install#mac-stable) first.)

```sh
$ yarn install
```

And run gatsby for development

```sh
$ gatsby develop
```

## Deploy

```sh
$ yarn deploy
```