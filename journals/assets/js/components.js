// Header Component
class MainNav extends HTMLElement {
    connectedCallback() {
        // Check if we are inside the 'journal' folder to adjust paths
        const isSubPage = window.location.pathname.includes('/journals/');
        const pathPrefix = isSubPage ? '../' : './';

        this.innerHTML = `
        <nav>
            <a href="${pathPrefix}index.html" class="nav-logo">RUCHITA BHALALA</a>
            <div class="nav-links">
                <a href="${pathPrefix}index.html">Portfolio</a>
                <a href="${pathPrefix}journal.html" style="margin-left: 30px;">Journal</a>
            </div>
        </nav>
        `;
    }
}

// Footer Component
class MainFooter extends HTMLElement {
    connectedCallback() {
        const isSubPage = window.location.pathname.includes('/journal/');
        const pathPrefix = isSubPage ? '../' : './';

        this.innerHTML = `
        <footer>
            <div class="footer-content">
                <div class="footer-grid">
                    <div class="footer-brand">
                        <h3>Engineering Journal</h3>
                        <p>Technical deep-dives into Shopify app development and scalable backend solutions.</p>
                    </div>
                    <div class="footer-links">
                        <h4>Navigation</h4>
                        <ul>
                            <li><a href="${pathPrefix}index.html">Portfolio</a></li>
                            <li><a href="${pathPrefix}journal.html">Journal</a></li>
                            <li><a href="${pathPrefix}index.html#projects">Case Studies</a></li>
                        </ul>
                    </div>
                    <div class="footer-links">
                        <h4>Connect</h4>
                        <ul>
                            <li><a href="https://linkedin.com/in/ruchitagelani" target="_blank" rel="me noopener">LinkedIn</a></li>
                            <li><a href="https://github.com/rgelani" target="_blank" rel="me noopener">GitHub</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="copyright">© 2025 Ruchita Bhalala. Developed for high-performance commerce.</div>
                </div>
            </div>
        </footer>
        `;
    }
}

// Register the components
customElements.define('main-nav', MainNav);
customElements.define('main-footer', MainFooter);