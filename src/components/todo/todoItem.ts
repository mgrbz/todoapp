
export class TodoItem {
    id: string;
    description: string;
    action: string;


    constructor( id: string, description: string, action: string ) {
        this.id = id
        this.description = description;
        this.action = action;
    }

}

