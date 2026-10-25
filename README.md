# Kumar Shubham: Network Engineer Portfolio

React + Vite + plain CSS. All content is in `src/data/content.js` (single source: the resume PDF).

## Run
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # outputs dist/
    npm run preview

## Deploy
- **Vercel:** push to GitHub, Import Project, framework Vite (build `npm run build`, output `dist`).
- **Netlify:** build command `npm run build`, publish directory `dist`.

## Add content
Add an object to `projects` or `skills` in `src/data/content.js`. New project categories appear in the filter when added to `projectCategories`.

## TODO
- `linkedin` in `content.js`: the PDF shows a LinkedIn label but no URL. Add it to show the link.
- `index.html`: add `og:url` and `og:image` after deploying.
- No contact form is included (it would need a backend such as Formspree or Netlify Forms).
- Replace `public/Kumar_Shubham_Resume.pdf` when the resume changes.
