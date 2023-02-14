<script lang="ts" setup>
import { Motion } from 'motion/vue'

defineProps<{
    id: string;
    imgUrl: string;
    title: string;
    index: number;
    active: string;
}>()

defineEmits<{
    (e: 'handleClick', id: string): void
}>()
</script>

<template>
    <Motion :initial="fadeIn.initial('right')" :in-view="fadeIn.inView('', index * 0.5, 0.75)" tag="div"
        :class="active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'"
        class="relative flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer"
        @click="$emit('handleClick', id)">

        <img :src="imgUrl" alt="planet-04" class="absolute w-full h-full object-cover rounded-[24px]" />

        <template v-if="active !== id">
            <h3
                class="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
                {{ title }}
            </h3>
        </template>
        <template v-else>
            <div class="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
                <div :class="styles.flexCenter" class="w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]">
                    <img src="/headset.svg" alt="headset" class="w-1/2 h-1/2 object-contain" />
                </div>
                <p class="font-normal text-[16px] leading-[20.16px] text-white uppercase">Enter Metaverse</p>
                <h2 class="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
                    {{ title }}
                </h2>
            </div>
        </template>
    </Motion>

</template>