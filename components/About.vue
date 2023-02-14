<script lang="ts" setup>
  import { Motion } from "@motionone/vue";
</script>

<template>
  <section :class="styles.paddings" class="relative z-10">
    <div class="gradient-02 z-0" />

    <Motion
      tag="div"
      :class="`${styles.innerWidth} ${styles.flexCenter}`"
      class="mx-auto flex-col"
    >
      <TypingText title="| About Metaversus" text-style="text-center" />

      <Motion
        :initial="fadeIn.initial('up')"
        :in-view="fadeIn.inView('', 0.2, 1)"
        tag="p"
        class="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span class="font-extrabold text-white">Metaverse</span> is a new thing
        in the future, where you can enjoy the virtual world by feeling like
        it's really real, you can feel what you feel in this metaverse world,
        because this is really the {{ " " }}
        <span class="font-extrabold text-white"> madness of the metaverse </span
        >{{ " " }} of today, using only {{ " " }}
        <span class="font-extrabold text-white">VR</span> devices you can easily
        explore the metaverse world you want, turn your dreams into reality.
        Let's {{ " " }}
        <span class="font-extrabold text-white">explore</span> the madness of
        the metaverse by scrolling down
      </Motion>

      <Motion
        :initial="fadeIn.initial('up')"
        :in-view="fadeIn.inView('', 0.3, 1)"
        tag="img"
        src="/arrow-down.svg"
        alt="arrow down"
        class="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </Motion>
  </section>
</template>
