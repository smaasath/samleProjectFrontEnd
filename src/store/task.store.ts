import { Task } from "@/models/Task";
import { create } from "zustand";

type State = {
    tasks: Array<Task>;
    selectedTask: Task | null;
};

type Action = {
    setTasksAction: (tasks: Array<Task>) => void;
    setSelectedTaskAction: (selectedTask: Task) => void;
};


const initialState: State = {
    tasks: [],
    selectedTask: null,
};


export const useTaskStore = create<State & Action>((set) => ({
    ...initialState,
    setTasksAction: (newTasks: Array<Task>) =>
        set((state) => ({
            tasks: [...state.tasks, ...newTasks],
        })),

    setSelectedTaskAction: (selectedTask: Task) =>
        set(() => ({
            selectedTask, 
        })),
}));
