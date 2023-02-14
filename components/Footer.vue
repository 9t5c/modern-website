<script lang="ts" setup>
import { Motion } from 'motion/vue'
</script>

<template>
    <Motion :initial="footerVariants.initial" :in-view="footerVariants.inView" tag="footer" :class="styles.xPaddings"
        class="py-8 relative">
        <div className="footer-gradient" />

        <div :class="styles.innerWidth" class="mx-auto flex flex-col gap-8">
            <div className="flex items-center justify-between flex-wrap gap-5">
                <h4 class="font-bold md:text-[64px] text-[44px] text-white">
                    Enter the Metaverse
                </h4>

                <button type="button" class="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
                    <img src="/headset.svg" alt="headset" class="w-[24px] h-[24px] object-contain" />
                    <span class="font-normal text-[16px] text-white">
                        Enter Metaverse
                    </span>
                </button>
            </div>

            <div class="flex flex-col">
                <div class="mb-[50px] h-[2px] bg-white opacity-10" />

                <div class="flex items-center justify-between flex-wrap gap-4">
                    <h4 class="font-extrabold text-[24px] text-white">
                        METAVERUS
                    </h4>
                    <p class="font-normal text-[14px] text-white opacity-50">
                        Copyright © 2021 - 2022 Metaversus. All rights reserved.
                    </p>

                    <div class="flex gap-4">
                        <template v-for="(item) in socials" :key="item.name">
                            <img :src="item.url" :alt="item.name"
                                class="w-[24px] h-[24px] object-contain cursor-pointer" />
                        </template>

                    </div>
                </div>
            </div>

        </div>
    </Motion>
</template>