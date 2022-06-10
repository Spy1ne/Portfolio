<template>
  <div class="about">
    <pf-header-pro/>
    <page-pro class="mt-16"/>
  </div>
</template>

<script>
import Vue from 'vue'
import PagePro from '../components/PagePro.vue'

export default Vue.extend({
  name: 'Home',

  components: {
    PagePro
  }
})
</script>
