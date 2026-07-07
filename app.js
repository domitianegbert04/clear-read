const loadBtn = document.getElementById('loadBtn');
const urlInput = document.getElementById('urlInput');
const frame = document.getElementById('readerFrame');

loadBtn.addEventListener('click', () => {
    frame.src = urlInput.value;
});

frame.addEventListener('load', () => {
    // Inject custom CSS into the iframe
    const style = document.createElement('style');
    style.textContent = `
        body { background: #f4f4f4 !important; color: #1a1a1a !important; font-family: Georgia, serif !important; }
        p { max-width: 65ch; margin: 1em auto; line-height: 1.6; }
        nav, footer, aside, .ad, .sidebar { display: none !important; }
    `;
    frame.contentDocument.head.appendChild(style);
});
