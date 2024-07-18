
document.getElementById('coeficientesForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let a = document.getElementById('coeficienteA').value;
    let b = document.getElementById('coeficienteB').value;
    let c = document.getElementById('coeficienteC').value;

    // Validar entradas
    if (!/^-?\d+$/.test(a) || !/^-?\d+$/.test(b) || !/^-?\d+$/.test(c)) {
        alert('Por favor, ingrese solo números enteros.');
        return;
      }

    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);

    const discriminante = b * b - 4 * a * c;
    let x1, x2;

    if (discriminante > 0) {
        x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    } else if (discriminante === 0) {
        x1 = x2 = -b / (2 * a);
    } else {
        document.getElementById('mensaje').textContent = 'La ecuación no tiene solución porque la raiz es negativa.';
    }

    document.getElementById('resA').textContent = a;
    document.getElementById('resB').textContent = b;
    document.getElementById('resC').textContent = c;
    document.getElementById('resX1').textContent = x1 !== undefined ? x1 : '';
    document.getElementById('resX2').textContent = x2 !== undefined ? x2 : '';

    document.getElementById('formulario').classList.add('hidden');
    document.getElementById('resultado').classList.remove('hidden');
});

document.getElementById('regresarBtn').addEventListener('click', function () {
    document.getElementById('coeficientesForm').reset();
    document.getElementById('mensaje').textContent = '';
    document.getElementById('formulario').classList.remove('hidden');
    document.getElementById('resultado').classList.add('hidden');
});
