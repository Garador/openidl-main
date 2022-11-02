const { ConfigurationManager } = require("./configuration.js");
const { DBHelper } = require("./db.js");

async function runThisExample(){
    const dbHelper = new DBHelper({credentials: ConfigurationManager.mySQLDBCredentials});
    const result = await dbHelper.runQuery(`
        SELECT datname FROM pg_database;
        SELECT table_schema,table_name
        FROM information_schema.tables
        ORDER BY table_schema,table_name;
    `)
    return result;
}


runThisExample()
.then((data_example)=>{
    console.log({data_example});
})
.catch((runThisExample_err)=>{
    console.log({
        runThisExample_err
    });
})