var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config={
    user:'ilakkiyameenu1997',
    database:'ilakkiyameenu1997',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));
var articles=
{
   'article-one' :{
    title:'article one|ilakkiya meenu',
    heading:'article one!!!',
    date:' aug 18,2017',
    content:  `  <p>
                    this is the content for article one .this is the content for article one 
                    .this is the content for article one .
                </p>
                <p>
                    this is the content for article one .this is the content for article one 
                    .this is the content for article one .
                </p>
                <p>
                    this is the content for article one .this is the content for article one 
                    .this is the content for article one .
                </p>`
    },
    'article-two':{
    title:'article two|ilakkiya meenu',
    heading:'article two!!!',
    date:' aug 15,2017',
    content:  `  <p>
                    this is the content for article two.this is the content for article one 
                    .this is the content for article two .
                </p>`
    },
    'article-three':{
    title:'article three|ilakkiya meenu',
    heading:'article three!!!',
    date:' aug 1,2017',
    content:  `  <p>
                    this is the content for article three.this is the content for article three 
                    .this is the content for article three .
                </p>`
    }
};
function createTemplate(data)
{
var title=data.title;
var date=data.date;
var content=data.content;
var template=`<html>
    <head>
        <title>
        ${title}
        </title>
        <link href="ui/style.css" rel="stylesheet"/>
    </head>
    
    <body>
        <div class="container">
            <div>
                <a href="/">home page</a>
            </div>
            <hr/>
            <div>
                ${date}
            </div>
            <h1>article one!!!</h1>
            <div>
            ${content}
            </div>
        </div>
    </body>
</html>`;
return template;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
var pool=new Pool(config);
app.get('/test-db',function(req,res){
   //make a select request
   pool.query('SELECT * FROM test',function(err,result){
       if(err){
           res.status(500).send(err.toString());
       }else
       {
           res.send(JSON.stringify(result.rows));
       }
   });
   //return the response
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/favicon.ico', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'favico.ico'));
});
var names=[];
app.get('/submit-name',function(req,res){//query parameter urlpattern=/submitname?name=ilakkiya
//extract name from the request
var name=req.query.name;
names.push(name);
//JSON javascript object notation
res.send(JSON.stringify(names));

});
var counter =0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});


app.get('/articles/:articlename',function(req,res){
pool.query("SELECT * FROM articles WHERE title= '"+req.params.articlename+"'",function(err,result){
    if(err){
        res.status(500).send(err.toString());
    }
    else 
    if(result.rows.length===0)
    {
        res.status(404).send('row not found');
    }
    else{
        var articledata=result.rows[0];
        res.send(createTemplate(articledata));
    }
    
});

});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
