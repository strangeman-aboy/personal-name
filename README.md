# Dongchen Hao Portfolio

Static personal portfolio site for Dongchen Hao.

## Local Preview

```powershell
python -m http.server 5173 --bind 127.0.0.1
```

Open <http://127.0.0.1:5173/>.

## Deployment

This repository is configured for GitHub Pages through `.github/workflows/pages.yml`.
The workflow prepares a `dist` folder with `/personal-name` path prefixes, so the site can run from:

<https://strangeman-aboy.github.io/personal-name/>
