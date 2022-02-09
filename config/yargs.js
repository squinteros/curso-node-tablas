const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Define el largo de la multiplicacion'
                })
                .check( (argv, options) => {
                    if( isNaN( argv.b, argv.h )){
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                })
                .argv;



module.exports = argv;