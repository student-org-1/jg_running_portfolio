# Student Portfolio

A simple multi-page portfolio built with GitHub Primer styling and deployed with
GitHub Pages.

## Customize

Search the HTML files for `EDIT:` comments and replace the starter content:

- `index.html` — name, introduction, quick facts, and featured work
- `about.html` — education, experience, interests, and skills
- `projects.html` — project summaries, technology tags, and links
- `contact.html` — email and social links
- `assets/mark.svg` — the starter `JS` monogram

The content is deliberately generic so it does not invent personal achievements.

## Preview

Open `index.html` directly in a browser. No build step is required.

## Deploy

Push the repository to GitHub and enable **Settings → Pages → Source → GitHub
Actions**. The workflow in `.github/workflows/pages.yml` publishes the site on
every push to `main`.

For a project repository, the URL will normally be:

```text
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/
```

## Reuse the portfolio agent

The repository includes a GitHub Copilot custom agent at:

```text
.github/agents/student-portfolio-builder.agent.md
```

Select **student-portfolio-builder** in GitHub Copilot, then give it your real
student details and project information. For example:

```text
Customize this portfolio for Alex Chen, a computer science student. Use the three
projects described below, replace all starter details, keep the Primer design, and
leave the GitHub Pages workflow ready for deployment.
```

The agent is manually invoked so it will not take over unrelated repository tasks.
