var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));



var articles={ 
'article-one':{
    title: 'Article one | Riyaz Rahman',
    heading:'Article One',
    date:'Agust 17 2017',
    content:`<p>
            This is the content for my first Article. This is the content for my first Article. This is the content for my first Article. This is the content for my first Article.
        </p>
        <p>
             This is the content for my first Article. This is the content for my first Article. This is the content for my first Article.
        </p>
        <p>
             This is the content for my first Article. This is the content for my first Article. This is the content for my first Article.
        </p>`
    
},
'article-two' :{
      title: 'Article Two | Riyaz Rahman',
    heading:'Article Two',
    date:'Agust 17 2017',
    content:`<p>
            This is the content for my second Article.
            </p>`
  

},
'article-three' :{
      title: 'Article Three | Riyaz Rahman',
    heading:'Article Three',
    date:'Agust 17 2017',
    content:`<p>
            This is the content for my Third Article. 
            </p>`
  }

};

function createTemplate (data)
{
    var title = data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    
var htmlTemplate=`<html>
    <head>
        <title>
      ${title}
</title>
<meta name="viewport" content="width=device-width,initial-scale=1" />

 <link href="/ui/style.css" rel="stylesheet" />
 
</head>
    <body>
        <div class="container">
            
            
        <div>
            <a href="/">Home</a>
        </div>
        <hr>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
      ${content}
        </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;

}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
app.get('/counter',function (req,res){
   counter = counter+1;
   res.send(counter.toString());
    
});

app.get('/:articleName',function(req,res){
    var articleName = req.params.articleName;
res.send(createTemplate(articles[articleName]));
});
app.get('/article-two',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html')); 
});
app.get('/article-three',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html')); 
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names=[];
app.get('/submit-name/:name', function (req, res) {
    //Get the name from request object
    var name = req.params.name;
    
    names.push(name);
    //JSON: Javascript Object Notation
    
    res.send(JSON.stringfy(names));
    
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
