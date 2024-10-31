<script setup lang="ts">
import CommonInput from '@/components/Common/CommonInput/CommonInput.vue';
import ModalLayout from '@/components/layouts/ModalLayout/ModalLayout.vue';
import { Task } from '@/models/Task';
import { defineProps, ref, watch } from 'vue';


const props = defineProps<{
    mode: 'Add' | 'Edit';
    task?: Task;
    show: boolean;
    onClickClose?: () => void;
}>();

const localTask = props.task ?? new Task();
const priority = [
    { label: 'Low', value: 'LOW' },
    { label: 'Medium', value: 'MEDIUM' },
    { label: 'High', value: 'HIGH' }
];

const status = [
    { label: 'Todo', value: 'TODO' },
    { label: 'Progress', value: 'PROGRESS' },
    { label: 'Complete', value: 'COMPLETE' }
];

const errors = ref<{ [key: string]: boolean }>({
    task_title: false,
    description: false,
    priority: false,
    status: false
});

watch(() => props.show, (newVal) => {
    if (newVal) {
        resetErrors();
    }
});


const resetErrors = () => {
    Object.keys(errors.value).forEach(key => {
        errors.value[key] = false;
    });
};

const validate = () => {
    Object.keys(errors.value).forEach(key => {
        errors.value[key] = false;
    });

    if (!localTask.task_title) {
        errors.value.task_title = true;
    }
    if (!localTask.description) {
        errors.value.description = true;
    }
    if (!localTask.priority) {
        errors.value.priority = true;
    }
    if (!localTask.status) {
        errors.value.status = true;
    }

    return !Object.values(errors.value).includes(true);
};


const handleSubmit = () => {
    if (validate()) {
        console.warn(localTask);
    } else {
        console.warn('Validation failed:', errors.value);
    }
};

</script>

<template>

    <ModalLayout :model-show="show" :loading="false" :onClick="handleSubmit"
        :onClickClose="onClickClose" :button-text="mode + 'Task'">
        <div class="flex flex-col gap-4">
            <div class="flex flex-row">
                <h3 class="text-xl font-bold">{{ mode }} Task</h3>
            </div>

            <CommonInput  type="text"  :error="errors.task_title" label="Task title" placeholder="enter the task title" name="title"
                v-model="localTask.task_title" />

            <CommonInput type="text" variant="textarea" :error="errors.description" label="Task description"
                placeholder="enter the task description" name="description" v-model="localTask.description" />

            <CommonInput type="text" variant="select" :options="priority" :error="errors.priority" label="Priority"
                placeholder="select the priority" name="priority" v-model="localTask.priority" />


            <CommonInput type="text" variant="select" :options="status" :error="errors.status" label="Status"
                placeholder="select the status" name="status" v-model="localTask.status" />


        </div>
    </ModalLayout>

</template>

<style scoped></style>