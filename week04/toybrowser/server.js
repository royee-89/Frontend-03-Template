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
    display: flex;
    width: 100px;
    height: 300px;
    background-color: #ff5000;
}
.header .nav {
  width: 200px;
  height: 100px;
  background-color: rgb(255, 0, 0)
}
#content{
    width: 30px;
}
</style>
</head>
  <body>
    <div class="header">
      <div class="nav" />
      <div id="content" />
    </div>
  </body>
</html>
`
);

    })
}).listen(8080);

console.log("server started");