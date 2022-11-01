import Ajv from "ajv";

const ajv = new Ajv();

const schemaValidator = (schema: object, data: object) => {
	const validate = ajv.compile(schema);

	const valid = validate(data);

	if (!valid) return validate.errors;
	return valid;
};

export default schemaValidator;
