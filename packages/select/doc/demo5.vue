<!-- html -->
<template>
  <m-space>
    <atd-select
      v-model="selVal1"
      placeholder="默認大小"
      :options="selOptions"
    ></atd-select>
    <atd-select
      v-model="selVal1"
      placeholder="小的"
      :options="selOptions"
      size="small"
    ></atd-select>
    <atd-select
      v-model="selVal1"
      placeholder="非常小的"
      :options="selOptions"
      size="mini"
    ></atd-select>
  </m-space>
</template>

<!-- js -->
<script setup>
import { reactive, ref } from "vue";
const selVal1 = ref("");
const state = reactive({
  selOptions: [
    { label: "台灣", value: "taiwan" },
    { label: "美國", value: "meiguo " },
    { label: "加拿大", value: "jianada" },
    { label: "澳大利亞", value: "aodaliya" },
  ],
});
const { selOptions } = state;
</script>