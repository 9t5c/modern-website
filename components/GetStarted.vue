<script lang="ts" setup>
import { Motion } from 'motion/vue'
</script>

<template>
    <section :class="styles.paddings" class="relative z-10">
        <Motion tag="div" :class="styles.innerWidth" class="mx-auto flex lg:flex-row flex-col gap-8">
            <Motion :initial="planetVariants.initial('left')" :in-view="planetVariants.inView" tag="div"
                :class="styles.flexCenter" class="flex-1">
                <img src="/get-started.png" alt="get-started" class="w-[90%] h-[90%] object-contain" />
            </Motion>
            <Motion :initial="fadeIn.initial('left')" :in-view="fadeIn.inView('', 0.2, 1)" tag="div"
                class="flex-[0.75] flex justify-center flex-col">
                <TypingText title="| How Metaversus Works" />
                <TitleText>
                    Get started with just a few clicks
                </TitleText>
                <div class="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
                    <template v-for="(item, index) in startingFeatures" :key="item">
                        <StartSteps :number="`${index < 10 ? '0' : ''} ${index + 1}`" :text="item" />
                    </template>
                </div>
            </Motion>
        </Motion>
    </section>
</template>