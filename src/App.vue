<template>
	<div>
	  <p>{{ count }}</p>
	  <button @click="reset">Reset</button>
	</div>
</template>

<script>
import useAutoCount from './composables/useAutoCount'

export default {
  name: 'App',
  setup() {
    const { count } = useAutoCount(0)

    function reset() {
      count.value = 0
    }

    return { count, reset }
  }
}
</script>
