<template>
  <div></div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          id: 'aclib',
          src: '//acscdn.com/script/aclib.js',
          type: 'text/javascript',
          defer: true,
        },
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      if (typeof aclib !== 'undefined') {
        aclib.runPop({
          zoneId: '8750902',
        });
      }
    });
  },
  methods: {
    clearCookies() {
      const cookies = document.cookie.split(';');
      cookies.forEach((cookie) => {
        const eqPos = cookie.indexOf('=');
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
      });
    },
  },
  beforeRouteLeave(to, from, next) {
    console.log('Clearing cookies');
    this.clearCookies();
    next();
  },
};
</script>
