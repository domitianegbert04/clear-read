# ClearRead

**A minimalist, distraction-free reading utility designed for the modern web.**

[👉 View Live Demo](https://domitianegbert04.github.io/clear-read/)

---

## 📖 Overview
The modern web is cluttered with sidebars, advertisements, trackers, and navigation menus. `clear-read` strips away this "noise," delivering an "E-Ink" style reading experience. Whether you are reviewing technical documentation, reading long-form essays, or analyzing your own local markdown notes, `clear-read` provides a focused, high-readability environment.

## ✨ Core Features
* **Dual-Mode Content Engine:**
    * **Remote URL Processing:** View web articles in a sanitized, reader-first layout.
    * **Local-First Parsing:** Upload `.txt` or `.md` files directly. This bypasses CORS and security restrictions, ensuring you can read your private documents securely in your browser.
* **Customizable "Zen Mode":**
    * **Dark/Light Theme Toggle:** Instantly adjust your reading environment for optimal eye comfort.
    * **Print to PDF:** Need an offline copy? Export your clean, formatted text directly to PDF.
* **Browser-Native Security:** * Uses secure `sandbox` attributes to handle content rendering safely while allowing essential functionality like printing.
    * Zero-backend architecture: Your data never leaves your browser.

## 🚀 How to Use
1.  **Open the App:** Navigate to the [Live Demo](https://domitianegbert04.github.io/clear-read/).
2.  **View Online:** Paste a URL and click **Render URL**. *(Note: Due to web security policies, some high-security sites may restrict external embedding.)*
3.  **Read Local Files:** Click **Choose File** to upload your own markdown or text documents.
4.  **Customize:** Use the **Toggle Theme** button to switch to Dark Mode or **Export to PDF** to save your content.

## 🛠 Technical Implementation
* **Frontend:** Vanilla JavaScript, HTML5, and CSS3.
* **Content Handling:** Utilizes `srcdoc` and `Blob` APIs for secure local content injection.
* **Styling:** Dynamic CSS injection to override existing web page layouts with custom typography (Georgia, serif).
* **Security Architecture:** Implements a sandboxed `iframe` configuration with `allow-modals` for print support.



## 🤝 Contributing
Built as a personal utility, this project focuses on privacy and simplicity. Feel free to fork the repository and submit pull requests for features like persistent local storage or advanced Markdown parsing!

## 📄 License
Distributed under the MIT License.
