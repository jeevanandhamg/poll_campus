const mongoose = require("mongoose");

module.exports = async () => {
    const DB_URL = 'mongodb+srv://jeeva:sZvfAst5z3yvTHPI@pollcampus.upqxnk2.mongodb.net/';
  try {
    console.log("=========DB_URL============",DB_URL);
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   //   useCreateIndex: true,
    //   useFindAndModify: false
    });
    console.log("Db Connected");
  } catch (error) {
    console.log("Error ============");
    console.log(error);
  }
};