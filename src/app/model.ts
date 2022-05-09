import * as uuid from 'uuid';
import { TodoItem } from "src/components/todo/todoItem";
import { Todo } from "src/types/todo";


export class Model {
    name: string;
    items: Todo[];


    constructor() {
        this.name = 'MGrbZ';
        this.items = [
            { id: uuid.v4(), description: 'Kahvaltı', action: true },
            { id: uuid.v4(), description: 'Spor', action: true },
            { id: uuid.v4(), description: 'Launch', action: false },
            { id: uuid.v4(), description: 'Dinner', action: false },
        ]
    }

}


