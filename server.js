import express from 'express';
import sum from './sum.js';
import { parse } from 'dotenv';

const app = express();
const PORT = process.env.PORT || 8000;

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/home', async (req, res) => {
    res.json({
        msg: 'i am root'
    });
});

app.get("/getSum/:a/:b", async(req, res) => {
    const {a, b} = req.params;

    res.json({
        ans: sum(parseInt(a), parseInt(b))
    });
})