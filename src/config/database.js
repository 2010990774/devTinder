const mongoose = require('mongoose');

const connectDB = async () => { 
    await mongoose.connect('mongodb+srv://varun0774be20_db_user:kFYhMrIsFTE8VsQ0@devtiner01.lk9ohpb.mongodb.net/devtinder');
}

module.exports = connectDB;