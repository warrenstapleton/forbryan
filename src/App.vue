<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <div class="app">

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/graph">Graph</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>

    <RouterView/>
  </div>
</template>

<style scoped>
.app {
  flex-direction: column;
}

</style>
