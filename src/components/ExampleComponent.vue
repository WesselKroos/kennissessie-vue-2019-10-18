<template>
  <div>
    <ul class="list">
      <li class="list__item" v-for="framework in visibleFrameworks" :key="framework">{{framework}}</li>
    </ul>

    <button @click="showAllItems">
      <span v-if="allItemsShown">Toon eerste 5 items</span>
      <span v-if="!allItemsShown">Toon alle items</span>
    </button>
  </div>
</template>
<style src="./ExampleComponent.scss" lang="scss" scoped></style>
<script src="./ExampleComponent.ts" lang="ts"></script>