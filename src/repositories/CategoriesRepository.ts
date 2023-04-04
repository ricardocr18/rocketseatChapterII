import { Category } from "../model/Category";
import { ICategoriesRepository } from "./ICategoriesRepository";
import "reflect-metadata"



class CategoriesRepository implements ICategoriesRepository{

    private categories: Category[]

    //aqui é o array que crio quando faço o POST
    constructor() {
        this.categories = [];
    }

    create({ description, name }: ICreateCategoryDTO): void {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date()
        })

        this.categories.push(category);
    }

    //Aqui tem o retorno de toda a minha categoria para ser usada no GET
    List(): Category[] {
        return this.categories;
    }

    //Aqui estou verificando se tenho uma ID de Categoria já cadastrado no projeto quando fizer um POST
    findByName(name: string): Category | undefined{
        const category = this.categories.find((category) => category.name === name);
        return category
    }

}

export { CategoriesRepository }