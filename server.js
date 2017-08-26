var express = require('express');
var morgan = require('morgan');
var path = require('path');

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
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/favicon.ico', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'favico.ico'));
});
var names=[];
app.get('/submit-name/:name',function(req,res){
//extract name from the request
var name=req.params.name;
names.push(name);
//JSON javascript object notation
res.send(JSON.stringify(names));

});
var counter =0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});


app.get('/:articlename',function(req,res){
var articlename=req.params.articlename;
 res.send(createTemplate(articles[articlename]));
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
