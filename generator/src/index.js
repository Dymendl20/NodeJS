import fs from 'fs';
import path from 'path';
import ArgParseObj from 'argparse';

const ArgParse = ArgParseObj.ArgumentParser;

const parser = new ArgParse({
    version: '0.0.1',
    addHelp:true,
    description: 'Argparse example'
});

parser.addArgument(
    [ '-f', '--firstname' ],
    {
        help: 'Environnement du programme'
    }
);

parser.addArgument(
    [ '-l', '--lastname' ],
    {
        help: 'Port de la base de données'
    }
);

parser.addArgument(
    [ '-d', '--domain' ],
    {
        help: 'IP de la base de données'
    }
);

const pathMail = path.join(__dirname, 'email.csv');

if(fs.existsSync(pathMail)) {
    fs.unlinkSync(pathMail);
}

const args = parser.parseArgs();

const patterns = [
    `${args.firstname}.${args.lastname}`,
    `${args.firstname.substring(0, 1)}.${args.lastname}`,
    `${args.firstname}.${args.lastname.substring(0, 1)}`,
    `${args.firstname.substring(0, 1)}.${args.lastname.substring(0, 1)}`,
    `${args.lastname}.${args.firstname}`,
    `${args.lastname.substring(0, 1)}.${args.firstname}`,
    `${args.lastname}.${args.firstname.substring(0, 1)}`,
    `${args.lastname.substring(0, 1)}.${args.firstname.substring(0, 1)}`,
    `${args.firstname}-${args.lastname}`,
    `${args.firstname.substring(0, 1)}-${args.lastname}`,
    `${args.firstname}-${args.lastname.substring(0, 1)}`,
    `${args.firstname.substring(0, 1)}-${args.lastname.substring(0, 1)}`,
    `${args.lastname}-${args.firstname}`,
    `${args.lastname.substring(0, 1)}-${args.firstname}`,
    `${args.lastname}-${args.firstname.substring(0, 1)}`,
    `${args.lastname.substring(0, 1)}-${args.firstname.substring(0, 1)}`,
    `${args.firstname}_${args.lastname}`,
    `${args.firstname.substring(0, 1)}_${args.lastname}`,
    `${args.firstname}_${args.lastname.substring(0, 1)}`,
    `${args.firstname.substring(0, 1)}_${args.lastname.substring(0, 1)}`,
    `${args.lastname}_${args.firstname}`,
    `${args.lastname.substring(0, 1)}_${args.firstname}`,
    `${args.lastname}_${args.firstname.substring(0, 1)}`,
    `${args.lastname.substring(0, 1)}_${args.firstname.substring(0, 1)}`,
];

const mailList = patterns.map(pattern => `${pattern}@${args.domain}`);

mailList.forEach(mail => {
    fs.appendFileSync(pathMail, `${mail}\r\n`);
});