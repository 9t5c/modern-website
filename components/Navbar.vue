<script lang="ts" setup>
import { Motion } from "motion/vue"
</script>

<template>
    <Motion tag="nav" :initial="navVariants.initial" :in-view="navVariants.inView" :class="styles.xPaddings"
        class="py-8 relative">
        <div class="absolute w-[50%] inset-0 gradient-01" />

        <div :class="styles.innerWidth" class="mx-auto flex justify-between gap-8">
            <img src="/search.svg" alt="search" class="w-[24px] h-[24px] object-contain" />
            <h2 class="font-extrabold text-[24px] leading-[30.24px] text-white">
                METAVERSUS
            </h2>
            <img src="/menu.svg" alt="menu" class="w-[24px] h-[24px] object-contain" />
        </div>
    </Motion>
</template>