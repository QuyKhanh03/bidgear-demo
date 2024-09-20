<template>
  <div>
    <div id="bg-ssp-9758"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.loadScripts()
      .then(() => {
        this.setupPubbidgearTag();
        this.refreshCookies();
      })
      .catch((error) => {
        console.error('Error loading scripts:', error);
      });
  },
  methods: {
    loadScripts() {
      return new Promise((resolve, reject) => {
        const scriptPubbidgear = document.createElement('script');
        scriptPubbidgear.async = true;
        scriptPubbidgear.setAttribute('data-cfasync', 'false');
        scriptPubbidgear.src = 'https://platform.bidgear.com/pubbidgear-ad.js';

        scriptPubbidgear.onload = () => {
          const script = document.createElement('script');
          script.src = '//acscdn.com/script/aclib.js';
          script.id = 'aclib';
          script.type = 'text/javascript';

          script.onload = resolve;
          script.onerror = reject;

          document.head.appendChild(script);
        };
        
        scriptPubbidgear.onerror = reject;

        document.head.appendChild(scriptPubbidgear);
      });
    },
    setupPubbidgearTag() {
      const bg_id = document.getElementById('bg-ssp-9758');
      bg_id.id = 'bg-ssp-9758-' + Math.floor(Math.random() * Date.now());

      window.pubbidgeartag = window.pubbidgeartag || [];
      window.pubbidgeartag.push({
        zoneid: 9758,
        id: bg_id.id,
        wu: window.location.href
      });
    },
    refreshCookies() {
      const cookies = document.cookie.split(';');

      const expires = "expires=Fri, 31 Dec 9999 23:59:59 GMT";

      cookies.forEach(cookie => {
        const [name, value] = cookie.split('=');
        if (name && value) {
          document.cookie = `${name.trim()}=${value.trim()}; ${expires}; path=/`;
        }
      });

      console.log('All cookies refreshed');
    }
  }
}
</script>
