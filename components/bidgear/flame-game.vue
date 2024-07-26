<template>
    <div>
      <div id="bg-ssp-9505"></div>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      // Create and append the pubbidgear script
      // const scriptPubbidgear = document.createElement('script');
      // scriptPubbidgear.async = true;
      // scriptPubbidgear.setAttribute('data-cfasync', 'false');
      // scriptPubbidgear.src = 'https://platform.bidgear.com/pubbidgear-ad.js';
      // document.head.appendChild(scriptPubbidgear);
  
      const bg_id = document.getElementById('bg-ssp-9505');
      bg_id.id = 'bg-ssp-9505-' + Math.floor(Math.random() * Date.now());
  
      window.pubbidgeartag = window.pubbidgeartag || [];
      window.pubbidgeartag.push({
        zoneid: 9505,
        id: bg_id.id,
        wu: window.location.href
      });
    }
  }
  </script>
  