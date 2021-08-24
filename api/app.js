const express = require('express');
const app = express();
const mongoose = require('mongoose');

const SignUp = require('./routes/signup');
const Login = require('./routes/login');

const cors = require('cors');
app.use(express.json());
app.use(cors());

const url =
    'mongodb+srv://Ashmita:ashmita@1234@cluster0.ogl8o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(
    url,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,

        autoIndex: true, //make this also true
    },
    (err) => {
        if (err) {
            console.log('this is error', err.message);
        } else {
            console.log('DB connected');
        }
    }
);

app.use('/signup', SignUp);
app.use('/login', Login);

app.listen(3001, () => {
    console.log('Server started at 3001');
});
