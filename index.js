/**
 * 1. Leche --> no se solicita la edad y se responde con la frase "aquí tiene su bebida"
 * 2. Coca-cola --> se solicita la edad. Sí es mayor de 14 se responde con la frase "aquí tiene su bebida. Si es menor de 14 se responde con la frase: "lo siento, solo puedo servirle leche".
 * 3. Cerveza --> se solicita la edad. Si es mayor o igual a 18 se responde con la frase "aquí tiene su bebida". Si no lo es, se responde con la frase: "lo siento, solo puedo servirle leche o cocacola".
 *   */
const bebidas = ['leche','coca-cola','cerveza'];
//funcion que devuelve cadena en minúsculas y sin espacios
const  sanitizeString = (cadena)=>{
    return cadena.trim().toLowerCase();
}

// funcion recursiva que se llama a si misma hasta que se selecciona una bebida válida o se cancela el prompt
const preguntaPorBebida = (message = 'que quieres beber?') => {
    const bebida = prompt(message);
    const edad = prompt('que edad tienes');
    const bebidaSanitize = sanitizeString(bebida)
    if (bebidaSanitize === 'leche') {
        alert('aqui tiene su bebida')
        
    } else if (bebidaSanitize === 'coca-cola'){
        if (edad >= 14){
            alert ('aqui tiene su bebida')
        } else if (edad <= 13) {
            alert ('solo puedes beber leche')
        }

    } else if (bebidaSanitize === 'cerveza') {
        if (edad >= 18) {
            alert ('aqui tiene su bebida')
        } else if (edad < 18 && edad >=14) {
            alert (' no puedes beber cerveza solo coca-cola o leche')
        } else {
            alert ('solo puedes beber leche')
        }
            
    } else {
        alert ('Solo servimos '+ bebidas);
        prompt(message);
    }
        
} 
preguntaPorBebida()