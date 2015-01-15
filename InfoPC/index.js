var express = require('express');
var os = require('os')
var sudo = require('sudo');
var spawn = require('child_process').spawn;
var diskspace = require('diskspace');
var app = express();
app.use(express.static(__dirname));

app.get('/', function(req, res) {
	var info;
	diskspace.check('C', function (err, total, free, status){
		info = {
			model: os.cpus()[0].model,
			speed: os.cpus()[0].speed,
			hostname: os.hostname(),
			operator: os.type(),
			totalmem: os.totalmem(),
			freemem: os.freemem(),
			total: total,
			free: free,
		};
		res.render('ejs/index.ejs', { info: info });
	});
});

app.get('/process', function(req, res) {
	cmdd = spawn('netstat',['-aon']);
	cmdd.stdout.on("data", function(data) {
		res.send(data);
	});
});

app.listen(3000)
console.log("runing...")