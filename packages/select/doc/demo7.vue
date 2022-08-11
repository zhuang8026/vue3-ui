<!-- html -->
<template>
  <atd-select
    v-model="selVal"
    placeholder="請選擇"
    width="500px"
    height="60px"
    :options="selOptions"
  ></atd-select>
</template>

<!-- js -->
<script setup>
import { reactive, ref } from "vue";
const selVal = ref("meiguo");
const state = reactive({
  selOptions: [
    { label: "台灣", value: "taiwan" },
    { label: "美國", value: "meiguo" },
    { label: "加拿大", value: "jianada" },
    { label: "澳大利亞", value: "aodaliya" },
  ],
});
const { selOptions } = state;
</script>