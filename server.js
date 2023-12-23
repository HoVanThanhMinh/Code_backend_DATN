const cors = require('cors');
const express = require('express')
const app = express()
const port = 3001

/*
Cấu hình CORS policy
 */
app.use(cors(
    {
        origin: [
            "http://localhost:3000",
            "http://127.0.0.1:3000",
            "http://192.168.2.97:3000",
            "http://192.168.2.101:3000",
        ],
        // origin: '*',
        credentials: true,
        exposedHeaders: ["set-cookie"]
    }
));

/*
Cấu hình body parser
*/
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*
Các routers 
*/
require('./app/routers/history.router')(app);
require('./app/routers/fingerprint_manager.router')(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})