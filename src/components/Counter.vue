<script setup lang="ts">
import { ref, onMounted } from 'vue'
import fetchCount from '../services/fetchCount'

const count = ref<number | null>(null)

onMounted(() => {
  fetchCount((initialCount) => {
    count.value = initialCount
  })
})

function addCount(num: number) {
  if (count.value !== null) {
    count.value += num
  }
}

</script>

<template>
  <p>{{ count }}</p>
  <p>
    <button @click="addCount(1)">Add</button>
  </p>
</template>
