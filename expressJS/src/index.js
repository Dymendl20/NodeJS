// To start => nohup npm start &
// To stop => ps aux | grep node
// To stop => kill -9 PID
// html2jade template/jumbotron-narrow.html --noemptypipe
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const title = "Bidy";

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/../views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => res.render('jumbotron-narrow', {
    title: `${title} : Nous sommes sur la home page`
}));

app.post('/', (req, res) => {
    res.render('index', {
        title: `${title} : Nous sommes sur la home page`,
        name: req.body.name
    });
});

app.listen(3000, () => console.log("Connected on: 3000"));









