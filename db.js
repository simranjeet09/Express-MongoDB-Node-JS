const mongoose = require('mongoose');
const uri = "mongodb+srv://MONGO_USERNAME:MONGO_PASSWORD@cluster0.pj3xlhx.mongodb.net/COLLECTION_NAME_HERE?retryWrites=true&w=majority";
let db;
const DBPROMISE = new Promise(async (resolve, reject) => {
    try {
        db = await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        resolve(db)
    } catch (e) {
        reject(e)
    }
})
module.exports = DBPROMISE;