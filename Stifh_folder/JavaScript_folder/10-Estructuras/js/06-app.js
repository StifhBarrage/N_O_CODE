const usuario = true;
const pudedePagar = true;
const esTarjeta = true;

if (usuario && pudedePagar) {
    console.log('si eres usuario')
    
} else if (!usuario) {
    console.log('no eres usuario')
    
} else if (!pudedePagar) {
    console.log('no puedes pagar')
    
}