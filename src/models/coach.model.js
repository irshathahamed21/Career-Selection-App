const mongoose = require('mongoose');
const coachSchema = new mongoose.Schema({
 user:{type: mongoose.Schema.Types.ObjectId, ref: 'user'},
 coach:{type: mongoose.Schema.Types.ObjectId, ref: 'coach'},
  slots:[{type:mongoose.Schema.Types.ObjectId, ref: 'Slot'}],
  created_at: {type:Date,req:true},
},{
  versionKey: false,
  timestamps: true
}
);
module.exports = mongoose.model("coach", coachSchema); // appointment
