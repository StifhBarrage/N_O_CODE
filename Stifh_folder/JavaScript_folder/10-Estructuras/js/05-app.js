// switch case

const metodoPago = 'efectivo';
switch (metodoPago) {
    case 'efectivo':
        console.log(`El usuario pago con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`El usuario pago con ${metodoPago}`);
        break;
    case 'tarjeta':
        console.log(`El usuario pago con ${metodoPago}`);
        break;
        
    default:
        console.log('Metodo de pago no soportado');
        break;
}