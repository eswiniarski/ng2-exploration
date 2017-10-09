export class Recipe {
    id: number;
    title: string;
    content: string;
    type: string; //private / public

    constructor(title: string, content: string, type: string) {
        this.title = title;
        this.content = content;
        this.type = type;
    }
}
