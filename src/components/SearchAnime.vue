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
    searchResults.value = (await res).data.data
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
    <form @submit.prevent="asynchitAPI" action="">
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

    <div class="swiper grid-swiper">
      <div class="swiper-wrapper py-10">
        <div class="swiper-slide" v-for="anime in searchResults" :key="anime.mal_id">
          <div class="anime-card">
            <img class="h-72 aspect-[2/3] object-cover" :src="anime.images.webp.image_url" alt="" />
            <div class="flex flex-col gap-1">
              <div>
                <h1 class="small-title line-clamp-1">{{ anime.title }}</h1>
                <p class="text !text-sm line-clamp-1">{{ anime.title_japanese }}</p>
              </div>
              <h1 class="small-title">{{ anime.score ? anime.score : '0' }}</h1>
              <a target="_blank" :href="anime.url" class="button-primary">See Details</a>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
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
