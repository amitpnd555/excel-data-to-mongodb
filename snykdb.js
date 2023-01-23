const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid")

const db = "";

mongoose.connect(db).then(()=> {
    // console.log("connected with DB");
}).catch((e)=> {
    console.log("No connection: "+e);
});

const Schema = mongoose.Schema;



const collectionSchema = new Schema({
    project_name: String,
    project_url: String,
    snyk_url: String,
    project_test_frequency: String,
    project_total_dependency: String,
    project_last_tested: String,
    project_issue_count: String,
    project_monitored: String,
    entry_id:{
      type:"String",
      default: 'ENTRY-'+ uuidv4()
    }
});

module.exports = mongoose.model('snyk_datas', collectionSchema, 'snyk_datas')

