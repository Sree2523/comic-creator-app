require('dotenv').config();
const express = require('express');
const app = express();
const port = 3001;

const imageGenerationRoute = require('./routes/imageGeneration');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/generate-image', imageGenerationRoute);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
