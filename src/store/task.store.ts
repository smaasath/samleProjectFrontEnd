import { Task } from "@/models/Task";
import { create } from "zustand";

type State = {
    tasks: Array<Task>;
};

type Action = {
    setTasksAction: (tasks: Array<Task>) => void;
};


const initialState: State = {
    tasks: [],
};


export const useTaskStore = create<State & Action>((set) => ({
    ...initialState,
    setTasksAction: (newTasks: Array<Task>) =>
        set((state) => ({
            tasks: [...state.tasks, ...newTasks],
        })),
}));
