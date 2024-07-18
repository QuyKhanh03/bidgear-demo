<template>
  <div>
    <div :id="containerId"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const containerId = 'bg_7135179332'
const cfasync = false
const scriptSrc = '//platform.bidgear.com/ads.php?domainid=7135&sizeid=17&zoneid=9332'

onMounted(() => {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = scriptSrc
  script.setAttribute('data-cfasync', cfasync.toString())
  document.head.appendChild(script)
})
</script>

<style scoped>
/* Thêm các kiểu dáng hoặc CSS tùy chỉnh cho component quảng cáo tại đây */
</style>
