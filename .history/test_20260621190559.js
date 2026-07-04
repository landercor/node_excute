const express = requiere('express')
const app = express();

const PORT = process.env.PORT ?? 3002

app.get('/', (req, res) => {
    res.send('Hello world algo mas');
});

applisten(PORT, () => {
    console.log('Example app listeniong on PORT', {PORT})
})