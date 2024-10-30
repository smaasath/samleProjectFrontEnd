export class Task {
    id!: number;
    task_title: string = '';
    description: string = '';
    priority: string = '';
    status: string = '';
    start_date!: Date;
    end_date!: Date;
    constructor() { }
}
