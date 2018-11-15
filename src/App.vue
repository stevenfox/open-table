<template>
  <div id="app">
    <navbar-vue></navbar-vue>
    <div class="container">
      <menuList></menuList>
    </div>
    <footer-vue></footer-vue>
  </div>
</template>

<script>
require('./assets/main.css')
import 'bootstrap/dist/css/bootstrap.min.css'
import menuList from './components/menuList.vue'

export default {
  name: 'app',
  components: {
    menuList,
  }
}
</script>

