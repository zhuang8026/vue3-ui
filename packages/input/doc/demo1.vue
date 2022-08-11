<!-- html -->
<template>
  <atd-input v-model="value1" placeholder="基本使用"></atd-input>
</template>

<!-- js -->
<script setup>
  import {ref} from 'vue'
  const value1 = ref('')
</script>