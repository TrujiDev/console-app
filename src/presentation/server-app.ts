import { CreateTable } from '../domain/use-cases/createTable';
import { SaveFile } from '../domain/use-cases/saveFile.use-case';

interface RunOptions {
	base: number;
	limit: number;
	showTable: boolean;
	fileName: string;
	destinationPath: string;
}

export class ServerApp {
	static run({ base, limit, showTable, fileName, destinationPath }: RunOptions): void {
		console.log('Running server app...');
		const table = new CreateTable().execute({ base, limit });
		const wasCreated = new SaveFile().execute({
			fileContent: table,
			destinationPath,
			fileName,
		});
		if (showTable) console.log(table);
		wasCreated
			? console.log('File created successfully')
			: console.log('File could not be created');
	}
}
