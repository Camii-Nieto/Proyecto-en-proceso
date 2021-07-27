const express= require('express');
const app= express();
const path= require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=> {
    res.render('index', {
        title: 'Bienvenidos a EDUTEC'
    })
});

app.get('/matriculado', (req, res)=> {
    res.render('pages/matriculado', {
        title: 'EDUTEC | Electricista matriculado'
    })
});

app.get('/materiales', (req, res)=> {
    res.render('pages/materiales', {
        title: 'EDUTEC | Materiales electricos'
    })
});

app.listen(3000,() => {
    console.log('Puerto 3000');
});