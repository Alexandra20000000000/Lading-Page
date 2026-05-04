/*
 * main.js
 * Orquestador principal de la aplicación.
 */
import { initNavbar } from './components/navbar.js';
import { renderCards } from './components/card.js';

async function loadComponent(id, url) {
    const container = document.getElementById(id);
    if (!container) return;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        const html = await response.text();
        container.innerHTML = html;
    } catch (error) {
        console.error(`Error loading component ${url}:`, error);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    // 1. Cargar componentes HTML asíncronamente
    await Promise.all([
        loadComponent("navbar-container", "./views/components/navbar.html"),
        loadComponent("hero-container", "./views/components/hero.html"),
        loadComponent("enter-now-container", "./views/components/enter_now.html")
    ]);

    // 2. Inicializar lógica JS una vez el DOM esté inyectado
    initNavbar();
    renderCards();
});
