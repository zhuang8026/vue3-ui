<template>
  <m-table :options="options" size="small"></m-table>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  options:{
   fileds:[
      {field:'name',title:'事件名',align:'center'},
      {field:'red',title:'說明',align:'center',width:'350px'},
      {field:'attr',title:'回調參數',align:'center'},
      {field:'exm',title:'示例',align:'center',width:'350px'}
    ],
    datas:[
      {name:"focus",red:'input在獲取焦點時觸發',attr:'(event: Event)',exm:'focus=(e)=>{console.log(e.target.value)}'},
      {name:"blur",red:'input在失去焦點時觸發',attr:'(event: Event)',exm:'blur=(e)=>{console.log(e.target.value)}'},
      {name:"input",red:'input值變化時觸發',attr:'(value: string | number)',exm:'input=(e)=>{console.log(e)}'},
      {name:"change",red:'用戶獲得焦點並按下回車時觸發',attr:'(event: Event)',exm:'change=(e)=>{console.log(e.target.value)}'},
      {name:"clear",red:'可清空的input點擊清空按鈕時觸發',attr:'——',exm:'——'},
    ]
  }
})
const { options } = state
</script>

<style lang="scss" scoped>

</style>