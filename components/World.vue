<script lang="ts" setup>
  import { Motion } from "@motionone/vue";
</script>

<template>
  <section :class="styles.paddings" class="relative z-10">
    <Motion tag="div" :class="`${styles.innerWidth} mx-auto flex flex-col`">
      <TypingText title="| People on the World" textStyle="text-center" />
      <TitleText textStyle="text-center">
        Track friends around you and invite them to play together in the same
        world
      </TitleText>

      <Motion
        :initial="fadeIn.initial('up')"
        :in-view="fadeIn.inView('', 0.3, 1)"
        tag="div"
        class="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" class="w-full h-full object-cover" />

        <div
          class="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]"
        >
          <img src="/people-01.png" alt="people" class="w-full h-full" />
        </div>

        <div
          class="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]"
        >
          <img src="/people-02.png" alt="people" class="w-full h-full" />
        </div>

        <div
          class="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]"
        >
          <img src="/people-03.png" alt="people" class="w-full h-full" />
        </div>
      </Motion>
    </Motion>
  </section>
</template>
