<script setup lang="ts">
import { ref, onMounted } from 'vue';
import CommonButton from '@/components/Common/CommonButton/CommonButton.vue';
import CommonTaskCard from '@/components/Common/CommonTaskCard/CommonTaskCard.vue';
import { Task } from '@/models/Task';
import { getTask, deleteTaskById } from '@/api/taskApi';
import TaskModel from '@/components/Modals/TaskModel/TaskModel.vue';
import NavBar from '@/components/Common/NavBar/NavBar.vue';
import { useTaskStore } from '@/store/task.store';





const showModal = ref<boolean>(false);
const modalMode = ref<'Add' | 'Edit'>('Add');
const tasks = ref<Task[]>([]);
const selectedTask = ref<Task>();
const { setTasksAction } = useTaskStore()


onMounted(() => {
    fetchTasks();
});



const fetchTasks = () => {
    getTask((response) => {
        if (response && response?.status === 200) {
            tasks.value = response?.data?.data;
            setTasksAction.value(response?.data?.data)

        } else {
            console.error("Failed to fetch tasks:", response);
        }
    });
};


const editTask = (task: Task) => {
    selectedTask.value = task;
    showModal.value = true;
    modalMode.value = 'Edit';

};

const deleteTask = (task: Task) => {
    deleteTaskById(task.id, (response) => {
        if (response && response?.status === 200) {
            fetchTasks();
        }
    });
};

const openAddModal = () => {
    modalMode.value = 'Add';
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
    fetchTasks();
};
</script>

<template>
    <div class="container m-10">
        <div class="sticky">
            <NavBar />
        </div>
        <div class="flex justify-end mb-4 mt-9">
            <CommonButton :loading="false" button-text="Add Task" :onClick="openAddModal" />
        </div>

        <div class="flex flex-row flex-wrap gap-6">
            <CommonTaskCard v-for="task in tasks" :key="task.id" :task="task" @edit="editTask" @delete="deleteTask" />
        </div>

        <p v-if="tasks.length == 0" class="text-center"> No tasks available</p>

        <TaskModel :mode="modalMode" :show="showModal" :onClickClose="closeModal" :task="selectedTask" />
    </div>
</template>

<style scoped></style>
