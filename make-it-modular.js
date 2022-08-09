
var module=require("./mymodule")
var filepath=process.argv[2]
var ext=process.argv[3]
module(filepath,ext,(err,data)=>{
    err? console.log(err):
    data.map(e=>console.log(e))
})