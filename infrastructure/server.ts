import express from 'express';
import { UserRouter } from './routes/user';

const app = express();
const port = 3000;

app.use(express.json());

app.use("/users", UserRouter);

app.get('/', (req, res) => {
    res.send('Hola, mundo!');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
