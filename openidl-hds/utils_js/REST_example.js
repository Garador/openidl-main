const {get} = require("axios");
const fs = require("fs");

const TMP_QUERY = `
    create table openidl_ep.tmp_connector as select * from openidl_base.au_premium limit 5;select coverage_category, coverage
    , auto_ep('2000-01-01'::DATE, '2002-01-01'::DATE,coverage_code) earned_premium
    , auto_cy('2000-01-01'::DATE, '2002-01-01'::DATE,coverage_code) car_years
    , auto_incurred_count('2000-01-01'::DATE, '2002-01-01'::DATE,coverage_code) incurred_count
    , auto_incurred_loss('2000-01-01'::DATE, '2002-01-01'::DATE,coverage_code) incurred_loss
    from openidl_base.au_coverage_vw
    order by coverage_category;drop table openidl_ep.tmp_connector;
`

const SELECT_QUERY = `
    SELECT datname FROM pg_database;
    SELECT table_schema,table_name
    FROM information_schema.tables
    ORDER BY table_schema,table_name;
`;

async function restExampleExecution(){
    try{
        let query = SELECT_QUERY;
        let customQueryParam = process.argv.find((element)=>{
            return element.startsWith("--query")
        });
        if(process.argv.indexOf("--select")){
            query = SELECT_QUERY;
        }else if(process.argv.indexOf("--temp-select")){
            query = TMP_QUERY;
        }
        
        if(customQueryParam){
            query = customQueryParam.split("=")[1];
        }
        const result = await get("http://localhost:3000/query/execute", {
            params: {
                auth_key: "y0dTTafTsmiB2gzjU2BVPOsJLrqZ#o@VjRQILI!Y16mzo3C9eL7hV&$#7fm@Vv4O874SOD%aM&34#XTofDKypRTWwX!",
                query
            }
        })
        const data = result.data;
        fs.writeFileSync("./example_data.json", JSON.stringify(data, null, 4));
        return data;
    }catch(restExampleExecution_e){
        console.log({restExampleExecution_e});
        return null;
    }
}

restExampleExecution()
.then((data)=>{
    console.log({data});
})
.catch((restExampleExecution_e_2)=>{
    console.log({restExampleExecution_e_2});
});