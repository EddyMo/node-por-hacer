const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}
const argv = require('yargs')
    .command(
        'crear',
        'Crear un elemento por hacer', {
            descripcion
        })
    .command(
        'actualizar',
        'Imprime en consola la tabla de multiplicar', {
            descripcion,
            completado
        })
    .command(
        'borrar',
        'Borrar un elemento por hacer', {
            descripcion
        })
    .help()
    .argv;

module.exports = {
    argv
}