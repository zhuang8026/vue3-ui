<template>
  <m-table :options="options" size="small"></m-table>
</template>

<script setup>
import { ref,reactive } from "vue";
  const state = reactive({
    options:{
     fileds:[
        {field:'attr',title:'參數',align:'center'},
        {field:'type',title:'類型',align:'center'},
        {field:'red',title:'說明',align:'center',width:'350px'},
        {field:'sel',title:'可選值',align:'center'},
        {field:'def',title:'默認值',align:'center'}
      ],
      datas:[
        {attr:'span',type:'number',red:'每行佔用列數',sel:'——',def:"24"},
        {attr:'offset',type:'number',red:'偏移指定列數',sel:'——',def:"——"}
      ]
    }
  })
  const { options } = state
</script>

<style lang="scss" scoped>

</style>