alert('Continua para iniciar sesión');

const username = prompt('Ingresa tu nombre de usuario');
const password = prompt('Ingresa tu contraseña');

const usVld = username === 'admin';
const pwVld = Number(password) === 1234;

if (usVld && pwVld) {
    alert('Bienvenido!');
} else{
    alert('Usuario/contraseña incorrectos, ingrese nuevamente!');
}