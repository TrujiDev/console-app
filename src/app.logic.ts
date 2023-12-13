import fs from 'fs';
import { yarg } from './config/plugins/yargs.plugin';

const { b: base, l: limit, s: show } = yarg;

let outputMsg: string = '';

const headerMsg: string = `
=========================
        Tabla del ${base}
=========================\n
`;

for (let i = 1; i <= limit; i++) {
	outputMsg += `${base} x ${i} = ${base * i}\n`;
}

outputMsg = headerMsg + outputMsg;

if (show) console.log(outputMsg);

const outputPath: string = `outputs`;

fs.mkdir(outputPath, { recursive: true }, err => {
	if (err) throw err;
});

fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMsg);

console.log('File created!');
