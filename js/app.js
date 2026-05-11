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
    const dateStr = now.toLocaleDateString('es-ES', { 
        weekday: 'short', 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric' 
    });
    const liveTimeElement = document.getElementById('liveTime');
    const dateDisplayElement = document.querySelector('.date-display');
    
    if (liveTimeElement) {
        liveTimeElement.textContent = timeStr;
    }
    if (dateDisplayElement) {
        dateDisplayElement.textContent = dateStr;
    }
}

// Iniciar reloj y actualizar cada segundo
setInterval(updateClock, 1000);
updateClock();

// ===================================
// Notificaciones Toast
// ===================================
function showNotification(message, type = 'info') {
    // Eliminar notificaciones anteriores
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) {
        existingToast.remove();
    }
    
    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type}`;
    toast.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===================================
// Interactividad de Tarjetas del Dashboard
// ===================================
function initializeDashboardCards() {
    const dashCards = document.querySelectorAll('.dash-card');
    
    dashCards.forEach(card => {
        card.addEventListener('click', () => {
            const label = card.querySelector('.label');
            const moduleName = label ? label.textContent.trim() : 'Módulo';
            showNotification(`Abriendo ${moduleName}...`, 'info');
            console.log('Navegación a módulo:', moduleName);
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
            showNotification('Iniciando simulador táctico...', 'success');
            console.log('Iniciando simulación táctica...');
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
            showNotification('Sesión finalizada. Modo demostración.', 'error');
            console.log('Cierre de sesión');
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
                    showNotification(`Buscando: ${query}`, 'info');
                    console.log('Búsqueda:', query);
                }
            }
        });
    }
}

// ===================================
// Módulos MIT
// ===================================
function initializeMITModules() {
    const mitCards = document.querySelectorAll('.mit-card');
    
    mitCards.forEach(card => {
        card.addEventListener('click', () => {
            const code = card.querySelector('.mit-code');
            const desc = card.querySelector('.mit-desc');
            const moduleName = code ? code.textContent : 'Módulo';
            showNotification(`Accediendo a ${moduleName}: ${desc ? desc.textContent : ''}`, 'info');
        });
    });
}

// ===================================
// Inicialización General
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    initializeDashboardCards();
    initializeSimButton();
    initializeDisconnectButton();
    initializeSearch();
    initializeMITModules();
    
    showNotification('Sistema inicializado correctamente', 'success');
    console.log('APP OPERATIVO - Sistema inicializado correctamente');
});
