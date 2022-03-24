import http  from 'http';

const server = http.createServer((req, res) => {
   if(req.method == 'GET' && req.url == '/'){
    console.log("page d'accueil");
    res.end('Hi hi h!');
   }
    process.kill(process.pid, 'SIGTERM');
  
  });



 server.listen(3000)

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})
