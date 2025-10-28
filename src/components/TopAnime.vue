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
    <div class="flex flex-col items-start lg:items-end gap-3 lg:flex-row lg:justify-between">
      <h1 class="medium-title lg:max-w-[40%]" data-aos="fade-up" data-aos-duration="1000">
        Top 10 Must-Watch Anime
      </h1>
      <p
        class="text w-full lg:max-w-[40%]"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        Discover the most popular and highly rated anime right now. Our Top 10 list updates
        regularly, featuring titles loved by fans and praised by critics alike.
      </p>
    </div>
    <div class="flex flex-col gap-4 lg:hidden mt-10">
      <div
        v-for="(anime, index) in topAnime"
        :key="anime.mal_id"
        class="hover:brightness-95 bg-[#fefefe] transition-all"
      >
        <a :href="anime.url" class="flex flex-row gap-3">
          <div class="relative rounded-md min-w-fit">
            <img
              class="h-48 aspect-[11_/_16] object-cover min-w-fit rounded-sm"
              :src="anime.images.webp.image_url"
              alt=""
            />
            <div
              class="inset-0 rounded-sm bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 absolute"
            ></div>
            <div
              class="absolute top-0 right-0 bg-black/50 flex flex-row items-center gap-1 px-2 py-1 rounded-tr-sm !rounded-bl-md"
            >
              <i class="ri-star-fill text-yellow-400"></i>
              <p class="text-sm font-medium text-white font-urbanist">{{ anime.score }}</p>
            </div>

            <p
              class="absolute bottom-0 left-0 px-2 py-1 text-sm font-medium text-white font-urbanist z-20"
            >
              Eps {{ anime.episodes }}
            </p>
          </div>
          <div class="flex flex-col w-full justify-between h-full">
            <div class="flex flex-col">
              <h1 class="small-title line-clamp-1">{{ anime.title }}</h1>
              <p class="text opacity-70">{{ anime.year }}</p>
              <p class="text line-clamp-3">{{ anime.synopsis }}</p>
            </div>
            <div class="flex flex-wrap gap-1 mt-7">
              <div class="badge" v-for="genre in anime.genres" :key="genre.mal_id">
                <span
                  class="p-1 rounded-sm bg-blue-500/20 font-urbanist border border-blue-500/60 text-blue-600"
                  >{{ genre.name }}</span
                >
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="w-full hidden lg:block">
      <div class="swiper many-swiper">
        <div class="swiper-wrapper py-10">
          <div
            class="swiper-slide"
            v-for="(anime, index) in topAnime"
            :key="anime.mal_id"
            data-aos="fade-up"
            data-aos-duration="1000"
            :data-aos-delay="index * 200"
          >
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
                <a target="_blank" :href="anime.url" class="button-primary mt-3">See Details</a>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>
