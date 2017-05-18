const ArgParse = require('argparse').ArgumentParser;

const parser = new ArgParse({
    version: '0.0.1',
    addHelp:true,
    description: 'Argparse example'
});

parser.addArgument(
    [ '-e', '--env' ],
    {
        help: 'Environnement du programme'
    }
);

parser.addArgument(
    [ '-p', '--port' ],
    {
        help: 'Port de la base de données'
    }
);

parser.addArgument(
    [ '-i', '--ip' ],
    {
        help: 'IP de la base de données'
    }
);

const args = parser.parseArgs();
console.log(args.env, args.port, args.ip);

// npm start => Hello world Prod
// npm run start:dev => Hello world Dev

// let name = process.argv[2];
//
// console.log(`Hello world ${name}`);