require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/static', express.static(path.join(__dirname, '../static')));

app.get('/', (req, res, next)=> { res.sendFile(path.join(__dirname, '../static/index.html'))});

app.use('/api/auth', require('./api/auth'));
app.use('/api', require('./api'));

app.use((err, req, res, next)=> {
    res.status(err.status || 500).send({ error: err.message });
});

module.exports = app;

// app.get('/api/content', async (req, res, next)=> {
//     try {
//         const response = await client.query('SELECT * from content');
//         res.send(response.rows);
//     } catch (ex) {
//         next(ex);
//     }
// });

//const port = process.env.PORT || 3000;

// app.listen(port, async ()=> {
//     try {
//         console.log(`listening on port ${port}`);
//         await client.connect();
//         let SQL = `
//             DROP TABLE IF EXISTS content;
//             CREATE TABLE content(
//                 id SERIAL PRIMARY KEY,
//                 title VARCHAR(255),
//                 description TEXT
//             );
//         `;
//         await client.query(SQL);
//          SQL = `
//                 INSERT INTO content(title, description) VALUES('content 1', 'desc 1');
//                 INSERT INTO content(title, description) VALUES('content 2', 'desc 2');
//                 INSERT INTO content(title, description) VALUES('content 3', 'desc 3');
//             `;
//         await client.query(SQL);
//         console.log('data is seeded');
//     } catch (ex) {
//         console.log(ex);
//     }
    
// });
