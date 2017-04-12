//let express=require('express')
//let app=express();
//app.get('/',function(req,res){
//	let {cb}=req.query;
//	let obj={"name":"123"};
//	res.send(`${cb}(${JSON.stringify(obj)})`)
//	//res.send('say({"name":"123"})')
//})
//app.listen(9090)
let express = require('express');
let app = express();
app.get('/',function(req,res){
	let {cb} = req.query;//fn_0
	let obj = {name:'zfpx'};
	res.send(`${cb}(${JSON.stringify(obj)})`);

})
app.listen(9090);
