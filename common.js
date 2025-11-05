// common.js - Shared JavaScript for all pages

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navMenu && hamburger && !navMenu.contains(event.target) && !hamburger.contains(event.target)) {
            navMenu.classList.remove('active');
        }
    });
});

// ✅ Load navigation FIRST, THEN activate links
fetch("/navigation.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("nav").innerHTML = html;
    setActiveNavLink();    // ✅ Now navigation exists before we check links
  });

// ✅ Correct folder-based active link logic
function setActiveNavLink() {
    const path = window.location.pathname;

    document.querySelectorAll('#nav a').forEach(link => {
        const href = link.getAttribute('href');

        // Homepage
        if (href === "/" && path === "/") {
            link.classList.add("active");
            return;
        }

        // Folder-based navigation (/about/, /faculty/, etc.)
        if (path.startsWith(href)) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

// Set page title helper
function setPageTitle(title) {
    const titleElement = document.getElementById('page-title');
    if (titleElement) {
        titleElement.textContent = title;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('nav-menu-mobile');
    const overlay = document.getElementById('menu-overlay');

    function openMenu() {
        mobileMenu.setAttribute('aria-hidden', 'false');
        toggleBtn.setAttribute('aria-expanded', 'true');
        toggleBtn.textContent = 'CLOSE';
        overlay.setAttribute('aria-hidden', 'false');
        document.body.classList.add('menu-open');
    }

    function closeMenu() {
        mobileMenu.setAttribute('aria-hidden', 'true');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.textContent = 'MENU';
        overlay.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('menu-open');
    }

    toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (toggleBtn.getAttribute('aria-expanded') === 'false') {
            openMenu();
        } else {
            closeMenu();
        }
    });

    overlay.addEventListener('click', closeMenu);

    // Keyboard: Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && toggleBtn.getAttribute('aria-expanded') === 'true') {
            closeMenu();
        }
    });

    // Focus trap: Close if focus leaves menu area
    mobileMenu.addEventListener('focusout', (e) => {
        if (!mobileMenu.contains(e.relatedTarget) && !toggleBtn.contains(e.relatedTarget)) {
            closeMenu();
        }
    });
});
