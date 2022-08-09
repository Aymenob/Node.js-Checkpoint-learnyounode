var fs=require("fs")

module.exports = function module(filepath,ext,callback){
    fs.readdir(filepath, (err, data)=> {
    if (err) { return callback(err) } 
    callback(null, data.filter(e=>e.includes(`.${ext}`))
        )}
           )}