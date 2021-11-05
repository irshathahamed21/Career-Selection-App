const mongoose = require('mongoose');
const appointmentSchema = new mongoose.Schema({
 user:{type: mongoose.Schema.Types.ObjectId, ref: 'user'},

  slots:[{type:mongoose.Schema.Types.ObjectId, ref: 'Slot'}],
  created_at: {type:Date,req:true},
});
module.exports = mongoose.model("Appointment", appointmentSchema); // appointment
