<script setup>
import { defineProps } from 'vue'

defineProps({
  button: {
    type: String,
    default: 'Button',
  },
})
</script>

<template>
  <button class="bg-black p-2.5 rounded-full">{{ button }}</button>
</template>
