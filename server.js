const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const root = __dirname;
let port = Number(process.env.PORT || 3000);
const maxPort = Math.min(port + 20, 65535);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  console.error('PORT deve ser um numero entre 1 e 65535.');
  process.exit(1);
}
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { Allow: 'GET, HEAD' });
    return res.end('Metodo nao permitido');
  }
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  } catch {
    res.writeHead(400);
    return res.end('Endereco invalido');
  }
  if (pathname === '/') pathname = '/index.html';
  const relative = pathname.slice(1);
  const file = path.resolve(root, relative);
  const allowed = /^(?:[^/\\]+\.html|css\/[^/\\]+\.css|js\/[^/\\]+\.js|assets\/.+)$/i.test(relative);
  if (!allowed || !file.startsWith(root + path.sep) || relative.split(/[\/\\]/).some(part => part.startsWith('.'))) {
    res.writeHead(404);
    return res.end('Arquivo nao encontrado');
  }
  fs.readFile(file, (error, data) => {
    if (error) {
      res.writeHead(error.code === 'ENOENT' || error.code === 'EISDIR' ? 404 : 500);
      return res.end('Nao foi possivel carregar o arquivo');
    }
    res.writeHead(200, { 'Content-Type': types[path.extname(file).toLowerCase()] || 'application/octet-stream' });
    res.end(req.method === 'HEAD' ? undefined : data);
  });
});

server.on('error', error => {
  if (error.code === 'EADDRINUSE' && port < maxPort) {
    console.log(`Porta ${port} ocupada; tentando ${port + 1}...`);
    port += 1;
    server.listen(port, '127.0.0.1');
    return;
  }
  console.error(error.code === 'EADDRINUSE'
    ? 'Nenhuma porta disponivel. Encerre os servidores anteriores com Ctrl+C e tente novamente.'
    : `Nao foi possivel iniciar o servidor: ${error.message}`);
  process.exitCode = 1;
});
server.on('listening', () => {
  console.log(`Querubina Conecta: http://localhost:${port}`);
  console.log('Para encerrar, pressione Ctrl+C.');
});
server.listen(port, '127.0.0.1');
