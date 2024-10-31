<template>
    <div class="flex items-center space-x-2">
        <div v-if="priority" :style="{ backgroundColor: priorityData.bgcolor, color: priorityData.color }"
            class="h-6 p-1 rounded text-center flex justify-center items-center">
            <p class="m-0">{{ priorityData.text }}</p>
        </div>
        <div v-if="status" :style="{ backgroundColor: statusData.bgcolor, color: statusData.color }"
            class="h-6 p-1 rounded text-center flex justify-center items-center">
            <p class="m-0">{{ statusData.text }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    priority?: 'HIGH' | 'MEDIUM' | 'LOW';
    status?: 'TODO' | 'PROGRESS' | 'COMPLETE';
}>();

const priorityData = computed(() => {
    switch (props.priority) {
        case 'HIGH':
            return { bgcolor: '#FDF2F2', color: '#EC5962', text: 'High' };
        case 'MEDIUM':
            return { bgcolor: '#e6f0f5', color: '#00629B', text: 'Medium' };
        case 'LOW':
            return { bgcolor: '#f0f8ef', color: '#60B158', text: 'Low' };
        default:
            return { bgcolor: '#FFFFFF', color: '#000000', text: 'Unknown' };
    }
});

const statusData = computed(() => {
    switch (props.status) {
        case 'TODO':
            return { bgcolor: '#E9ECEF', color: '#5F6A6A', text: 'To Do' };
        case 'PROGRESS':
            return { bgcolor: '#E3F2FD', color: '#1976D2', text: 'In Progress' };
        case 'COMPLETE':
            return { bgcolor: '#DFF0D8', color: '#3C763D', text: 'Complete' };
        default:
            return { bgcolor: '#FFFFFF', color: '#000000', text: 'Unknown' };
    }
});
</script>
