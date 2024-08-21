<template>
  <div class="text-center">
    <h1 class="text-xl font-bold">{{ msg }}</h1>
  </div>
</template>

<script setup lang="ts">
defineProps<{ msg: string }>()
</script>