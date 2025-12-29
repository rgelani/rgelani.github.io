// js/loader.js
async function loadComponent(id, file) {
    const element = document.getElementById(id);
    if (!element) return;

    try {
        const response = await fetch(file);
        const data = await response.text();
        element.innerHTML = data;

        // RE-INITIALIZE LOGIC BASED ON WHAT WAS LOADED
        window.initReveal(); // Refresh reveal for the new content

        if (id === 'nav') window.initNav();
        if (id === 'contact') window.initContactForm();
        
    } catch (error) {
        console.error('Error loading ' + file, error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadComponent('nav', 'sections/nav.html');
    loadComponent('hero', 'sections/hero.html');
    loadComponent('about', 'sections/about.html');
    loadComponent('work', 'sections/projects.html');
    loadComponent('recognition', 'sections/recognition.html');
    loadComponent('skills', 'sections/skills.html');
    loadComponent('journal', 'sections/journal.html');
    loadComponent('contact', 'sections/contact.html');
    loadComponent('footer', 'sections/footer.html');
});