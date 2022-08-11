<template>
  <m-table :options="options"></m-table>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  options: {
    fileds: [
      { field: "attr", title: "参数", align: "center" },
      { field: "type", title: "类型", align: "center" },
      { field: "red", title: "说明", align: "center", width: "350px" },
      { field: "sel", title: "可选值", align: "center" },
      { field: "def", title: "默认值", align: "center" },
    ],
    datas: [
      {
        attr: "label",
        type: "String",
        red: "下拉框默認label展示字段名，自定義請使用 labelFiled 屬性重新關聯lable字段",
        sel: "——",
        def: "label",
      },
      {
        attr: "value",
        type: "String",
        red: "下拉框默認value選中值，自定義請使用 valueFiled 屬性重新關聯value字段",
        sel: "——",
        def: "value",
      },
      {
        attr: "disabled",
        type: "Boolean",
        red: "是否禁用選項",
        sel: "true / false",
        def: "false",
      },
    ],
  },
});

const { options } = state;
</script>

<style lang="scss" scoped>
</style>