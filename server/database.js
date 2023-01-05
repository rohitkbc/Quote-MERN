var mongoose = require('mongoose');
var db = require('./db.config')

mongoose.connect(db, {
  useNewUrlParser: true,  
  useUnifiedTopology: true,  
})

var conn = mongoose.connection;

conn.on('connected', () => {
    console.log('database is connected successfully');
});

conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
})

conn.on('error', console.error.bind(console, 'connection error:'));

module.exports = conn;