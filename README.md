# typescript-schema-validator

A minimal interfaces / types schema generator for validation in runtime


### Installation

```
npm i typescript-schema-validator --save-dev
```
or
```
yarn add typescript-schema-validator -D
```

### Steps
1. Create a schema file in ts

```typescript
// schema.ts
export interface UserRequest {
  name: string;
  email: string;
}
```
3. Add a script (package.json) to generate your schema file
```json
"scripts": {
  "generate-schema": "node ./node_modules/typescript-schema-validator/lib/schema-generator.js"
}
```
4. Run the generator
```
yarn generate-schema <schema fille> <new generated file name>
```
example
```
yarn generate-schema schema.ts generated-schema
```
5. Use it in your express app to validate the incoming request
```typescript
// @ts-ignore
import tsv from "typescript-schema-validator";
import express, { Express, Request, Response } from "express";
import schema from "./generated-schema";

const app: Express = express();
const port: number = 3000;

app.get("/", (req: Request, res: Response) => {
  const validation = tsv(schema.UserRequest, { name: "Nusendra" });
  res.send(validation);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
```
