<script setup lang="ts">
import CommonButton from '@/components/Common/CommonButton/CommonButton.vue';
import { defineProps } from 'vue';

const props = defineProps<{
    modelShow: boolean;
    onClickClose?: () => void;
    onClick?: () => void;
    buttonText:string;
    loading:boolean;
}>();
</script>
<template>
    <div v-if="modelShow" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div
                    class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">

                        <slot />
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 gap-2">
                        <CommonButton :loading="loading" :onClick="onClick" :button-text="buttonText" />
                        <CommonButton :loading="false" :onClick="onClickClose" :close="true" button-text="Cancel" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
