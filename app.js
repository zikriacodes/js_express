const express = require('express');
const res = require('express/lib/response');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

// GET Users as JSON Example
app.get('/users', (req, res) => res.send({
    users: {
        1: {
            username: "Zikria",
            userId: 1
        },
        2: {
            username: "John",
            userId: 2
        }
    }
}));

app.listen(port, () => console.log(`Express server running on port ${port}!`));