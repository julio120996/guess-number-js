// === CALCULADORA DE DESCUENTOS ===

/* Si el total es mayor a 100 → aplicar 20% de descuento
Si el total está entre 50 y 100 (ambos incluidos) → aplicar 10% de descuento
Si el total es menor a 50 → sin descuento, el precio final es el mismo */

// Pedir el total de la compra
let total = prompt('Ingresa el total de tu compra:');
total = Number(total);

// Calcular el descuento
let descuento = 0;

if (total > 100) {
    descuento = 0.20;
} else if (total >= 50) {
    descuento = 0.10;
} else {
    descuento = 0;
}

// Calcular los importes
let montoDescuento = total * descuento;
let precioFinal = total - montoDescuento;

// Mostrar resultados
console.log('Total de la compra: S/', total);
console.log('Descuento aplicado: ', descuento * 100, '%');
console.log('Monto descontado: S/', montoDescuento);
console.log('Precio final: S/', precioFinal);

alert(
    'Total: S/ ' + total +
    '\nDescuento: ' + (descuento * 100) + '%' +
    '\nAhorro: S/ ' + montoDescuento +
    '\nPrecio final: S/ ' + precioFinal
);