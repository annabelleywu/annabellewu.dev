# annabelleywu.github.io

My personal portfolio site, live at **https://annabelleywu.github.io**.

## How it works

GitHub Pages serves the files in this repo as a website. No build tools
or frameworks: it's plain HTML, CSS and a little JavaScript.

```
index.html            ← all the page content (edit this most)
assets/css/style.css  ← colors, fonts, layout, dark mode
assets/js/main.js     ← dark-mode toggle, mobile menu, scroll fade-in
assets/img/           ← put your profile photo / project images here
_config.yml           ← site title & description for GitHub Pages
```

## Editing

1. Open `index.html` and search for `[`. Every `[bracketed text]` is a placeholder.
2. To add a project or job, copy a whole `<article>` block and paste it below.
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
