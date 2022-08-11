<!-- html -->
<template>
  <atd-select
    v-model="selVal"
    placeholder="请选择"
    :options="selOptions"
    @change="selchange"
  ></atd-select>
</template>

<!-- js -->
<script setup>
import { reactive, ref } from "vue";
const selVal = ref("jianada");
const state = reactive({
  selOptions: [
    { label: "台灣", value: "taiwan" },
    { label: "美國", value: "meiguo" },
    { label: "加拿大", value: "jianada" },
    { label: "澳大利亞", value: "aodaliya" },
  ],
});
const selchange = (item, index) => {
  // 当前选中的值及index
  console.log(item, index);
};
const { selOptions } = state;
</script>