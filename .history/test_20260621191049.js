import express from 'express'
import { PORT } from './test'
const app = express();



app.get('/', (req, res) => {
    res.send('Hello world algo mas');
});

applisten(PORT, () => {
    console.log('Example app listeniong on PORT', {PORT})
})