<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
    type: string;
    error: boolean;
    label: string;
    placeholder: string;
    required?: boolean;
    name: string;
    modelValue: string;
    variant?: 'input' | 'select' | 'textarea';
    options?: Array<{ label: string; value: string }>; // Only used if variant is 'select'
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
}>();

const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    emit('update:modelValue', target.value);
};
</script>

<template>
    <div class="mb-3">
        <label :for="name" class="label-text">
            {{ label }}
        </label>

        <component
            :is="variant === 'textarea' ? 'textarea' : variant === 'select' ? 'select' : 'input'"
            :type="variant === 'input' ? type : undefined"
            :id="name"
            :name="name"
            :placeholder="variant === 'input' ? placeholder : undefined"
            :required="required"
            :value="modelValue"
            @input="handleInput"
            :class="[
                'input-layout',
                error ? 'border-red-500 focus:border-red-500' : 'border-gray-300'
            ]"
        >
            <template v-if="variant === 'select'">
                <option value="" disabled selected>{{ placeholder }}</option>
                <option v-for="option in options" :key="option.value" :value="option.value">
                    {{ option.label }}
                </option>
            </template>
        </component>

        <p v-if="error" class="error-text">This field is required</p>
    </div>
</template>

<style scoped>
.input-layout {
    @apply bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500;
}

.error-text {
    @apply mt-1 text-sm text-red-600 dark:text-red-500;
}

.label-text {
    @apply block mb-2 text-sm font-medium text-gray-900 dark:text-white;
}
</style>
