<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <div>
        <router-link to='/hello-vue'>HelloVue</router-link>
        <router-link to='/hello-typescript'>HelloTyscript</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class App extends Vue {
}
</script>

<style lang='less'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  img {
    margin-bottom: 10px;
  }
  div {
    margin-top: 20px;
  }
}
</style>
