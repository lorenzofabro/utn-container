let express = require('express');
let serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
let port = 3110;

app.listen(port, () => {
    console.log("Server running on port " + port);
});