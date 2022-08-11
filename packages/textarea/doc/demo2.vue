<!-- html -->
<template>
  <atd-textarea
    v-model="textareaVal"
    placeholder="请输入内容"
    disabled
  ></atd-textarea>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
const textareaVal = ref("");
</script>