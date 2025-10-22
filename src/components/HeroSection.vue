<script setup>
import { defineProps } from 'vue'
import HeroImage from '@/assets/images/hero.png'

defineProps({
  title: {
    type: String,
    default: `Explore Your <span class="text-violet-600">Favorite Anime</span> with My<span
            class="text-violet-600"
            >Anime</span
          >List`,
  },
})
</script>

<template>
  <section class="section-container">
    <div class="grid grid-cols-5 lg:grid-cols-10 gap-10 h-[70vh] lg:h-[90vh]">
      <div class="col-span-5 flex items-center">
        <div class="flex flex-col gap-3">
          <h1 class="title">
            Explore Your <span class="text-violet-600">Favorite Anime</span> with Ani<span
              class="text-violet-600"
              >Sensei</span
            >
          </h1>
          <p class="text">
            Explore a world of anime tailored to your taste. Whether you’re into action, romance, or
            mystery — find the perfect show for your next binge.
          </p>
          <div class="flex flex-row gap-2 items-center mt-3">
            <a
              href="#search"
              class="py-2.5 px-5 hover:bg-gray-900 transition-all rounded-full bg-black text-white font-urbanist"
            >
              Explore now
            </a>
            <a
              href="#recommendations"
              class="py-2.5 px-5 hover:brightness-95 transition-all rounded-full bg-white text-black border border-black font-urbanist"
            >
              Recommendations for You
            </a>
          </div>
        </div>
      </div>
      <div class="col-span-5 h-full hidden lg:flex justify-end">
        <img :src="HeroImage" alt="" class="h-screen object-contain" />
      </div>
    </div>
  </section>
</template>
