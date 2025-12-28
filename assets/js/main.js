// --- GLOBAL STATE ---
const states = {};

// 1. Carousel Logic (Moved outside so it's globally accessible to onclick)
window.move = function(id, dir) {
    if (!states[id]) states[id] = 0;
    const project = document.querySelector(`[data-id="${id}"]`);
    if (!project) return;
    
    const container = project.querySelector('.carousel-container');
    const items = project.querySelectorAll('.carousel-item');
    if (items.length <= 1) return;
    
    states[id] = (states[id] + dir + items.length) % items.length;
    container.style.transform = `translateX(-${states[id] * 100}%)`;
};

// 2. Reveal Animation Logic (Can be called multiple times)
window.initReveal = function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};

// 3. Contact Form Logic
window.initContactForm = function() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");
    const submitBtn = document.getElementById("submit-btn");

    if (!form) return;

    form.onsubmit = async function(event) {
        event.preventDefault();
        submitBtn.disabled = true;
        submitBtn.innerText = "Sending...";
        
        const data = new FormData(event.target);
        
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                status.innerHTML = "✓ Message sent successfully!";
                status.style.color = "green";
                form.reset();
            } else {
                status.innerHTML = "Oops! Problem sending message.";
                status.style.color = "red";
            }
        }).catch(() => {
            status.innerHTML = "Oops! Network error.";
            status.style.color = "red";
        }).finally(() => {
            submitBtn.disabled = false;
            submitBtn.innerText = "Send Message";
        });
    };
};

// 4. Mobile Menu Logic
window.initNav = function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navTabs = document.getElementById('nav-tabs');
    if (mobileMenu && navTabs) {
        mobileMenu.onclick = () => navTabs.classList.toggle('active');
    }
};

// RUN INITIAL STUFF
document.addEventListener('DOMContentLoaded', () => {
    initReveal();
});

// 5. Project Detail Modal Logic
function openProjectDetail(dataId) {
    const data = document.getElementById(dataId + '-data').innerHTML;
    
    // Create modal element if it doesn't exist
    let modal = document.getElementById('dynamic-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'dynamic-modal';
        modal.className = 'project-modal';
        document.body.appendChild(modal);
    }
    
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal" onclick="closeModal()">&times;</span>
            ${data}
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Stop scrolling
}

function closeModal() {
    document.getElementById('dynamic-modal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Resume scrolling
}