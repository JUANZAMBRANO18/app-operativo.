// Aplicación Portal RNMC
const app = {
    // Estado de la aplicación
    simulatorRunning: false,
    notificationsEnabled: true,
    soundsEnabled: true,

    // Inicialización
    init() {
        this.startClock();
        this.showNotification('Portal RNMC cargado correctamente', 'success');
        console.log('Portal RNMC inicializado');
    },

    // Reloj en tiempo real
    startClock() {
        const updateTime = () => {
            const now = new Date();
            document.getElementById('time').textContent = now.toLocaleTimeString('es-CO');
            document.getElementById('date').textContent = now.toLocaleDateString('es-CO');
        };
        updateTime();
        setInterval(updateTime, 1000);
    },

    // Sistema de notificaciones
    showNotification(message, type = 'info') {
        if (!this.notificationsEnabled) return;

        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        let icon = 'info-circle';
        if (type === 'success') icon = 'check-circle';
        if (type === 'error') icon = 'exclamation-circle';
        if (type === 'warning') icon = 'exclamation-triangle';

        toast.innerHTML = `
            <i class="fa-solid fa-${icon}"></i>
            <span>${message}</span>
        `;

        container.appendChild(toast);

        // Auto eliminar después de 3 segundos
        setTimeout(() => {
            toast.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => toast.remove(), 300);
        }, 3000);

        // Sonido si está habilitado
        if (this.soundsEnabled && type !== 'info') {
            this.playNotificationSound();
        }
    },

    playNotificationSound() {
        // Sonido simple usando Web Audio API
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = 800;
            oscillator.type = 'sine';
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.2);
        } catch (e) {
            console.log('Audio no soportado');
        }
    },

    // Ir al sistema oficial
    goToOfficial() {
        this.showNotification('Abriendo sistema oficial RNMC...', 'info');
        setTimeout(() => {
            window.open('https://rnmc2web.policia.gov.co:4443/Login', '_blank');
        }, 500);
    },

    // Cerrar sesión
    logout() {
        if (confirm('¿Está seguro que desea cerrar sesión?')) {
            this.showNotification('Cerrando sesión...', 'warning');
            setTimeout(() => {
                alert('Sesión cerrada correctamente');
                location.reload();
            }, 1000);
        }
    },

    // Búsqueda
    executeSearch() {
        const input = document.getElementById('global-search');
        const query = input.value.trim();
        
        if (!query) {
            this.showNotification('Ingrese un término para buscar', 'error');
            input.focus();
            return;
        }

        this.showNotification(`Buscando: "${query}"`, 'info');
        
        // Simular búsqueda
        setTimeout(() => {
            this.showNotification(`Resultados encontrados para: ${query}`, 'success');
        }, 1500);
    },

    handleSearch(event) {
        if (event.key === 'Enter') {
            this.executeSearch();
        }
    },

    // Mostrar estadísticas
    showStat(statName) {
        const messages = {
            'Casos Activos': 'Cargando casos activos del turno...',
            'Alertas': 'Verificando alertas pendientes...',
            'Unidades': 'Listado de unidades disponibles en línea',
            'Reportes': 'Generando reporte de actividades'
        };
        this.showNotification(messages[statName] || 'Cargando información...', 'info');
    },

    // Abrir módulos
    openModule(moduleName) {
        this.showNotification(`Accediendo a módulo: ${moduleName}`, 'info');
        
        setTimeout(() => {
            this.showNotification(`${moduleName} - Listo para consultar`, 'success');
        }, 1000);
    },

    // Simulador táctico
    toggleSimulator() {
        const btn = document.getElementById('btn-sim-start');
        const status = document.getElementById('sim-status');

        if (this.simulatorRunning) {
            // Detener simulador
            this.simulatorRunning = false;
            btn.innerHTML = '<i class="fa-solid fa-play"></i> Iniciar Escenario';
            btn.classList.remove('btn-secondary');
            btn.classList.add('btn-primary');
            status.className = 'sim-status idle';
            status.innerHTML = '<i class="fa-solid fa-circle-pause"></i><span>ESPERANDO INICIO</span>';
            this.showNotification('Simulación detenida', 'warning');
        } else {
            // Iniciar simulador
            this.simulatorRunning = true;
            btn.innerHTML = '<i class="fa-solid fa-stop"></i> Detener Escenario';
            btn.classList.remove('btn-primary');
            btn.classList.add('btn-secondary');
            status.className = 'sim-status running';
            status.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i><span>SIMULACIÓN EN CURSO</span>';
            this.showNotification('Iniciando escenario táctico...', 'success');

            // Simular progreso
            setTimeout(() => {
                if (this.simulatorRunning) {
                    status.className = 'sim-status complete';
                    status.innerHTML = '<i class="fa-solid fa-check-circle"></i><span>SIMULACIÓN COMPLETADA</span>';
                    this.showNotification('Escenario completado exitosamente', 'success');
                }
            }, 5000);
        }
    },

    resetSimulator() {
        this.simulatorRunning = false;
        const btn = document.getElementById('btn-sim-start');
        const status = document.getElementById('sim-status');
        
        btn.innerHTML = '<i class="fa-solid fa-play"></i> Iniciar Escenario';
        btn.classList.remove('btn-secondary');
        btn.classList.add('btn-primary');
        status.className = 'sim-status idle';
        status.innerHTML = '<i class="fa-solid fa-circle-pause"></i><span>ESPERANDO INICIO</span>';
        
        this.showNotification('Simulador reiniciado', 'info');
    },

    // Configuración
    toggleSetting(settingName, enabled) {
        if (settingName === 'Notificaciones') {
            this.notificationsEnabled = enabled;
            this.showNotification(
                enabled ? 'Notificaciones activadas' : 'Notificaciones desactivadas', 
                enabled ? 'success' : 'warning'
            );
        } else if (settingName === 'Sonidos') {
            this.soundsEnabled = enabled;
            this.showNotification(
                enabled ? 'Sonidos activados' : 'Sonidos desactivados', 
                enabled ? 'success' : 'warning'
            );
        }
    }
};

// Iniciar aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});