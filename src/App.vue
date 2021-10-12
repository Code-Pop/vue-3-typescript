<script setup lang="ts">
import { ref, reactive } from 'vue'

const count = ref(0)

const appInfo = reactive({
  name: 'Counter',
  slogan: 'an app you can count on'
})

</script>

<template>
  <div>
    <h1>{{ appInfo.name }}</h1>
    <h2>{{ appInfo.slogan }}</h2>
  </div>
	<p>{{ count }}</p>
</template>
