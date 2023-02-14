<script lang="ts" setup>
import { Motion } from 'motion/vue'
defineProps<{ textStyle?: string }>()
</script>

<template>
    <Motion :initial="textVariant2.initial" :in-view="textVariant2.inView" tag="h2" :class="textStyle"
        class="mt-[8px] font-bold md:text-[64px] text-[40px] text-white">
        <slot />
    </Motion>
</template>