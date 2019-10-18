<template>
  <Frameworks :items="['React', 'Angular', 'Vue', 'Svelte', 'Bootstrap', 'Tailwind', 'Knockout', '.NET', 'Ruby-on-Rails']" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Frameworks from './components/Frameworks.vue';

@Component({
  components: {
    Frameworks,
  },
})
export default class App extends Vue {}
</script>