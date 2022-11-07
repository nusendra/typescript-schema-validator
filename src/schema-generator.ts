import path from "path";
import * as tjs from "typescript-json-schema";
import fs from "fs";

const run = () => {
	const sourceTsSchema = process.argv[2];
	const generatedFileName = process.argv[3];

	const program = tjs.getProgramFromFiles(
		[path.resolve(sourceTsSchema)],
		{
			strictNullChecks: true,
		},
		"./"
	);

	const schema = tjs.generateSchema(program, "*", {
		required: true,
		ref: false,
	});

	fs.writeFileSync(
		`${generatedFileName}.ts`,
		`const schema = ` +
			JSON.stringify(schema) +
			` as const;\n\nexport default schema.definitions;`
	);
};

export default run;
