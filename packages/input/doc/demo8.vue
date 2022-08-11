<!-- html -->
<template>
  <atd-input v-model="value1" type="text" placeholder="自定義你喜歡的focus顔色(focusColor)" focusColor="red"></atd-input>
</template>

<!-- js -->
<script setup>
  import {ref} from 'vue'
  const value1 = ref('')
</script>