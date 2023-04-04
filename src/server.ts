import express from 'express';
import { categoriesRouters } from './routes/categories.routes';

const app = express();
app.use(express.json());

//AQui vou colocar o /categories pois assim evito de colocar esse nome em todos os Posts/ Gets/ Patch / Delete que for criar lá no arquivo categories.routes.ts
app.use("/categories", categoriesRouters);


app.listen(3333, () => console.log("server is running! (Beleza) "));