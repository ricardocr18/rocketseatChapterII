import { Router} from 'express';
import { CreateCategoryService } from '../services/CreateCategoryService';
import { CategoriesRepository } from '../repositories/CategoriesRepository';


const categoriesRouters = Router();
const categoriesRepository = new CategoriesRepository()

//Aqui começo a fazer a tabela Categoria que está no banco de dados no arquivo diagramaBancoDeDados.png
//Aqui era para o post ser desta forma -> post('/categories', (request, response) mas fiz isso foi feito no arquivo server.ts 
categoriesRouters.post('/', (request, response) =>{
    const { name, description } = request.body; 

    //Aqui está chamando o serviço
    const createCategoryService = new CreateCategoryService(categoriesRepository);
    createCategoryService.execute({name, description});
        
    //Aqui poderia colocar json({category}) no lugar do send, para ter retorno na resposta do POST
    return response.status(201).send();

})

//Pego no o categoriesRepository no arquivo CategoriesRepository.ts
categoriesRouters.get("/", (request, response) => {
    const all = categoriesRepository.List();

    return response.json(all);
})

export { categoriesRouters}