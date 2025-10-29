<script setup>
import axios from 'axios'
import { ref } from 'vue'

const search = ref('')
const searchResults = ref([])
const loading = ref(false)

// function old() {
//   document.addEventListener('DOMContentLoaded', function () {
//     const searchInput = document.getElementById('search')
//     console.log(searchResults.value)

//     searchInput.addEventListener('input', function () {
//       axios
//         .get('https://api.jikan.moe/v4/anime?q=' + search.value)
//         .then((response) => {
//           searchResults.value = response.data.data.slice(0, 10)
//           // searchResults.value.slice(0, 10)
//         })
//         .catch((error) => {
//           searchResults.value = 'Error while load data. error code:' + error
//         })
//     })
//   })
// }

function hitAPI() {
  console.log('api hit')
  axios
    .get('https://api.jikan.moe/v4/anime?q=' + search.value)
    .then((response) => {
      searchResults.value = response.data.data.slice(0, 10)
      // searchResults.value.slice(0, 10)
    })
    .catch((error) => {
      searchResults.value = 'Error while load data. error code:' + error
    })
}

async function asynchitAPI() {
  loading.value = true
  try {
    const res = await axios.get('https://api.jikan.moe/v4/anime?q=' + search.value)
    if (window.innerWidth <= 768) {
      searchResults.value = (await res).data.data.slice(0, 9)
    } else {
      searchResults.value = (await res).data.data.slice(0, 10)
    }
    console.log(searchResults)
  } catch (error) {
    console.error('Gagal ambil data:', error)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section id="search" class="section-container">
    <div
      class="flex flex-col items-start lg:items-end gap-3 lg:flex-row lg:justify-between"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h1 class="medium-title lg:max-w-[40%]">Find Any Anime, Instantly</h1>
      <p class="text w-full lg:max-w-[40%]">
        Can’t remember the title but recall the story? Use our powerful search feature to track down
        any anime, fast and easy.
      </p>
    </div>
    <form @submit.prevent="asynchitAPI" action="" class="w-full md:w-[70%] lg:w-[60%]">
      <div class="flex flex-row items-end gap-5 py-10 font-urbanist w-full">
        <div class="w-full">
          <!-- <label for="search">Search for an anime:</label> -->
          <input
            type="text"
            id="search"
            placeholder="Search for an anime..."
            class="input w-full"
            v-model="search"
          />
        </div>
        <button type="submit" class="button-primary">Search</button>
      </div>
    </form>

    <!-- <p>{{ search }}</p> -->
    <!-- <p>{{ loading ? '⏳ Lagi loading...' : 'Ambil Data' }}</p> -->

    <div class="flex justify-center items-center w-full">
      <div :class="loading ? 'block py-10' : 'hidden'">
        <!-- From Uiverse.io by mobinkakei -->
        <div id="wifi-loader">
          <svg class="circle-outer" viewBox="0 0 86 86">
            <circle class="back" cx="43" cy="43" r="40"></circle>
            <circle class="front" cx="43" cy="43" r="40"></circle>
            <circle class="new" cx="43" cy="43" r="40"></circle>
          </svg>
          <svg class="circle-middle" viewBox="0 0 60 60">
            <circle class="back" cx="30" cy="30" r="27"></circle>
            <circle class="front" cx="30" cy="30" r="27"></circle>
          </svg>
          <svg class="circle-inner" viewBox="0 0 34 34">
            <circle class="back" cx="17" cy="17" r="14"></circle>
            <circle class="front" cx="17" cy="17" r="14"></circle>
          </svg>
          <div class="text" data-text="Searching"></div>
        </div>
      </div>
    </div>

    <!-- <p>{{ searchResults }}</p> -->

    <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-2 gap-y-4">
      <div
        v-for="(anime, index) in searchResults"
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
              :src="anime.images.webp.image_url"
              alt=""
            />
            <div
              class="inset-0 rounded-sm bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 absolute"
            ></div>
            <div
              class="absolute top-0 right-0 bg-black/50 flex flex-row items-center gap-1 px-2 py-1 rounded-tr-sm !rounded-bl-md"
            >
              <i class="ri-star-fill text-yellow-400 text-xs md:text-sm lg:text-base"></i>
              <p class="text-xs md:text-sm lg:text-base font-medium text-white font-urbanist">
                {{ anime.score ? anime.score : '-' }}
              </p>
            </div>

            <p
              class="absolute bottom-0 left-0 px-2 py-1 text-xs md:text-sm lg:text-base font-medium text-white font-urbanist z-20"
            >
              Eps {{ anime.episodes ? anime.episodes : '-' }}
            </p>
          </div>
          <div class="flex flex-col">
            <div>
              <h1 class="small-title !text-sm md:!text-base font-medium line-clamp-1">
                {{ anime.title }}
              </h1>
              <p class="text !text-xs md:!text-sm line-clamp-1">{{ anime.title_japanese }}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
    <!-- <div class="swiper grid-swiper">
      <div class="swiper-wrapper py-10">
        <div
          class="swiper-slide"
          v-for="(anime, index) in searchResults"
          :key="anime.mal_id"
          data-aos="fade-up"
          data-aos-duration="1000"
          :data-aos-delay="index * 200"
        >
          <a :href="anime.url" class="">
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
            <div class="flex flex-col gap-1">
              <div>
                <h1 class="small-title line-clamp-1">{{ anime.title }}</h1>
                <p class="text !text-sm line-clamp-1">{{ anime.title_japanese }}</p>
              </div>
              <h1 class="small-title">{{ anime.score ? anime.score : '0' }}</h1>
              <a target="_blank" :href="anime.url" class="button-primary">See Details</a>
            </div>
          </a>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div> -->
  </section>
</template>

<style>
/* From Uiverse.io by mobinkakei */
#wifi-loader {
  --background: #62abff;
  --front-color: #4f29f0;
  --back-color: #c3c8de;
  --text-color: #414856;
  width: 64px;
  height: 64px;
  border-radius: 50px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

#wifi-loader svg {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}

#wifi-loader svg circle {
  position: absolute;
  fill: none;
  stroke-width: 6px;
  stroke-linecap: round;
  stroke-linejoin: round;
  transform: rotate(-100deg);
  transform-origin: center;
}

#wifi-loader svg circle.back {
  stroke: var(--back-color);
}

