import { v4 as uuidv4 } from 'uuid'

class Category {

    id?: string;
    name: string = '';
    description: string = '';
    created_at: Date = new Date()

    //Agora eu deixo nessas linhas a responsabilidade de criar o ID automático
    constructor() {
        if(!this.id) {
            this.id = uuidv4()
        }
    }
}

export { Category }