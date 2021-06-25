var http = require("http");
var url = require("url");

function start(route) {
  function onRequest(req, res) {
    var pathname = url.parse(req.url).pathname;
    if (pathname !== "/favicon.ico") {
      let data = "";
      req.on("data", (chunk) => {
        // data.push(chunk);
        data += chunk;
      });
      req.on("end", () => {
        let result = route(pathname, req.method, data);
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");
        res.setHeader(
          "Access-Control-Allow-Methods",
          "PUT,POST,GET,DELETE,OPTIONS"
        );
        res.writeHead(200, { "Content-Type": result.dataType });
        res.end(result.data);
      });
    }
  }
  http.createServer(onRequest).listen(1337, "127.0.0.1");
}
exports.start = start;
