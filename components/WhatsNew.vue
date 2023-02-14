<script lang="ts" setup>
  import { Motion } from "@motionone/vue";
</script>

<template>
  <section :class="styles.paddings" class="relative z-10">
    <Motion
      tag="div"
      :class="styles.innerWidth"
      class="mx-auto flex lg:flex-row flex-col gap-8"
    >
      <Motion
        :initial="fadeIn.initial('right')"
        :in-view="fadeIn.inView('', 0.2, 1)"
        tag="div"
        class="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| Whats new?" />
        <TitleText> What's new about Metaversus? </TitleText>
        <div class="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          <template v-for="(item, index) in newFeatures" :key="item.title">
            <NewFeatures
              :img-url="item.imgUrl"
              :title="item.title"
              :subtitle="item.subtitle"
            />
          </template>
        </div>
      </Motion>

      <Motion
        :initial="planetVariants.initial('right')"
        :in-view="planetVariants.inView"
        tag="div"
        :class="styles.flexCenter"
        class="flex-1"
      >
        <img
          src="/whats-new.png"
          alt="get-started"
          class="w-[90%] h-[90%] object-contain"
        />
      </Motion>
    </Motion>
  </section>
</template>
