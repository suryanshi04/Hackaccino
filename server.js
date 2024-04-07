const express = require('express');
const app = express();
const port = 3002
; 
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Homeintro.html');
});


app.use(express.static(__dirname));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${3002}`);
});
