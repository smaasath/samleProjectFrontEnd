<script setup lang="ts">
import { ref } from 'vue';
import CommonButton from '@/components/Common/CommonButton/CommonButton.vue';
import TaskModel from '@/components/Modals/TaskModel.vue/TaskModel.vue';


const showModal = ref(false);
const modalMode = ref<'Add' | 'Edit'>('Add');

const openAddModal = () => {
    showModal.value = true;
    modalMode.value = 'Add';
};

const closeModal = () => {
    showModal.value = false;
};
</script>

<template>
    <div class="">
        <CommonButton :loading="false" button-text="Add task" :onClick="openAddModal" />
        <TaskModel :mode="modalMode" :show="showModal" :onClickClose="closeModal" />
    </div>
</template>

<style scoped></style>
