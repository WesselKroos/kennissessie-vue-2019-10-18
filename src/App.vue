<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ExampleComponent :frameworks="frameworks" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ExampleComponent from './components/ExampleComponent.vue';

@Component({
  components: {
    ExampleComponent,
  },
})
export default class App extends Vue {
  private frameworks: string[] = ['React', 'Angular', 'Vue', 'Svelte', 'Bootstrap', 'Tailwind', 'Knockout', '.NET', 'Ruby-on-Rails'];
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
