// footer.js
const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
    <footer id="contacto" class="bg-slate-900 text-white py-16 md:py-20 px-5">
        <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-bold mb-4">Contacto</h2>
        <div class="flex flex-wrap justify-center gap-6 md:gap-8 mt-6">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSei_Quq4hQQZV1Gz7C4OFYaktODKp1BbhhdEFyya9KsNqXrSQ/viewform?usp=publish-editor" class="hover:text-blue-400 transition underline underline-offset-8 italic text-sm md:text-base">Mensaje Directo</a>
        <a href="https://www.linkedin.com/in/gabrielseguelg" class="hover:text-blue-400 transition underline underline-offset-8 italic text-sm md:text-base">LinkedIn</a>
        <a href="https://github.com/Gseguelg" class="hover:text-blue-400 transition underline underline-offset-8 italic text-sm md:text-base">Github</a>
        </div>
        <div class="flex flex-wrap justify-center gap-6 md:gap-8 mt-6">
            <img src="./assets/url_qr.png">
        </div>
        <p class="mt-16 text-xs text-slate-500 mono tracking-widest">Junio 2026</p>
        </div>
    </footer>
`;

document.body.appendChild(footerTemplate.content);
