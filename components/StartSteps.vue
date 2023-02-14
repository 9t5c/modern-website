<script lang="ts" setup>
defineProps<{ number: string, text: string }>()
</script>

<template>
    <div :class="styles.flexCenter" class="flex-row">
        <div :class="styles.flexCenter" class="w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]">
            <p class="font-bold text-[20px] text-white">{{ number }}</p>
        </div>
        <p class="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">{{ text }}</p>
    </div>
</template>