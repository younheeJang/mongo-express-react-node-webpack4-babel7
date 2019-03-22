const express = require("express")
const path = require("path")
const PORT = 4000;
let app = express()
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

app.listen(PORT, () => console.log("Example app listening on port num " + `${PORT}`));

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => res.sendFile('index.html'));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));

mongoose.connect('mongodb://localhost:27017/test', (err, db) => {
    if (err) throw err;
    else { console.log(db.host + '/' + db.name + '/' + db.port) }
})