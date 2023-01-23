(async () => {
    console.log("excel sheet")
    const xlsx = require("xlsx");
    // const db = require('./connect');
  
    const collectionSchema = require('./snykdb');
  
    const workbook = xlsx.readFile("synk_data.csv");
    
    const sheet = workbook.Sheets["Sheet1"];
    
    let data = xlsx.utils.sheet_to_json(sheet);
    console.log("data===>>>> ",data);
    // console.log(typeof data)
  
    data = data.map((i) => ({
        project_name: i.project_name,
        project_url: i.project_url,
        snyk_url: i.snky_url,
        project_test_frequency: i.project_test_frequency,
        project_total_dependency: i.project_total_dependency,
        project_last_tested: i.project_last_tested,
        project_issue_count: i.project_issue_count,
        project_monitored: i.project_monitored,
    }));
    // console.log(data.length);
    // console.log(data)
  
    data.map(async (i) => {
      const res = await collectionSchema.insertMany(data, i, {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      });
      console.log("inserted data");
    });  
  })();
  