<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Say Hello Times: {{ count }}</h2>
    <button @click='sayHello'>hello</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class HelloVue extends Vue {
  msg: string = 'Vue + TypeSctipt'
  count: number = 0
  sayHello (): number {
    this.count++
    return this.count
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.hello {
    h1, h2 {
    font-weight: normal;
  }
  button {
    border-radius: 3px;
    border: 0;
    margin: 0;
    padding: 0;
    outline: 0;
    display: inline-block;
    padding: 6px 16px;
    text-align: center;
    font-size: 12px;
    cursor: pointer;
    transition: all .3s;
    font-weight: 200;
    position: relative;
    overflow: hidden;
    &.shadow {
        box-shadow: 0 2px 5px 0 #cccccc;
    }
  }
}
</style>

