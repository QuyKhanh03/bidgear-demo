<template>
  <div>
    <div id="bg-ssp-9332"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    // Create and append the pubbidgear script
    const scriptPubbidgear = document.createElement('script');
    scriptPubbidgear.async = true;
    scriptPubbidgear.setAttribute('data-cfasync', 'false');
    scriptPubbidgear.src = 'https://platform.bidgear.com/pubbidgear-ad.js';
    document.head.appendChild(scriptPubbidgear);

    // Create and append the aclib script
    const scriptAclib = document.createElement('script');
    scriptAclib.id = 'aclib';
    scriptAclib.type = 'text/javascript';
    scriptAclib.src = '//acscdn.com/script/aclib.js';
    document.head.appendChild(scriptAclib);

    // Update the bg-ssp-9332 ID and set up pubbidgeartag
    const bg_id = document.getElementById('bg-ssp-9332');
    bg_id.id = 'bg-ssp-9332-' + Math.floor(Math.random() * Date.now());

    window.pubbidgeartag = window.pubbidgeartag || [];
    window.pubbidgeartag.push({
      zoneid: 9332,
      id: bg_id.id,
      wu: window.location.href
    });
  }
}
</script>
