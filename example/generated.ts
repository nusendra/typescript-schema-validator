const schema = {"$schema":"http://json-schema.org/draft-07/schema#","definitions":{"UserRequest":{"type":"object","properties":{"name":{"type":"string"}},"required":["name"]}}} as const;

export default schema.definitions;