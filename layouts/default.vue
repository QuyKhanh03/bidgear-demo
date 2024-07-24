<template>
  <main>
    <div style="margin-bottom: 50px;">
      <bidgear-flame-game />
    </div>
    <NuxtPage />
    <!--  -->
    <!-- <bidgear-pop /> -->
     <!-- <bidgear-async /> -->
     
    <!-- <bidgear-sticky /> -->
    <!--  -->
    <NuxtLoadingIndicator />
  </main>
</template>

<style>
body {
  background-color: black;
  color: white;
}

main {
  min-height: 100vh;
  max-width: 820px;
  width: 100%;
  padding: 0 0.5rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

aside {
  width: 100%;
  min-height: 380px;
  padding: 1rem;
  background: gray;
  border-radius: 1rem;
  margin: 1rem 0;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

nav a {
  margin: 0 0.5rem;
  text-decoration: none;
  color: black;
  font-weight: 900;
  font-size: 1.5rem;
  padding: 0.5rem 2rem;
  background-color: white;
  border-radius: 1rem;
}

nav a.router-link-exact-active {
  background-color: #0070f3;
}

nav a.router-link-exact-active:hover {
  color: white;
}

nav a:hover {
  color: #0070f3;
}

h1 {
  margin: 0;
  text-decoration: underline;
  text-transform: uppercase;
}
</style>
