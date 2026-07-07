const loadBtn = document.getElementById('loadBtn');
const urlInput = document.getElementById('urlInput');
const frame = document.getElementById('readerFrame');
const fileInput = document.getElementById('fileInput');

// Logic for URL loading
loadBtn.addEventListener('click', () => {
    frame.src = urlInput.value;
});

// Inject CSS whenever a remote URL loads in the iframe
frame.addEventListener('load', () => {
    try {
        const style = document.createElement('style');
        style.textContent = `
            body { background: #f4f4f4 !important; color: #1a1a1a !important; font-family: Georgia, serif !important; }
            p { max-width: 65ch; margin: 1em auto; line-height: 1.6; }
            nav, footer, aside, .ad, .sidebar { display: none !important; }
        `;
        frame.contentDocument.head.appendChild(style);
    } catch (e) {
        console.log("Could not inject CSS (likely a cross-origin security block).");
    }
});

// Logic for local file uploading
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    
    reader.onload = (event) => {
        // Use srcdoc for instant rendering without needing to manage Blob URLs
        frame.srcdoc = `
            <html>
                <body style="font-family: Georgia, serif; padding: 40px; line-height: 1.6; background: #f4f4f4;">
                    <div style="max-width: 65ch; margin: auto;">
                        ${event.target.result.replace(/\n/g, '<br>')}
                    </div>
                </body>
            </html>`;
    };
    reader.readAsText(file);
});


