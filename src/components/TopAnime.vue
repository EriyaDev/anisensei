<script setup>
import axios from 'axios'
import { ref } from 'vue'

const topAnime = ref([])

axios
  .get('https://api.jikan.moe/v4/top/anime')
  .then((response) => {
    topAnime.value = response.data.data.splice(0, 10)

    console.log(topAnime.value)
  })
  .catch((error) => {
    console.error('Error fetching topAnime:', error)
  })
</script>

<template>
  <div id="top" class="section-container">
    <div
      class="flex flex-col items-start lg:items-end gap-3 lg:flex-row lg:justify-between"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h1 class="medium-title lg:max-w-[40%]">Top 10 Must-Watch Anime</h1>
      <p class="text w-full lg:max-w-[40%]">
        Discover the most popular and highly rated anime right now. Our Top 10 list updates
        regularly, featuring titles loved by fans and praised by critics alike.
      </p>
    </div>
    <div class="swiper many-swiper">
      <div class="swiper-wrapper py-10">
        <div class="swiper-slide" v-for="anime in topAnime" :key="anime.mal_id">
          <div class="anime-card !h-[440px]">
            <div class="relative">
              <img
                class="h-72 aspect-[2/3] object-cover w-full"
                :src="anime.images.webp.image_url"
                alt=""
              />
              <div
                class="absolute top-2 right-2 bg-black/50 px-2 py-1 rounded-sm flex flex-row items-center gap-2"
              >
                <i class="ri-star-fill text-yellow-400"></i>
                <p class="text-sm font-medium text-white">{{ anime.score }}</p>
              </div>
            </div>
            <div class="flex flex-col justify-between h-full">
              <div class="flex flex-col">
                <h1 class="small-title line-clamp-1">{{ anime.title }}</h1>
                <p class="text opacity-70">{{ anime.year }}</p>
              </div>
              <a target="_blank" :href="anime.url" class="button-primary mt-3"
                >Open in MyAnimeList</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
