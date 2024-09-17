
export interface Task {
    id: string;
    title: string;
    done: boolean;
    targetDate: Date;
}

export interface TaskContext {
    tasks: Task[];
    createTask: (task: Task) => void;
    updateTask: (task: Task) => void;
    deleteTask: (task: Task) => void;
    getTasksByFilter: (filter: TaskFilter) => Task[] | undefined;
}

export interface TaskFilter {
    isDone: boolean | null;
}