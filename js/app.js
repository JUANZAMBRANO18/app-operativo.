/**
 * APP OPERATIVO - Funcionalidades JavaScript
 * Sistema Táctico Policial
 */

// ===================================
// Reloj en Tiempo Real
// ===================================
function updateClock() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('es-ES', { hour12: false });
    const liveTimeElement = document.getElementById('liveTime');
    
    if (liveTimeElement) {
        liveTimeElement.textContent = timeStr;
    }
}

// Iniciar reloj y actualizar cada segundo
setInterval(updateClock, 1000);
updateClock();

// ===================================
// Interactividad de Tarjetas del Dashboard
// ===================================
function initializeDashboardCards() {
    const dashCards = document.querySelectorAll('.dash-card');
    
    dashCards.forEach(card => {
        card.addEventListener('click', () => {
            const label = card.querySelector('.label');
            const moduleName = label ? label.textContent.trim() : 'Módulo';
            console.log('Navegación a módulo:', moduleName);
            // Aquí se puede agregar lógica de navegación real
        });
    });
}

// ===================================
// Botón de Simulador Táctico
// ===================================
function initializeSimButton() {
    const simBtn = document.querySelector('.btn-sim');
    
    if (simBtn) {
        simBtn.addEventListener('click', () => {
            console.log('Iniciando simulación táctica...');
            // Aquí se puede agregar la lógica del simulador
        });
    }
}

// ===================================
// Botón de Desconexión
// ===================================
function initializeDisconnectButton() {
    const disconnectBtn = document.querySelector('.disconnect-btn');
    
    if (disconnectBtn) {
        disconnectBtn.addEventListener('click', () => {
            alert('Sesión finalizada. Modo demostración.');
            // Aquí se puede agregar lógica de cierre de sesión
        });
    }
}

// ===================================
// Búsqueda
// ===================================
function initializeSearch() {
    const searchInput = document.querySelector('.search-box input');
    
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query) {
                    console.log('Búsqueda:', query);
                    // Aquí se puede agregar la lógica de búsqueda
                }
            }
        });
    }
}

// ===================================
// Inicialización General
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    initializeDashboardCards();
    initializeSimButton();
    initializeDisconnectButton();
    initializeSearch();
    
    console.log('APP OPERATIVO - Sistema inicializado correctamente');
});
