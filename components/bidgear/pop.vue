<template>
  <div>
    <div id="ad-container"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const script = document.createElement('script')
  script.id = 'aclib'
  script.type = 'text/javascript'
  script.src = '//acscdn.com/script/aclib.js'
  script.onload = () => {
    aclib.runPop({
      zoneId: '8470542',
    })
  }

  document.head.appendChild(script)
})
</script>



