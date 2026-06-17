// navigation.js
const navigationTemplate = document.createElement('template');

navigationTemplate.innerHTML = `
    <!-- Navegación -->
    <nav class="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
        <div class="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
            <a href="index.html" class="font-bold tracking-tighter text-xl"><img src="./assets/logo-golden.png" width="100"><span class="text-blue-600"></span></a>

            <!-- Desktop links -->
            <div id="desktop-links" class="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest">
                <a href="index.html#perfil" class="hover:text-blue-600 transition text-slate-600">Perfil</a>
                <a href="index.html#experiencia" class="hover:text-blue-600 transition text-slate-600">Experiencia</a>
                <a href="proyectos.html" class="hover:text-blue-600 transition text-slate-600">Proyectos</a>
                <a href="https://github.com/Gseguelg" target="_blank" class="hover:text-blue-600 transition text-slate-600">Github</a>
                <a href="index.html#contacto" class="text-blue-600 border border-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 transition">Contacto</a>
            </div>

            <!-- Mobile hamburger -->
            <button id="hamburger" class="md:hidden flex flex-col gap-1.5 p-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition" onclick="toggleMenu()">
                <span class="w-5 h-0.5 bg-slate-600 block transition-all" id="h1"></span>
                <span class="w-5 h-0.5 bg-slate-600 block transition-all" id="h2"></span>
                <span class="w-5 h-0.5 bg-slate-600 block transition-all" id="h3"></span>
            </button>
        </div>

        <!-- Mobile menu -->
        <div id="mobile-menu" class="hidden flex-col md:hidden bg-white border-t border-slate-100 px-5 py-4 space-y-1">
            <a href="index.html#perfil" onclick="closeMenu()" class="block py-3 text-sm font-medium uppercase tracking-widest text-slate-600 hover:text-blue-600 border-b border-slate-100">Perfil</a>
            <a href="index.html#experiencia" onclick="closeMenu()" class="block py-3 text-sm font-medium uppercase tracking-widest text-slate-600 hover:text-blue-600 border-b border-slate-100">Experiencia</a>
            <a href="proyectos.html" class="block py-3 text-sm font-medium uppercase tracking-widest text-slate-600 hover:text-blue-600 border-b border-slate-100">Proyectos</a>
            <a href="https://github.com/Gseguelg" target="_blank" class="block py-3 text-sm font-medium uppercase tracking-widest text-slate-600 hover:text-blue-600 border-b border-slate-100">Github</a>
            <a href="index.html#contacto" onclick="closeMenu()" class="block py-3 text-sm font-medium uppercase tracking-widest text-blue-600">Contacto</a>
        </div>
    </nav>
`;

// Append the navigation template to the body
document.body.appendChild(navigationTemplate.content);

// Function to highlight the active menu items
function updateActiveNavigation() {
    // Get current filename (e.g., 'proyectos.html' or 'index.html')
    let currentPage = window.location.pathname.split("/").pop();
    if (currentPage === "" || currentPage === "/") {
        currentPage = "index.html";
    }
    
    const currentHash = window.location.hash;
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;

        // Reset default styling
        if (link.classList.contains('border-blue-600')) {
            // Keep specific button styling for Contacto on desktop
            link.classList.remove('bg-blue-50');
        } else {
            link.classList.remove('text-blue-600');
            link.classList.add('text-slate-600');
        }

        // Determine if this link matches current page/hash
        let isCurrent = false;

        if (href === currentPage) {
            isCurrent = true;
        } else if (href.includes('#')) {
            const [pagePart, hashPart] = href.split('#');
            // Matches if we are on the correct page and the hash matches
            const pageMatches = pagePart === currentPage || (pagePart === '' && currentPage === 'index.html');
            const hashMatches = currentHash === '#' + hashPart;
            
            if (pageMatches && hashMatches) {
                isCurrent = true;
            }
        }

        // Apply active styles
        if (isCurrent) {
            if (link.classList.contains('border-blue-600')) {
                link.classList.add('bg-blue-50');
            } else {
                link.classList.remove('text-slate-600');
                link.classList.add('text-blue-600', 'font-semibold');
            }
        }
    });
}

// Run on page load
window.addEventListener('DOMContentLoaded', updateActiveNavigation);

// Run on hash changes (when user clicks an anchor link like #experiencia on the same page)
window.addEventListener('hashchange', updateActiveNavigation);


// Basic mobile menu toggle functions (assuming they are needed by your template markup)
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const h1 = document.getElementById('h1');
    const h2 = document.getElementById('h2');
    const h3 = document.getElementById('h3');
    
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('flex');
        // Transform hamburger to X
        h1.classList.add('rotate-45', 'translate-y-2');
        h2.classList.add('opacity-0');
        h3.classList.add('-rotate-45', '-translate-y-2');
    } else {
        closeMenu();
    }
}

function closeMenu() {
    const menu = document.getElementById('mobile-menu');
    const h1 = document.getElementById('h1');
    const h2 = document.getElementById('h2');
    const h3 = document.getElementById('h3');
    
    if (menu) {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
    }
    if (h1 && h2 && h3) {
        h1.classList.remove('rotate-45', 'translate-y-2');
        h2.classList.remove('opacity-0');
        h3.classList.remove('-rotate-45', '-translate-y-2');
    }
}