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
    <div class="flex flex-col items-start lg:items-end gap-3 lg:flex-row lg:justify-between">
      <h1 class="medium-title lg:max-w-[40%]" data-aos="fade-up" data-aos-duration="1000">
        Anime You’ll Actually Enjoy
      </h1>
      <p
        class="text w-full lg:max-w-[40%]"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        Get personalized recommendations based on your preferences. We help you discover titles that
        match your mood and favorite genres.
      </p>
    </div>
    <!-- <div class="swiper many-swiper">
      <div class="swiper-wrapper py-10">
        <div
          class="swiper-slide"
          v-for="(anime, index) in recommendations"
          :key="anime.mal_id"
          data-aos="fade-up"
          data-aos-duration="1000"
          :data-aos-delay="index * 200"
        >
          <div class="anime-card">
            <div class="relative">
              <img
                class="h-72 aspect-[2/3] object-cover w-full"
                :src="anime.entry.images.webp.image_url"
                alt=""
              />
              <div
                class="absolute top-2 right-2 bg-black/50 px-2 py-1 rounded-sm flex flex-row items-center gap-2"
              >
                <i class="ri-thumb-up-fill text-blue-400"></i>
                <p class="text-sm font-medium text-white">{{ anime.votes }}</p>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <h1 class="small-title line-clamp-1">{{ anime.entry.title }}</h1>

              <a target="_blank" :href="anime.url" class="button-primary">See Details</a>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div> -->

    <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-2 lg:gap-x-5 gap-y-4 my-10">
      <div
        v-for="(anime, index) in recommendations"
        :key="anime.mal_id"
        data-aos="fade-up"
        data-aos-duration="1000"
        :data-aos-delay="index * 200"
        class="group"
      >
        <a :href="anime.url" class="group-hover:brightness-90 transition-all">
          <div class="relative rounded-md w-full">
            <img
              class="h-40 md:h-56 lg:h-72 object-cover w-full rounded-sm group-hover:brightness-90"
              :src="anime.entry.images.webp.image_url"
              alt=""
            />
            <div
              class="inset-0 rounded-sm bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 absolute"
            ></div>
            <div
              class="absolute top-0 right-0 bg-black/50 flex flex-row items-center gap-1 px-2 py-1 rounded-tr-sm !rounded-bl-md"
            >
              <i class="ri-thumb-up-fill text-blue-400"></i>
              <p class="text-xs md:text-sm lg:text-base font-medium text-white font-urbanist">
                {{ anime.votes ? anime.votes : '0' }}
              </p>
            </div>

            <!-- <p
              class="absolute bottom-0 left-0 px-2 py-1 text-xs md:text-sm lg:text-base font-medium text-white font-urbanist z-20"
            >
              Eps {{ anime.episodes ? anime.episodes : '-' }}
            </p> -->
          </div>
          <div class="flex flex-col">
            <div>
              <h1 class="small-title !text-sm md:!text-base lg:!text-lg font-medium line-clamp-1">
                {{ anime.entry.title }}
              </h1>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="flex w-full justify-center items-center">
      <a class="button-primary" href="https://rekomendasi-anime-generator.vercel.app/"
        >Found other Recommendations</a
      >
    </div>
  </div>
</template>
