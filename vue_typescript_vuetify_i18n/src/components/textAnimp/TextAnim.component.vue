<template>
    <div id="app">
    <typical
      :steps="['Hello', 1000, 'Hello world!', 500]"
      :wrapper="'h2'"
      :loop="Infinity"
    ></typical>
    <typical
      class="typicalWrapper"
      :steps="['zz',200,'👋',1000,
      ]"
      :loop="Infinity"
      :wrapper="'h3'"
    ></typical>
  </div>
</template>

<script>

import Vue from 'vue'
import typical from 'vue-typical'

export default Vue.extend({
  name: 'App',
  components: {
    typical
  }
})
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.typicalWrapper::after {
  content: "|";
  animation: blink 1s infinite step-start;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
