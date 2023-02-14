<script lang="ts" setup>
  import { Motion } from "@motionone/vue";
</script>

<template>
  <section :class="styles.paddings" class="relative z-10">
    <Motion tag="div" :class="styles.innerWidth" class="mx-auto flex flex-col">
      <TypingText title="| Insight" textStyle="text-center" />
      <TitleText textStyle="text-center">Insight about metaverse</TitleText>

      <div class="mt-[50px] flex flex-col gap-[30px]">
        <template v-for="(item, index) in insights" :key="item.title">
          <InsightCard
            :img-url="item.imgUrl"
            :index="index"
            :title="item.title"
            :subtitle="item.subtitle"
          />
        </template>
      </div>
    </Motion>
  </section>
</template>
