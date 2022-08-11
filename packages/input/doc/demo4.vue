<!-- html -->
<template>
  <m-space>
    <atd-input v-model="value1" leftIcon="m-icon-search"></atd-input>
    <atd-input v-model="value2" rightIcon="m-icon-calendar"></atd-input>
  </m-space>
</template>

<!-- js -->
<script setup>
  import { ref } from "vue";
  const value1 = ref('')
  const value2 = ref('')
</script>