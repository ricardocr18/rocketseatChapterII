import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

//Aqui foi criado para atender o name e o descrotion do comanado -> categoriesRepository.create({ name, description });
interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    constructor(private categoriesRepository: ICategoriesRepository){}

    execute({description, name}: IRequest): void {
        
        const categoryAlreadyExixts = this.categoriesRepository.findByName(name); //Aqui chamado a código para ver se a categoria existe

        //retorno uma resposta se a categoria já exixtir na criação
        if (categoryAlreadyExixts) {
            throw new Error("Category Already exists! (Categora já existe)")
            //A linha de cima substitui a linha de baixo
            //return response.status(400).json({ error: "Category Already exists! (Categora já existe)" });
        }

        this.categoriesRepository.create({ name, description });
    }
}


export { CreateCategoryService }