const express = require("express");
const app = express();

app.use('/employee',express.static('ui5app'));

app.listen(3000,() => console.log('Example app listening on port 3000!'));