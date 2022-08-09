var fs=require("fs")
var path=require("path")
fs.readdir(process.argv[2],function (err,list) {
    err? console.log(err):
    list.filter(e=>e.includes(`.${process.argv[3]}`)? console.log(e):null)})




    /*soltuion2 : var fs=require("fs")
var path=require("path")
fs.readdir(process.argv[2],function (err,list) {
    err? console.log(err):
    list.forEach(e=>{if(path.extname(e)===`.${process.argv[3]}`) {console.log(e)}})})*/
