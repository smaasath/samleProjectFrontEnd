<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps<{
    buttonText: {
        type: String,
        required: true
    },
}>();
</script>

<template>

{{ buttonText }}

</template>


<style scoped></style>