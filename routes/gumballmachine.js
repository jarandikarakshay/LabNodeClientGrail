var restClient = require('node-rest-client').Client;

var client = new restClient();
var host = "http://ajgumballmachinerest.cfapps.io/";
// GET GumballMachine

exports.getGumballMachine = function(req, res) {

	client.get(host +"/gumball",
			function(data, resp) {

				console.log("====="+data);

				res.render("gumballMachine", data);
			});

}

// POST for insertQuarter

exports.insertQuarter = function(req, res) {
	var args = {
		data : req.body,
		parameters:req.body,
		headers:{"Content-Type": "application/json"},
	};

	client.put(host +"/gumball", args,
			function(data, response) {
				res.send(data);
				
			});
}

// PUT for turnCrank
exports.turnCrank = function(req, res) {
	var args = {
			data : req.body,
			parameters:req.body,
			headers:{"Content-Type": "application/json"},
		};
	client.post(host +"/gumball", args,
			function(data, response) {
				//var value = JSON.parse(data);
				res.send(data);
			});
}