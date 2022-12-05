const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    
}

const campos = {
    fname: false,
    lname: false,
    email: false,
    password: false
}

const validarFormulario = (e) => { //para poder validar todo el formulario
   switch (e.target.name) {
    case "fname":
    validarCampo(expresiones.nombre, e.target, 'fname');
    break;
    
    case "lname":
        validarCampo(expresiones.nombre, e.target, 'lname');
    break;
    
    case "email":
        validarCampo(expresiones.correo, e.target, 'email');
    break;

    case "password":
        validarCampo(expresiones.password, e.target, 'password');
         break;
 
    }
}
 const validarCampo = (expresiones, input, campo) => {
   if(expresiones.test(input.value)){
        document.getElementById(`group__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`group__${campo}`).classList.remove('error');
        document.getElementById(`group__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#group__error__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    }
     else {
        document.getElementById(`group__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`group__${campo}`).classList.add('error');
        document.getElementById(`group__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#group__error__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
  }


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario); //keyup dice si precionas una tecla
    input.addEventListener('blur', validarFormulario); //blur dice si haces un click fuera
});
	


formulario.addEventListener('submit', (e) => {
	e.preventDefault();
    
    if(campos.fname && campos.lname && campos.email && campos.password){
        formulario.reset();
   
        document.getElementById('mensaje-enviado').classList.add('mensaje-enviado-activo')
    setTimeout(() => {
        document.getElementById('mensaje-enviado').classList.remove('mensaje-enviado-activo')
    },5000);

    document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
        icono.classList.remove('formulario__grupo-correcto');
    });
    campos.fname = false; campos.lname =false ; campos.email = false; campos.password = false;
}
    
});
   