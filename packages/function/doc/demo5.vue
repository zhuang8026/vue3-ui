<!-- html -->
<template>
  <m-space>
    <atd-input v-model="value1"  placeholder="默认大小"></atd-input>
    <atd-input v-model="value2"  placeholder="小的" size="small"></atd-input>
    <atd-input v-model="value3"  placeholder="更小的" size="mini"></atd-input>
  </m-space>
</template>

<!-- js -->
<script setup>
  import { ref } from "vue";
  const value1 = ref('')
  const value2 = ref('')
  const value3 = ref('')
</script>