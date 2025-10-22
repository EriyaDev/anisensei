<script setup>
import axios from 'axios'
import { ref } from 'vue'

const recommendations = ref([])

axios
  .get('https://api.jikan.moe/v4/anime/1/recommendations')
  .then((response) => {
    recommendations.value = response.data.data.splice(0, 10)

    // console.log(recommendations.value)
  })
  .catch((error) => {
    console.error('Error fetching recommendations:', error)
  })
</script>

<template>
  <div id="recommendations" class="section-container">
    <div
      class="flex flex-col items-start lg:items-end gap-3 lg:flex-row lg:justify-between"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h1 class="medium-title lg:max-w-[40%]">Anime You’ll Actually Enjoy</h1>
      <p class="text w-full lg:max-w-[40%]">
        Get personalized recommendations based on your preferences. We help you discover titles that
        match your mood and favorite genres.
      </p>
    </div>
    <div class="swiper many-swiper">
      <div class="swiper-wrapper py-10">
        <div class="swiper-slide" v-for="anime in recommendations" :key="anime.mal_id">
          <div class="anime-card">
            <img
              class="h-72 aspect-[2/3] object-cover"
              :src="anime.entry.images.webp.image_url"
              alt=""
            />
            <div class="flex flex-col gap-1">
              <h1 class="small-title line-clamp-1">{{ anime.entry.title }}</h1>
              <div
                class="flex flex-row items-center gap-1 border border-black/50 px-2 py-1 rounded-sm w-fit"
              >
                <div class="text-violet-600 w-4 h-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M13.0001 7.82843V20H11.0001V7.82843L5.63614 13.1924L4.22192 11.7782L12.0001 4L19.7783 11.7782L18.3641 13.1924L13.0001 7.82843Z"
                    ></path>
                  </svg>
                </div>
                <p class="text-sm text-violet-600">{{ anime.votes }}</p>
              </div>
              <a target="_blank" :href="anime.url" class="button-primary">Open in MyAnimeList</a>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
