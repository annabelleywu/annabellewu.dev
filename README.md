# annabelleywu.github.io

My personal portfolio site, live at **https://annabellewu.dev**.

## How it works

GitHub Pages serves the files in this repo as a website. No build tools
or frameworks: it's plain HTML and CSS.

```
index.html            ← home: about, education, recognition
experience.html       ← year timeline of roles
projects.html         ← list of projects / papers
assets/css/style.css  ← shared styling for all pages (colors, fonts, spacing)
assets/img/           ← put your photo / images here
CNAME                 ← custom domain (annabellewu.dev), managed by GitHub
_config.yml           ← site title & description for GitHub Pages
```

## Editing

1. Open `index.html` and search for `[`. Every `[bracketed text]` is a placeholder.
2. To add an item, copy a whole `<li>` or `<article>` block and paste it below.
   The nav is copied into each page, so change nav links in all three files.
3. To change the accent color, edit `--accent` at the top of `style.css`.
4. Add your photo as `assets/img/profile.jpg` and your resume as
   `assets/resume.pdf`, then update the filenames in `index.html`.

## Preview locally

Open `index.html` in a browser, or run a tiny local server:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Publish

Commit and push to the branch GitHub Pages builds from
(Settings → Pages). Changes go live within a minute or two.
