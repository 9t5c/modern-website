<script lang="ts" setup>
import { Motion } from 'motion/vue'

const props = defineProps<{ title: string, textStyle?: string }>()

const textArray = computed(() => {
    return Array.from(props.title)
})

</script>

<template>
    <Motion tag="p" :initial="{}" :class="props.textStyle" class="font-normal text-[14px] text-secondary-white">
        <template v-for="(item, index) in textArray" :key="index">
            <Motion :initial="textContainer.initial" :in-view="textContainer.inView(index)" tag="span">
                {{ item === ' ' ? '\u00A0' : item }}
            </Motion>
        </template>
    </Motion>
</template>