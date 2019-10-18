<template src="./Frameworks.html" />
<style src="./Frameworks.scss" lang="scss" scoped></style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Frameworks extends Vue {
  @Prop({default: () => []}) items!: string[];
  allShown = false;

  created() {
    this.items.sort()
  }

  toggle() {
    this.allShown = !this.allShown;
  }
}
</script>