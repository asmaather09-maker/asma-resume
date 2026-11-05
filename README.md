# Asma Athar responsive resume

Custom HTML, CSS and JavaScript website populated from AsmaAther-CV.pdf.
No framework, build step, external font or downloaded website template is required.

## Open locally

Extract this folder and open index.html in a browser. Keep styles.css and script.js beside it.
Alternatively serve the directory with any static development server.

## Files

- index.html: semantic page sections and CV content
- styles.css: desktop/mobile layouts, light/dark colours, conceptual project illustrations and print styling
- script.js: category filtering, persistent theme selection, mobile menu and print button
- .nojekyll: avoids Jekyll processing when published on GitHub Pages

The project artwork is illustrative, not a screenshot of the projects themselves.
No project repository links, awards or dates absent from the CV have been invented.

## Meaningful JavaScript feature

The project filter shows All projects, Software, Databases or 3D design. It hides nonmatching cards, updates aria-pressed states and announces the visible project count through aria-live.
Additional features: theme toggle (stored locally when available), mobile navigation, and a print-resume button. Contact links use mailto and tel; there is no server-side contact form.

## Publish using GitHub Pages

1. Sign in to your GitHub account and create a repository, for example asma-resume.
2. Upload index.html, styles.css, script.js and .nojekyll to the repository root. Do not upload private documents or this assignment report to the public website repository.
3. Commit the files to the main branch.
4. Open repository Settings > Pages. Select Deploy from a branch; choose main and /(root), then Save.
5. Wait for deployment, then open the exact published URL displayed by GitHub.
6. Test the live site on desktop and phone widths and check navigation, project filters, theme and contact links.
7. Paste the actual repository URL and live website URL into the publication table in the Word document. Keep both accessible until the end of the semester.

Reference: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Before submission

Review the report and understand/customise the source: the assignment requires your own implementation. Add your student ID if required by the instructor. The CV dates have been preserved as provided. No GitHub account was connected during preparation, so the repository and live-site URLs must be added after publication.
