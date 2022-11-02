## Running this functionality

## 1. Set-up utils.js ###

- 1.1 Move to `utils_js`. This is a directory that contains most of the related functionality that ExpressJS exposes through its endpoint.
- 1.2 Install the missing npm modules (running `npm install`).

### 2. Set-up ExpressJS server. ###

- 2.1 Go to the directory `db_fetcher_server`.
- 2.2 Execute `npm install` to install missing modules.
- 2.3 Execute `npm run start` to start the Express server.

### 3. Run the example
- 3.1 Go to `utils_js`
- 3.2 Run `npm run rest-test`. This will run the REST-based example (a script that will hit the `http://localhost:3000/query/execute` endpoint using a select query for demostration purposes)
- 3.3 This will store the resulting endpoint data in `./openidl-hds/utils_js/example_data.json`.

## Sidenote
You can run the REST_example script using your custom SQL query by using the following format:

`node ./REST_example.js --query="SELECT * FROM somewhere_else;"`

Where the query parameter will be used for providing the custom query you want to see reflected.