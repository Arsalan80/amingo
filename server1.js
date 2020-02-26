const express = require('express');
const app = express();


app.get('/blog/:section/:date', (req, res) => {
    console.log(
        'this section is:', req.params.section
    );
    console.log(
        'this is the date:', req.params.date
    );
    res.send("<h1 style = 'color:blue'>Blog</h1>"); 
});
app.get('/home', (req, res) => {
    res.send("<h1 style = 'color:blue'>Home</h1>"); 
});
app.get('/about', (req, res) => {
    res.send("<h1 style = 'color:blue'>About</h1>"); 
});
app.get('/contact', (req, res) => {
    res.send("<h1 style = 'color:blue'>Contact</h1>"); 
});
app.get('/FAQ', (req, res) => {
    res.send("<h1 style = 'color:blue'>FAQ</h1>"); 
});
app.get('*', (req, res) => {
    res.send("<h1 style = 'color:blue'>404 Page not found</h1>"); 
});

app.listen(
    3010,
    () => {
        console.log('you are connected');
    }
)