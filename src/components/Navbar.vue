<script setup></script>

// Navbar.vue
<template>
  <nav
    class="w-full py-5 bg-gradient-to-b from-white to-transparent font-urbanist absolute top-0 left-0 right-0"
  >
    <div class="section-container !py-0 flex flex-row justify-between items-centers">
      <h1 class="logo text-2xl font-bold font-urbanist">
        Ani<span class="text-blue-600">Sensei</span>
      </h1>
      <ul class="flex flex-row gap-5 items-center">
        <li>
          <a class="text-black hover:text-blue-600 transition-all" href="#recommendations"
            >Recommendations</a
          >
        </li>
        <li>
          <a class="text-black hover:text-blue-600 transition-all" href="#search">Search</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
