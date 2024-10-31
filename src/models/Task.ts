export class Task {
    id!: number;
    task_title: string = '';
    description: string = '';
    priority!: 'HIGH' | 'MEDIUM' | 'LOW';
    status!: 'TODO' | 'PROGRESS' | 'COMPLETE';
    constructor() { }
}
