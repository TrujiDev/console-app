# Multiplication Table Generator

This Node.js console application written in TypeScript allows you to generate multiplication tables with customizable options. It utilizes the `yargs` library for command-line argument processing and offers the flexibility to save the generated tables to text files. The code is designed with modularity in mind, using classes and interfaces for clear functionality encapsulation.

## Features

- Generate multiplication tables with specified base and limit.
- Save the generated table to a text file.
- Customize the file name and destination folder for saved tables.

## Getting Started

1. **Installation:**
   ```bash
   npm install
   ```

2. **Usage:**
   ```bash
   npm run dev -- -b [base] -l [limit] -s [showTable] -n [fileName] -d [destinationPath]
   ```

   Example:
   ```bash
   npm run dev -- -b 5 -l 10 -s -n myTable -d outputs
   ```

3. **Options:**
   - `-b, --base`: Base of multiplication table (required).
   - `-l, --limit`: Multiplication table limit (default: 10).
   - `-s, --show`: Show multiplication table (boolean, default: false).
   - `-n, --name`: Name of the file (default: "multiplication-table").
   - `-d, --destination`: Output directory (default: "outputs").

## Examples

1. **Generate Table:**
   ```bash
   npm run dev -- -b 3
   ```

2. **Generate and Show Table:**
   ```bash
   npm run dev -- -b 7 -l 5 -s
   ```

3. **Generate and Save Table:**
   ```bash
   npm run dev -- -b 4 -l 8 -n customTable -d myOutputFolder
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
