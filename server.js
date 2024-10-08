import express from 'express';

const PORT = process.env.PORT || 8080;
const app = express();

app.get('/', (req, res) => {
    res.json({ message: "app is running on docker container" });
});

app.listen(PORT, () => {
    console.log(`app running on ${PORT}`);
});
