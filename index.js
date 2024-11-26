import express from 'express';
import morgan from 'morgan';

const app = express();

// middleware
app.use(morgan('dev'));

// create a get API
app.get('/', (req, res) => {
    res.send("I am home page");
});

app.get('/login', (req, res) => {
    res.send("This is a login page");
});

app.get('/register', (req, res) => {
    res.send("This is a register page");
});

const port = 3000; 
// server running
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
