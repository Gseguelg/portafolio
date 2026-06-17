// navigation.js
const navigationTemplate = document.createElement('template');

navigationTemplate.innerHTML = `
    <!-- Navegación -->
    <nav class="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
        <div class="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
            <a href="index.html" class="font-bold tracking-tighter text-xl"><img src="./assets/logo-golden.png" width="100"><span class="text-blue-600"></span></a>

            <!-- Desktop links -->
            <div class="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest">
                <a href="#perfil" class="hover:text-blue-600 transition">Perfil</a>
                <a href="#experiencia" class="hover:text-blue-600 transition">Experiencia</a>
                <a href="proyectos.html" class="hover:text-blue-600 transition">Proyectos</a>
                <a href="https://github.com/Gseguelg" class="hover:text-blue-600 transition">Github</a>
                <a href="#contacto" class="text-blue-600 border border-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 transition">Contacto</a>
            </div>

            <!-- Mobile hamburger -->
            <button id="hamburger" class="md:hidden flex flex-col gap-1.5 p-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition" onclick="toggleMenu()">
                <span class="w-5 h-0.5 bg-slate-600 block transition-all" id="h1"></span>
                <span class="w-5 h-0.5 bg-slate-600 block transition-all" id="h2"></span>
                <span class="w-5 h-0.5 bg-slate-600 block transition-all" id="h3"></span>
            </button>
        </div>

        <!-- Mobile menu -->
        <div id="mobile-menu" class="flex-col md:hidden bg-white border-t border-slate-100 px-5 py-4 space-y-1">
            <a href="#perfil" onclick="closeMenu()" class="block py-3 text-sm font-medium uppercase tracking-widest text-slate-600 hover:text-blue-600 border-b border-slate-100">Perfil</a>
            <a href="#experiencia" onclick="closeMenu()" class="block py-3 text-sm font-medium uppercase tracking-widest text-slate-600 hover:text-blue-600 border-b border-slate-100">Experiencia</a>
            <a href="proyectos.html" class="block py-3 text-sm font-medium uppercase tracking-widest text-slate-600 hover:text-blue-600 border-b border-slate-100">Proyectos</a>
            <a href="https://github.com/Gseguelg" class="block py-3 text-sm font-medium uppercase tracking-widest text-slate-600 hover:text-blue-600 border-b border-slate-100">Github</a>
            <a href="#contacto" onclick="closeMenu()" class="block py-3 text-sm font-medium uppercase tracking-widest text-blue-600">Contacto</a>
        </div>
    </nav>
`;

document.body.appendChild(navigationTemplate.content);
