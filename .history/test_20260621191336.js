import { PORT } from './config.js'
const express = require('express');
import 
const app = express();


app.get('/', (req, res) => {
    res.send('Hello world algo mas');
});

applisten(PORT, () => {
    console.log('Example app listeniong on PORT', {PORT})
})