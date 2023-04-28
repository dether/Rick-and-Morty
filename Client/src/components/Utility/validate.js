const validate = (userData) => {
    const formatEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
    const errors = {};
    if (!formatEmail.test(userData.email)) {
        errors.email ="El nombre de usuario debe ser un email"
    }
    if(!userData.email){
        errors.email = "El email no puede estar vacio"
    } 
    if(userData.email.length > 35){
        errors.email = "El email no puede tener más de 35 caracteres"
    }
    if(!/.\d+.*/.test(userData.password)){
        errors.password="La contraseña debe contener al menos un número"
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = "La contraseña debe tener un tamaño entre 6 y 10 caracteres"
    }
    return errors;
}
export default validate;