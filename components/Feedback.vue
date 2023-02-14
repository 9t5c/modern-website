<script lang="ts" setup>
  import { Motion } from "@motionone/vue";
</script>

<template>
  <section :class="styles.paddings">
    <Motion
      tag="div"
      :class="styles.innerWidth"
      class="mx-auto flex lg:flex-row flex-col gap-6"
    >
      <Motion
        :initial="fadeIn.initial('right')"
        :in-view="fadeIn.inView('', 0.2, 1)"
        tag="div"
        class="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div class="feedback-gradient" />

        <div>
          <h4
            class="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white"
          >
            Samantha
          </h4>
          <p
            class="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white"
          >
            Founder Metaverus
          </p>
        </div>

        <p
          class="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white"
        >
          “With the development of today's technology, metaverse is very useful
          for today's work, or can be called web 3.0. by using metaverse you can
          use it as anything”
        </p>
      </Motion>

      <Motion
        :initial="fadeIn.initial('left')"
        :in-view="fadeIn.inView('', 0.2, 1)"
        tag="div"
        class="relative flex-1 flex justify-center items-center"
      >
        <img
          src="/planet-09.png"
          alt="planet-09"
          class="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        <Motion
          :initial="zoomIn.initial"
          :in-view="zoomIn.inView(0.4, 1)"
          tag="div"
          class="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <img
            src="/stamp.png"
            alt="stamp"
            class="w-[155px] h-[155px] object-contain"
          />
        </Motion>
      </Motion>
    </Motion>
  </section>
</template>
