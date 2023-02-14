<script lang="ts" setup>
import { Motion } from 'motion/vue'
</script>

<template>
    <section :class="styles.yPaddings" class="sm:pl-16 pl-6">
        <Motion tag="div" :class="styles.innerWidth" class="mx-auto flex flex-col">
            <div class="flex justify-center items-center flex-col relative z-10">
                <Motion :initial="textVariant.initial" :in-view="textVariant.inView(1.1)" tag="h1"
                    :class="styles.heroHeading">Metaverse</Motion>
                <Motion :initial="textVariant.initial" :in-view="textVariant.inView(1.2)" tag="div"
                    class="flex flex-row justify-center items-center">
                    <h1 :class="styles.heroHeading">Ma</h1>
                    <div :class="styles.heroDText" />
                    <h1 :class="styles.heroHeading">Ness</h1>
                </Motion>
            </div>

            <Motion :initial="slideIn.initial('right')" :in-view="slideIn.inView('', 0.2, 1)" tag="div"
                class="relative w-full md:-mt-[20px] -mt-[12px]">
                <div class="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
                <img src="/cover.png" alt="hero_cover"
                    class="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative" />
                <a href="#explore">
                    <div class="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
                        <img src="/stamp.png" alt="stamp"
                            class="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain" />
                    </div>
                </a>
            </Motion>
        </Motion>
    </section>
</template>