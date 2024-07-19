# VitestDemo
Vitest is a test formwork based on vite. It’s easy to do the unit-test and automation test.

This is the document about vitest guide: https://cn.vitest.dev/guide/

# Set up

1. install node.js \ vite \ vitest

## Create a vite

1. open the path of the project and use the command to create

```sql
npm create vite .
```

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d474bd30-c71c-46bd-818b-d4d94b7a78e9/7239ef9f-9907-440e-8068-e108b706973e/Untitled.png)

# vitest

use command run server fristly

```sql
npm run dev
```

use the command

```sql
npm i --save-dev vitest
```

### edit the scripts about test

such as the file “sum.test.ts” in demo

add the chart to reporter ⇒ modify the value of “test” key to “vitest —coverage” in package.json

run the test by the following command

```sql
yarn run vitest --coverage
```

### add the vite.config.ts

edit as follows

```sql
import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        coverage: {
            reporter: ["text", "html"],
        },
    },
})
```

### run and get the report.html

run by “yarn run vitest —coverage”

and get the report under the folder coverage, named as “index.html”

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d474bd30-c71c-46bd-818b-d4d94b7a78e9/b3451015-46c9-438c-beac-408b6cd466cc/Untitled.png)

### others

if you want to use in-line test in the file, should import vitest.meta
