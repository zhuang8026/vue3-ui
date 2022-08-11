<!-- html -->
<template>
  <atd-input v-model="value1" clearable>
    <template #btn>
      <atd-button type="primary" leftIcon="m-icon-search">搜索</atd-button>
    </template>
  </atd-input>
</template>

<!-- js -->
<script setup>
import { ref } from 'vue';
const value1 = ref('');
</script>
