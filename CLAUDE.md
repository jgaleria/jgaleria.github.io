# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
# Install dependencies
bundle install

# Run local development server (http://localhost:4000)
bundle exec jekyll serve

# Build site without serving
bundle exec jekyll build

# Validate HTML/links
bundle exec htmlproofer ./_site
```

## Deployment

The site deploys automatically via GitHub Actions when pushing to `main`. The workflow:
1. Validates `bio.json` syntax
2. Builds Jekyll site
3. Deploys to `gh-pages` branch
4. GitHub Pages serves from `gh-pages`

## Architecture

This is a **TechFolios** portfolio built with Jekyll 4.2 and Bootstrap 5.2.

### Data Flow

All biographical data lives in `_data/bio.json` (JSON Resume format). Templates access it via `site.data.bio.*`. This single file populates:
- Header navigation (name)
- About section (profile, interests, social links)
- Resume page (education, work, skills, etc.)

### Content Types

**Essays** (`essays/*.md`):
```yaml
layout: essay
type: essay
title: "Title"
date: YYYY-MM-DD
published: true
labels:
  - Tag1, Tag2
```

**Projects** (`projects/*.md`):
```yaml
layout: project
type: project
image: img/screenshot.png
title: "Title"
date: YYYY
published: true
labels:
  - Tag1
summary: "Brief description"
```

Both support `draft: true` to hide from listings and `essayurl`/`projecturl` for external links instead of internal pages.

### Layout Hierarchy

```
default.html          # HTML boilerplate, Bootstrap, theme CSS
└── home.html         # Adds header/footer
    ├── essay.html    # Single essay (title, date, content)
    └── project.html  # Single project (title, content)
```

### Include Components

- `_includes/about/about.html` - Profile hero with social icons
- `_includes/projects/projects.html` - Project grid (accepts `limit` param)
- `_includes/projects/project-card.html` - Individual project card
- `_includes/essays/essays.html` - Essay grid (accepts `limit` param)
- `_includes/essays/essay-card.html` - Individual essay card

Home page uses `{% include projects/projects.html limit=4 %}` pattern for pagination.

### Theming

Theme CSS in `css/techfolio-theme/` (default.css active). Change via `techfolio-theme` in `_config.yml`. Themes use CSS custom properties like `--tf-page-bg-color`, `--tf-pill-bg`.

Code syntax theme in `css/rouge/` (github.css active). Change via `rouge-theme` in `_config.yml`.

### Key Files

- `_config.yml` - Jekyll configuration, theme selection
- `_data/bio.json` - All biographical data (edit this for profile updates)
- `index.html` - Home page composition
- `resume.html` - Full CV rendering from bio.json
- `404.html` - Lists all content for navigation fallback
