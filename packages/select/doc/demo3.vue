<!-- html -->
<template>
  <atd-select
    v-model="selVal"
    placeholder="请选择"
    :options="selOptions"
  ></atd-select>
</template>

<!-- js -->
<script setup>
import { reactive, ref } from "vue";
const selVal = ref("");
const state = reactive({
  selOptions: [
    { label: "台灣", value: "taiwan" },
    { label: "美國", value: "meiguo", disabled: true },
    { label: "加拿大", value: "jianada" },
    { label: "澳大利亞", value: "aodaliya", disabled: true },
  ],
});
const { selOptions } = state;
</script>