<template>
	<div>
	  <p>{{ count }}</p>
	  <button @click="reset">Reset</button>
	</div>
</template>

<script setup lang="ts">
import useAutoCount from './composables/useAutoCount'

const { count } = useAutoCount(0)

function reset() {
  count.value = 0
}

</script>
