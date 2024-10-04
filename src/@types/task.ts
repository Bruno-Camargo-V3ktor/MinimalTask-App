
export interface TaskProps {
    id: string;
    title: string;
    done: boolean;
    targetDate: Date;
    finishedDate: Date | null;
}


export interface TaskContext {
    tasks: TaskProps[];
    createTask: (task: TaskProps) => void;
    updateTask: (task: TaskProps) => void;
    deleteTask: (task: TaskProps) => void;
    getTasksByFilter: (filter: TaskFilter) => TaskProps[];
}

export interface TaskFilter {
    isDone: boolean | null;
}