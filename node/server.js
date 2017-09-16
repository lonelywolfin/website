var expres=require('express');

var app=expres()

app.use('/',expres.static(__dirname+'/public'));
app.listen(8080);