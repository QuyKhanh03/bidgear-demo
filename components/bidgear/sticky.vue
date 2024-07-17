<template>
  <div id="bg-ssp-8011">
    <ClientOnly>
      <scriptx>
        var bg_id = document.getElementById('bg-ssp-8011'); bg_id.id =
        'bg-ssp-8011-' + Math.floor(Math.random() * Date.now());
        window.pubbidgeartag = window.pubbidgeartag || [];
        window.pubbidgeartag.push({zoneid: 8011, id: bg_id.id, wu:
        window.location.href})
      </scriptx>
    </ClientOnly>
  </div>
</template>
