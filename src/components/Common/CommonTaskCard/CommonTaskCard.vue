<script setup lang="ts">
import type { Task } from '@/models/Task';
import CommonStatusContainer from '../CommonStatusContainer/CommonStatusContainer.vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
    task: Task;
    onEdit: (task: Task) => void;
    onDelete: (task: Task) => void;
}>();

// Emit events for edit and delete actions
const emit = defineEmits(['edit', 'delete']);

const handleEdit = () => {
    emit('edit', props.task);
};

const handleDelete = () => {
    emit('delete', props.task);
};
</script>

<template>
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 widht">
        <div class="flex justify-between items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="-2 -2 24 24">
                <path fill="currentColor"
                    d="M6 0h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6m0 2a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4zm6 7h3a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2m-2 4h5a1 1 0 0 1 0 2h-5a1 1 0 0 1 0-2m0-8h5a1 1 0 0 1 0 2h-5a1 1 0 1 1 0-2m-4.172 5.243L7.95 8.12a1 1 0 1 1 1.414 1.415l-2.828 2.828a1 1 0 0 1-1.415 0L3.707 10.95a1 1 0 0 1 1.414-1.414z" />
            </svg>
            <!-- Edit and Delete Icons -->
            <div class="flex gap-2">
                <button @click="handleEdit">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500 hover:text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232a2.828 2.828 0 114 4L7.5 20.5l-4 1 1-4L15.232 5.232z" />
                    </svg>
                </button>
                <button @click="handleDelete">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-500 hover:text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>

        <a href="#">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ task.task_title }}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">{{ task.description }}</p>

        <div class="flex flex-row gap-2 w-96">
            <CommonStatusContainer :priority="task.priority" />
            <CommonStatusContainer :status="task.status" />
        </div>
    </div>
</template>

<style scoped>
.widht {
    min-width: 300px;
}
</style>
