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


 const fileInput = document.getElementById('fileInput');

// Replace your existing file input listener with this to ensure the CSS sticks
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (event) => {
        const text = event.target.result;
        // Create the clean HTML page
        const htmlContent = `
            <html>
                <head><style>
                    body { background: #f4f4f4; color: #1a1a1a; font-family: Georgia, serif; line-height: 1.6; padding: 40px; }
                    div { max-width: 65ch; margin: auto; }
                </style></head>
                <body><div>${text}</div></body>
            </html>`;
        
        const blob = new Blob([htmlContent], {type: 'text/html'});
        frame.src = URL.createObjectURL(blob);
    };
    reader.readAsText(file);
});
});   
});
