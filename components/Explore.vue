<script lang="ts" setup>
import { Motion } from 'motion/vue'

const active = ref('world-2')
</script>

<template>
    <section :class="styles.paddings" id="explore">
        <Motion tag="div" :class="styles.innerWidth" class="mx-auto flex flex-col">
            <TypingText title="| The World" text-style="text-center" />
            <TitleText textStyle="text-center">
                Choose the world you want <br className="md:block hidden" /> to explore
            </TitleText>

            <div class="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
                <template v-for="(item, index) in exploreWorlds" :key="item.id">
                    <ExploreCard :id="item.id" :imgUrl="item.imgUrl" :title="item.title" :index="index" :active="active"
                        @handleClick="(id) => active = id" />
                </template>
            </div>
        </Motion>
    </section>
</template>