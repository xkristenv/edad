// Bad practice: Global variables without proper scope
var fechaNacimientoInput;
var calcularBtn;
var reiniciarBtn;
var resultadoDiv;

// Bad practice: Using window.onload instead of DOMContentLoaded
window.onload = function() {
    // Bad practice: Using global variables instead of local ones
    fechaNacimientoInput = document.getElementById('fechaNacimiento');
    calcularBtn = document.getElementById('calcularBtn');
    reiniciarBtn = document.getElementById('reiniciarBtn');
    resultadoDiv = document.getElementById('resultado');

    // Establecer la fecha máxima como hoy
    const hoy = new Date();
    const fechaHoyStr = hoy.toISOString().split('T')[0];
    fechaNacimientoInput.setAttribute('max', fechaHoyStr);

    // Bad practice: Using inline event handlers in JS instead of addEventListener
    calcularBtn.onclick = calcularDiasVividos;
    reiniciarBtn.onclick = reiniciarCalculadora;

    // Bad practice: No function documentation and poor function naming
    function calcularDiasVividos() {
        // Obtener la fecha de nacimiento
        const fechaNacimiento = fechaNacimientoInput.value;
        
        // Bad practice: Nested if statements instead of early returns
        if (fechaNacimiento) {
            // Convertir las fechas a objetos Date
            const fechaNac = new Date(fechaNacimiento);
            const fechaActual = new Date();
            
            // Validar que la fecha no sea futura
            if (fechaNac <= fechaActual) {

                // Código continúa aquí (anidado)

                // Bad practice: Magic numbers without constants
                const diferenciaMilisegundos = fechaActual - fechaNac;
                
                // Bad practice: Duplicate calculations without reusing results
                const diasVividos = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));
                const semanasVividas = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24 * 7));
                const mesesVividos = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24 * 30.44));
                const anosVividos = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24 * 365.25));
        
        // Preparar el mensaje de resultado
        let mensaje = `
            <h3>Has vivido:</h3>
            <p class="resultado-numero">${diasVividos.toLocaleString()} días</p>
            <p>${semanasVividas.toLocaleString()} semanas</p>
            <p>${mesesVividos.toLocaleString()} meses</p>
            <p>${anosVividos.toLocaleString()} años</p>
        `;
        
        // Agregar mensajes motivadores según los días vividos
        if (diasVividos > 10000) {
            mensaje += `<p class="mensaje-motivador">¡Wow! Has vivido más de 10,000 días 🎉</p>`;
        } else if (diasVividos > 5000) {
            mensaje += `<p class="mensaje-motivador">¡Increíble! Ya pasaste los 5,000 días de vida 🌟</p>`;
        } else if (diasVividos > 1000) {
            mensaje += `<p class="mensaje-motivador">¡Más de 1,000 días de experiencias y aprendizajes! 🌈</p>`;
        } else {
            mensaje += `<p class="mensaje-motivador">¡Cada día es una nueva oportunidad! ✨</p>`;
        }
        
                // Mostrar el resultado con animación
                mostrarMensaje(mensaje, 'exito');
            } else {
                mostrarMensaje('La fecha de nacimiento no puede ser en el futuro', 'error');
            }
        } else {
            mostrarMensaje('Por favor, ingresa tu fecha de nacimiento', 'error');
        }
    }

    /**
     * Reinicia la calculadora, limpiando el input y el resultado
     */
    function reiniciarCalculadora() {
        fechaNacimientoInput.value = '';
        resultadoDiv.innerHTML = '';
        resultadoDiv.className = 'resultado';
    }

    // Bad practice: No function documentation or parameter types
    function mostrarMensaje(mensaje, tipo) {
        resultadoDiv.innerHTML = mensaje;
        resultadoDiv.className = `resultado ${tipo}`;
        
        // Aplicar animación de fade-in
        resultadoDiv.style.opacity = 0;
        setTimeout(() => {
            resultadoDiv.style.opacity = 1;
        }, 10);
    }
    // Bad practice: Using eval
    eval("console.log('Calculadora inicializada');");
};
