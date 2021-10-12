<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import fetchCount from './services/fetchCount'

interface AppInfo {
  name: string,
  slogan: string
}

const count = ref<number | null>(null)

const appInfo: AppInfo = reactive({
  name: 'Counter',
  slogan: 'an app you can count on'
})

onMounted(() => {
	fetchCount((initialCount) => {
		count.value = initialCount
	})
})

</script>

<template>
  <div>
    <h1>{{ appInfo.name }}</h1>
    <h2>{{ appInfo.slogan }}</h2>
  </div>
	<p>{{ count }}</p>
</template>
