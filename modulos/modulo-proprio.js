var modulo = function(valor) {
    var contador = valor;

    return {
        contar: function() {
            contador++;
        },
        escrever: function() {
            console.log(contador); 
        }
    }
}

module.exports = modulo;