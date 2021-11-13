import { ref, onMounted } from 'vue'

export default function useAutoCount(startAt) {

  const count = ref(startAt)

  onMounted(() => {
    setInterval(() => count.value += 1, 1000)
  })

  return { count }
}