#wifi-loader svg circle.front {
  stroke: var(--front-color);
}

#wifi-loader svg.circle-outer {
  height: 86px;
  width: 86px;
}

#wifi-loader svg.circle-outer circle {
  stroke-dasharray: 62.75 188.25;
}

#wifi-loader svg.circle-outer circle.back {
  animation: circle-outer135 1.8s ease infinite 0.3s;
}

#wifi-loader svg.circle-outer circle.front {
  animation: circle-outer135 1.8s ease infinite 0.15s;
}

#wifi-loader svg.circle-middle {
  height: 60px;
  width: 60px;
}

#wifi-loader svg.circle-middle circle {
  stroke-dasharray: 42.5 127.5;
}

#wifi-loader svg.circle-middle circle.back {
  animation: circle-middle6123 1.8s ease infinite 0.25s;
}

#wifi-loader svg.circle-middle circle.front {
  animation: circle-middle6123 1.8s ease infinite 0.1s;
}

#wifi-loader svg.circle-inner {
  height: 34px;
  width: 34px;
}

#wifi-loader svg.circle-inner circle {
  stroke-dasharray: 22 66;
}

#wifi-loader svg.circle-inner circle.back {
  animation: circle-inner162 1.8s ease infinite 0.2s;
}

#wifi-loader svg.circle-inner circle.front {
  animation: circle-inner162 1.8s ease infinite 0.05s;
}

#wifi-loader .text {
  position: absolute;
  bottom: -40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: lowercase;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.2px;
}

#wifi-loader .text::before,
#wifi-loader .text::after {
  content: attr(data-text);
}

#wifi-loader .text::before {
  color: var(--text-color);
}

#wifi-loader .text::after {
  color: var(--front-color);
  animation: text-animation76 3.6s ease infinite;
  position: absolute;
  left: 0;
}

@keyframes circle-outer135 {
  0% {
    stroke-dashoffset: 25;
  }

  25% {
    stroke-dashoffset: 0;
  }

  65% {
    stroke-dashoffset: 301;
  }

  80% {
    stroke-dashoffset: 276;
  }

  100% {
    stroke-dashoffset: 276;
  }
}

@keyframes circle-middle6123 {
  0% {
    stroke-dashoffset: 17;
  }

  25% {
    stroke-dashoffset: 0;
  }

  65% {
    stroke-dashoffset: 204;
  }

  80% {
    stroke-dashoffset: 187;
  }

  100% {
    stroke-dashoffset: 187;
  }
}

@keyframes circle-inner162 {
  0% {
    stroke-dashoffset: 9;
  }

  25% {
    stroke-dashoffset: 0;
  }

  65% {
    stroke-dashoffset: 106;
  }

  80% {
    stroke-dashoffset: 97;
  }

  100% {
    stroke-dashoffset: 97;
  }
}

@keyframes text-animation76 {
  0% {
    clip-path: inset(0 100% 0 0);
  }

  50% {
    clip-path: inset(0);
  }

  100% {
    clip-path: inset(0 0 0 100%);
  }
}
</style>
