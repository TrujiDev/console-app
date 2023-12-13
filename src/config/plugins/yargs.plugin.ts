import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
	.option('b', {
		alias: 'base',
		type: 'number',
		demandOption: true,
		describe: 'Base of multiplication table',
	})
	.option('l', {
		alias: 'limit',
		type: 'number',
		default: 10,
		describe: 'Multiplication table limit',
	})
	.option('s', {
		alias: 'show',
		type: 'boolean',
		default: false,
		describe: 'Show multiplication table',
	})
	.option('n', {
		alias: 'name',
		type: 'string',
		default: 'multiplication-table',
		describe: 'Name of the file',
	})
	.option('d', {
		alias: 'destination',
		type: 'string',
		default: 'outputs',
		describe: 'Output directory',
	})
	.check(argv => {
		if (argv.b < 1) throw 'Error: Base must be greater than 0';

		return true;
	})
	.parseSync();