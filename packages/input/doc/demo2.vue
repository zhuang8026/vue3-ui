<!-- html -->
<template>
  <atd-input v-model="value1" disabled placeholder="禁用狀態"></atd-input>
</template>

<!-- js -->
<script setup>
  import {ref} from 'vue'
  const value1 = ref('')
</script>