const express = require('express');
const { exec } = require('child_process');
const cors = require('cors');
const app = express();
const { spawn } = require('child_process');
const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req,res)=>{
    res.send("Hello");
})

app.post('/run-meow', (req, res) => {
    // const text1 = req.body.faddress;
    // const text2 = req.body.ftoaddress;
    console.log("Data received.");
    console.log(req.body);

    const meowProcess = spawn('node', ['meow.js', req.body[0], req.body[1], req.body[2], req.body[3], req.body[4]]);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
