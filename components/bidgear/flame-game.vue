<template>
    <div>
      <div id="bg-ssp-9616"></div>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      const scriptPubbidgear = document.createElement('script');
      scriptPubbidgear.async = true;
      scriptPubbidgear.setAttribute('data-cfasync', 'false');
      scriptPubbidgear.src = 'https://platform.bidgear.com/pubbidgear-ad.js';
      document.head.appendChild(scriptPubbidgear);
  
      const bg_id = document.getElementById('bg-ssp-9616');
      bg_id.id = 'bg-ssp-9616-' + Math.floor(Math.random() * Date.now());
  
      window.pubbidgeartag = window.pubbidgeartag || [];
      window.pubbidgeartag.push({
        zoneid: 9616,
        id: bg_id.id,
        wu: window.location.href
      });
    }
  }
  </script>
  