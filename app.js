// memanggil local module function.js
const func = require('./function')

//memanggil module yargs
const yargs = require('yargs');

yargs.command({
    // membuat command show
    command: 'show',
    describe: 'show all contact',
    handler() {
        //memanggil function show
        func.show()
    }
})

yargs.command({
    // membuat perintah update
    command: 'update',
    describe: 'update contact file',
    builder: {
        // membuat argument
        name: {
            describe: 'contact Name',
            demandOption: false,
            type: 'string',
        },
        email: {
            describe: 'contact Email',
            demandOption: false,
            type: 'string',
        },
        mobile: {
            describe: 'contact mobile phone number',
            demandOption: false,
            type: 'string',
        },

        where:{
            describe: 'condition value',
            demandOption: true,
            type: 'string',
        }
    },
    //menangkap hasil dari argument
    handler(argv) {

        // memanggil funsi savedata
        func.update(argv.name, argv.email, argv.mobile, argv.where)
        // menampilkan tulisan ke terminal
        console.log("Thank you");
    },
})

yargs.parse()