<template>
  <div>
    <div id="bg-ssp-9332"></div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          hid: 'pubbidgear',
          src: 'https://platform.bidgear.com/pubbidgear-ad.js',
          async: true,
          'data-cfasync': 'false',
          type: 'text/javascript'
        },
        
      ]
    };
  },
  mounted() {
    // Update the bg-ssp-9332 ID and set up pubbidgeartag
    const bg_id = document.getElementById('bg-ssp-9332');
    if (bg_id) {
      const uniqueId = 'bg-ssp-9332-' + Math.floor(Math.random() * Date.now());
      bg_id.id = uniqueId;

      window.pubbidgeartag = window.pubbidgeartag || [];
      window.pubbidgeartag.push({
        zoneid: 9332,
        id: uniqueId,
        wu: window.location.href
      });
    } else {
      console.error('Element with id bg-ssp-9332 not found');
    }
  }
}
</script>
