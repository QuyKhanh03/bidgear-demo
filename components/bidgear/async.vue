<template>
    <div>
      <div id="bg-ssp-9332"></div>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      const script = document.createElement('script');
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      script.src = 'https://platform.bidgear.com/pubbidgear-ad.js';
      document.head.appendChild(script);
  
      const bg_id = document.getElementById('bg-ssp-9332');
      bg_id.id = 'bg-ssp-9332-' + Math.floor(Math.random() * Date.now());
  
      window.pubbidgeartag = window.pubbidgeartag || [];
      window.pubbidgeartag.push({
        zoneid: 9332,
        id: bg_id.id,
        wu: window.location.href
      });
    }
  };
  </script>
  