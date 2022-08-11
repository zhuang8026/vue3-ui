<!-- html -->
<template>
  <atd-input v-model="password" type="password" showPassword placeholder="請輸入密碼"></atd-input>
</template>

<!-- js -->
<script setup>
  import {ref} from 'vue'
  const password = ref('')
</script>