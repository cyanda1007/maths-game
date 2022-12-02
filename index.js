// const {sum, sub, mult, div} = require("./math")

// console.log(mult(10,5)

import express from 'express';
const app = express();
import exphbs from 'express-handlebars'
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// let one_count=1;
// let two_count=2;
// let oneElement=document.querySelector('.one_count');
// let twoElement=document.querySelector('.two_count');

// oneElement.innerText=one_count;
// twoElement.innerText=two_count;
// const operators=document.querySelector('.operators');



const PORT = process.env.PORT || 1967;

// app.get('/', (req, res) => res.send('Maths game!'));

// app.get('/', function (req, res) {
//     res.render('index')
//  })

app.listen(PORT, function () {
    console.log('App starting on port', PORT);
  });