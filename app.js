(async () => {
  const axios = require("axios");
  const xlsx = require("xlsx");
  // const db = require('./connect');

  const collectionSchema = require("./connect");

  const workbook = xlsx.readFile("sonar_project.xlsx");
  const sheet = workbook.Sheets["Sheet1"];
  let data = xlsx.utils.sheet_to_json(sheet);

  console.log("data",data);
  // console.log(typeof data)

  data = data.map((i) => ({
    organization: i.organization,
    url: i["Web URL"],
    name: i.name,
    last_analysis_date: i.lastAnalysisDate,
    duplicate_lines: i.duplicated_lines_density,
    bugs: i.bugs,
    coverage: i.coverage,
    vulnerabilities: i.vulnerabilities,
    security_hotspots_reviewed: i.new_security_hotspots_reviewed,
    code_smell: i.code_smells,
    visibility: i.visibility,
    open_issues: i.open_issues,
    alert_status: i.alert_status,
  }));
  console.log(data.length);
//   const response = await Promise.all(
//     data.map((i) =>
//       collectionSchema.findOneAndUpdate({}, i, {
//         new: true,
//         upsert: true,
//         setDefaultsOnInsert: true,
//       })
//     )
//   );

  data.map(async (i) => {
    const res = await collectionSchema.findOneAndUpdate({url:i.url}, i, {
      new: true,
      upsert: true,
      setDefaultsOnInsert: true,
    });
    console.log("nfokwnfok", res);
  });

//   console.log(response);

  // console.log(data.slice(0,5))
})();
