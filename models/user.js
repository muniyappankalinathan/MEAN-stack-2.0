const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const userSchema = new Schema({
email: { type: String, required: true, unique: true, lowercase: true },
email: { type: String, required: true, unique: true, lowercase: true },
email: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
