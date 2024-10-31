import { Task } from "@/models/Task";
import create from 'vue-zustand';

type State = {
    tasks: Task[];
};

type Action = {
    setTasksAction: (tasks: Task[]) => void;
};

const initialState: State = {
    tasks: [],
};


export const useTaskStore = create<State & Action>((set) => ({
    ...initialState,
    setTasksAction: (newTasks: Task[]) => set({ tasks: newTasks }), 
}));
