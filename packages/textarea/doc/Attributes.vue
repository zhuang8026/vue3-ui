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
        type: "string / number",
        red: "textarea文本域綁定值",
        sel: "——",
        def: "——",
      },
      {
        attr: "placeholder",
        type: "string",
        red: "輸入框佔位字符",
        sel: "——",
        def: "——",
      },
      {
        attr: "disabled",
        type: "Boolean",
        red: "是否禁用",
        sel: "true / false",
        def: "false",
      },
      {
        attr: "form",
        type: "String",
        red: "原生屬性，所屬表單",
        sel: "——",
        def: "——",
      },
      {
        attr: "resize",
        type: "Boolean",
        red: "是否開啟拉伸",
        sel: "true / false",
        def: "true",
      },
      {
        attr: "rows",
        type: "Number",
        red: "textarea可見區域高度",
        sel: "——",
        def: "4",
      },
      {
        attr: "cols",
        type: "Number",
        red: "textarea可見區域寬度",
        sel: "——",
        def: "50",
      },
      {
        attr: "readonly",
        type: "Boolean",
        red: "原生屬性，是否只讀",
        sel: "true / false",
        def: "false",
      },
      {
        attr: "maxlength",
        type: "Number",
        red: "文本區域的最大字符數",
        sel: "——",
        def: "——",
      },
      {
        attr: "focusColor",
        type: "String",
        red: "自定義Focus顏色的色值",
        sel: "——",
        def: "——",
      },
      {
        attr: "customClass",
        type: "String",
        red: "自定義組件整體類名",
        sel: "——",
        def: "——",
      },
    ],
  },
});
const { options } = state;
</script>

<style lang="scss" scoped>
</style>