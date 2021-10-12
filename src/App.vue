<script setup lang="ts">
import { reactive } from 'vue'
import Counter from './components/Counter.vue'

interface AppInfo {
  name: string,
  slogan: string
}

const appInfo: AppInfo = reactive({
  name: 'Counter',
  slogan: 'an app you can count on'
})

</script>

<template>
  <div>
    <h1>{{ appInfo.name }}</h1>
    <h2>{{ appInfo.slogan }}</h2>
  </div>
  <Counter 
    :limit="10"
  ></Counter>
</template>
