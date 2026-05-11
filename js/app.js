/**
 * PORTAL RNMC - Funcionalidades JavaScript
 * Sistema Integrado Policía Nacional
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
    const dateDisplayElement = document.getElementById('liveDate');
    
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
    const toastContainer = document.getElementById('toastContainer');
    
    // Eliminar notificaciones anteriores
    const existingToast = toastContainer.querySelector('.toast-notification');
    if (existingToast) {
        existingToast.remove();
    }
    
    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type}`;
    toast.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===================================
// Tarjetas de Estadísticas del Dashboard
// ===================================
function initializeStatCards() {
    const statCards = document.querySelectorAll('.stat-card');
    
    statCards.forEach(card => {
        card.addEventListener('click', () => {
            const action = card.getAttribute('data-action');
            const label = card.querySelector('.stat-label');
            const labelText = label ? label.textContent.trim() : 'Módulo';
            
            switch(action) {
                case 'ver-casos':
                    showNotification('Cargando casos activos...', 'info');
                    break;
                case 'ver-alertas':
                    showNotification('Mostrando alertas pendientes...', 'warning');
                    break;
                case 'ver-unidades':
                    showNotification('Listado de unidades disponibles', 'info');
                    break;
                case 'ver-reportes':
                    showNotification('Abriendo reportes recientes...', 'info');
                    break;
                default:
                    showNotification(`Accediendo a ${labelText}...`, 'info');
            }
            console.log('Acción dashboard:', action);
        });
    });
}

// ===================================
// Módulos de Consulta
// ===================================
function initializeModuleButtons() {
    const moduleBtns = document.querySelectorAll('.module-btn');
    
    moduleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const module = btn.getAttribute('data-module');
            const span = btn.querySelector('span');
            const moduleName = span ? span.textContent.trim() : 'Módulo';
            
            switch(module) {
                case 'consultas':
                    showNotification('Abriendo consultas generales...', 'info');
                    break;
                case 'antecedentes':
                    showNotification('Cargando sistema de antecedentes...', 'info');
                    break;
                case 'vehiculos':
                    showNotification('Accediendo a consulta de vehículos...', 'info');
                    break;
                case 'personas':
                    showNotification('Abriendo módulo de personas...', 'info');
                    break;
                default:
                    showNotification(`Iniciando ${moduleName}...`, 'info');
            }
            console.log('Módulo seleccionado:', module);
        });
    });
}

// ===================================
// Botón de Búsqueda
// ===================================
function initializeSearchButton() {
    const btnSearch = document.getElementById('btnSearch');
    const searchInput = document.getElementById('searchInput');
    
    if (btnSearch && searchInput) {
        btnSearch.addEventListener('click', () => {
            const query = searchInput.value.trim();
            if (query) {
                showNotification(`Buscando: ${query}`, 'info');
                console.log('Búsqueda:', query);
                searchInput.value = '';
            } else {
                showNotification('Ingrese un término para buscar', 'error');
            }
        });
        
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                btnSearch.click();
            }
        });
    }
}

// ===================================
// Botón de Desconexión
// ===================================
function initializeDisconnectButton() {
    const disconnectBtn = document.getElementById('disconnectBtn');
    
    if (disconnectBtn) {
        disconnectBtn.addEventListener('click', () => {
            showNotification('Sesión finalizada. ¡Hasta pronto!', 'error');
            console.log('Cierre de sesión solicitado');
        });
    }
}

// ===================================
// Simulador Táctico - Botón Iniciar
// ===================================
function initializeSimulatorStart() {
    const btnStartSim = document.getElementById('btnStartSim');
    const simStatus = document.getElementById('simStatus');
    
    if (btnStartSim && simStatus) {
        btnStartSim.addEventListener('click', () => {
            simStatus.innerHTML = '<i class="fas fa-spinner fa-spin" style="color:#f59e0b;"></i> INICIANDO ESCENARIO...';
            showNotification('Iniciando simulador táctico...', 'success');
            console.log('Iniciando simulación táctica...');
            
            setTimeout(() => {
                simStatus.innerHTML = '<i class="fas fa-circle" style="color:#10b981; font-size:0.5rem;"></i> SIMULACIÓN EN CURSO';
                showNotification('Escenario activo - Buen entrenamiento', 'success');
            }, 2000);
        });
    }
}

// ===================================
// Simulador Táctico - Botón Reiniciar
// ===================================
function initializeSimulatorReset() {
    const btnResetSim = document.getElementById('btnResetSim');
    const simStatus = document.getElementById('simStatus');
    
    if (btnResetSim && simStatus) {
        btnResetSim.addEventListener('click', () => {
            simStatus.innerHTML = '<i class="fas fa-circle" style="color:#10b981; font-size:0.5rem;"></i> LISTO PARA INICIAR';
            showNotification('Simulador reiniciado', 'info');
            console.log('Reiniciando simulador...');
        });
    }
}

// ===================================
// Toggles de Configuración
// ===================================
function initializeSettingsToggles() {
    const toggleNotif = document.getElementById('toggleNotif');
    const toggleSound = document.getElementById('toggleSound');
    
    if (toggleNotif) {
        toggleNotif.addEventListener('change', (e) => {
            if (e.target.checked) {
                showNotification('Notificaciones activadas', 'success');
            } else {
                showNotification('Notificaciones desactivadas', 'info');
            }
        });
    }
    
    if (toggleSound) {
        toggleSound.addEventListener('change', (e) => {
            if (e.target.checked) {
                showNotification('Sonido activado', 'success');
            } else {
                showNotification('Sonido desactivado', 'info');
            }
        });
    }
}

// ===================================
// Enlace al RNMC Oficial
// ===================================
function initializeRNMCConnection() {
    const connectLink = document.querySelector('.btn-connect-official');
    
    if (connectLink) {
        connectLink.addEventListener('click', () => {
            showNotification('Abriendo portal RNMC oficial...', 'info');
            console.log('Redirigiendo a rnmc2web.policia.gov.co');
        });
    }
}

// ===================================
// Inicialización General
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    initializeStatCards();
    initializeModuleButtons();
    initializeSearchButton();
    initializeDisconnectButton();
    initializeSimulatorStart();
    initializeSimulatorReset();
    initializeSettingsToggles();
    initializeRNMCConnection();
    
    showNotification('Portal RNMC inicializado correctamente', 'success');
    console.log('PORTAL RNMC - Sistema inicializado correctamente');
});
