const 	express  = require('express'),
		mongoose = require('mongoose'),
		app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/to-do',(err)=>{
	err && console.error(err);
});

app.set('view engine', 'ejs');

app.use(express.static('deploy'));

app.get("/", (req,res)=>{
	//res.send("Hello world 2.0!");
	res.render('blank',{
		title:"Mastering Flux",
		body: "<div id='root'></div>"
	});
});

app.listen(3000, ()=>{
	console.log("We are running a server on port 3000");
});