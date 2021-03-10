import express from 'express';

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('Application working!');
});

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
