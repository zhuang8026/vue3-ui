<template>
  <m-table :options="options" size="small"></m-table>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  options: {
    fileds: [
      { field: "attr", title: "參數", align: "center" },
      { field: "type", title: "類型", align: "center" },
      { field: "red", title: "說明", align: "center", width: "350px" },
      { field: "sel", title: "可選值", align: "center" },
      { field: "def", title: "默認值", align: "center" },
    ],
    datas: [
      {
        attr: "v-model",
        type: "String || Array",
        red: "下拉框綁定值，開啟多選時類型為Array",
        sel: "——",
        def: "——",
      },
      {
        attr: "size",
        type: "String",
        red: "尺寸大小",
        sel: "default / small / mini",
        def: "default",
      },
      {
        attr: "placeholder",
        type: "String",
        red: "下拉框佔位字符",
        sel: "——",
        def: "——",
      },
      {
        attr: "options",
        type: "Array",
        red: "下拉框數據配置，具體見下方 options API",
        sel: "——",
        def: "[]",
      },
      {
        attr: "disabled",
        type: "Boolean",
        red: "是否為禁用狀態",
        sel: "true / false",
        def: "false",
      },
      {
        attr: "width",
        type: "String",
        red: "自定義寬度",
        sel: "——",
        def: "260px",
      },
      {
        attr: "height",
        type: "String",
        red: "自定義高度",
        sel: "——",
        def: "——",
      },
      {
        attr: "searchable",
        type: "Boolean",
        red: "是否開啟過濾搜索",
        sel: "true / false",
        def: "false",
      },
      {
        attr: "multiple",
        type: "Boolean",
        red: "是否開啟多選",
        sel: "true / false",
        def: "false",
      },
      {
        attr: "labelFiled",
        type: "String",
        red: "自定義替換lable的字段名",
        sel: "——",
        def: "label",
      },
      {
        attr: "valueFiled",
        type: "String",
        red: "自定義替換value的字段名",
        sel: "——",
        def: "value",
      },
    ],
  },
});
const { options } = state;
</script>

<style lang="scss" scoped>
</style>