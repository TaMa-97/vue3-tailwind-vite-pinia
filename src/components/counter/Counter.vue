<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold">Counter: {{ count }}</h1>
    <button @click="increment" class="mt-4 px-4 py-2 bg-green text-white rounded">プラス</button>
    <button @click="decrement" class="mt-4 ml-2 px-4 py-2 bg-green text-white rounded">マイナス</button>
    <p class="mt-4">2倍テスト: {{ doubleCount }}</p>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../../store/counter'
import { computed } from 'vue'

const counterStore = useCounterStore()

const count = computed(() => counterStore.count)
const doubleCount = computed(() => counterStore.doubleCount)
const increment = counterStore.increment
const decrement = counterStore.decrement
</script>