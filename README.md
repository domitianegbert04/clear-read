# clear-read

A minimalist, browser-native reading utility designed to strip away web clutter and distractions. 

[👉 View Live Demo](https://domitianegbert04.github.io/clear-read/)

## About
Modern websites are often bloated with navigation bars, sidebars, advertisements, and trackers that detract from the reading experience. **clear-read** provides a clean, "E-Ink" aesthetic that forces high-readability typography and a distraction-free layout.

## Features
* **Dual-Mode Content Processing:**
    * **Remote URLs:** View articles in a distraction-free iframe (where security policies permit).
    * **Local Files:** Upload your own `.txt` or `.md` files to render them in a clean, focused reading environment, bypassing all CORS restrictions.
* **E-Ink Aesthetic:** Uses high-contrast grayscale palettes and serif typography to minimize eye strain.
* **Client-Side Only:** No backend, no APIs, and no tracking. Everything runs directly in your browser.

## How to use
1. Visit the [Live Demo](https://domitianegbert04.github.io/clear-read/).
2. **For URLs:** Paste an article URL and click "Render URL". 
   *(Note: Some sites use security headers like `X-Frame-Options` that prevent embedding. If a page refuses to load, try a different source.)*
3. **For Local Files:** Use the file input to select a text or markdown file from your computer to read it instantly in "Zen mode".

## Technical Stack
- **Vanilla JavaScript:** DOM manipulation and `FileReader`/`Blob` APIs.
- **CSS Injection:** Dynamic stylesheet application for distraction-free rendering.
- **Hosting:** GitHub Pages.

## License
Distributed under the MIT License. See `LICENSE` for more information.
