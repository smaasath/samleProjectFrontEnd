<script setup lang="ts">
import { useTaskStore } from '@/store/task.store';


const {tasks} = useTaskStore();


</script>
<template>
    <div class="flex flex-row justify-end shadow-sm">
        <div class="flex flex-col gap-1">
            <p class="text-lg font-medium">Task count : {{tasks.length}}</p>
        </div>
    </div>
</template>