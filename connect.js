const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid")

const db = "mongodb+srv://amit:CPCdvVDmjnkgSA7F@cluster0.eu0wn.mongodb.net/sonar?retryWrites=true&w=majority"

mongoose.connect(db).then(()=> {
    console.log("connected with DB");
}).catch((e)=> {
    console.log("No connection: "+e);
});

const Schema = mongoose.Schema;


const collectionSchema = new Schema({
    organization: String,
    url: String,
    name: String,
    last_analysis_date: String,
    duplicate_lines: String,
    bugs: String,
    coverage: String,
    vulnerabilities: String,
    security_hotspots_reviewed: String,
    code_smell: String,
    visibility: String,
    open_issues: String,
    alert_status: String,
    entry_id:{
      type:"String",
      default: 'ENTRY-'+ uuidv4()
    }
});

module.exports = mongoose.model('sonar_datas', collectionSchema)

