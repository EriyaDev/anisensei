<script setup>
import AboutImage from '@/assets/images/about.png'
</script>

<template>
  <section id="about" class="section-container">
    <div class="grid grid-cols-5 lg:grid-cols-10 gap-10">
      <div class="col-span-5 flex items-center">
        <div class="flex flex-col gap-3">
          <h1 class="title">About MyAnimeList</h1>
          <p class="text">
            MyAnimeList is a social networking site for anime and manga fans. It allows users to
            create and manage their own anime and manga lists, connect with other fans, and discover
            new titles.
          </p>
        </div>
      </div>
      <div class="col-span-5 h-full flex justify-end">
        <img :src="AboutImage" alt="" />
      </div>
    </div>
  </section>
</template>
