const http = require('http');

http.createServer((request, response) => {
    let body = [];
    request.on( 'error', err => {
        console.error(err);
    }).on('data', chunk => {
        body.push( chunk );
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        console.table(body);
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        response.end( 
`<html meta=a>
<head>
    <style>
.header{
    width: 100px;
    background-color: #ff5000;
}
#content{
    width: 30px;
}
div{
  width: 40px;
}
</style>
</head>
  <body>
    <div class="header">
      <dev class="nav">
      </dev>
    </div>
    <div class="main">
      <div id='content'>
      </div>
    </div>
  </body>
</html>
`
);

    })
}).listen(8080);

console.log("server started");