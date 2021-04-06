export class Tasks {
       id!: string;
       title!: string;
       type!: string;
       dueDate!: Date;
       description!: string;
       completed!:boolean;


       constructor(id: string, title: string, type: string, completed : boolean, dueDate: Date, description: string) {
           this.id = id;
           this.title = title;
           this.type = type;
           this.dueDate = dueDate;
           this.description = description;
           this.completed = completed
        }
}

interface TaskTypeOption {
    type: string;
}


export { TaskTypeOption };
