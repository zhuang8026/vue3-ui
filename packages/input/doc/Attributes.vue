<template>
  <m-table :options="options" size="small"></m-table>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  options:{
   fileds:[
      {field:'attr',title:'參數',align:'center'},
      {field:'type',title:'參數',align:'center'},
      {field:'red',title:'說明',align:'center',width:'350px'},
      {field:'sel',title:'可選值',align:'center'},
      {field:'def',title:'默認值',align:'center'}
    ],
    datas:[
      {attr:'v-model',type:'string / number',red:'input綁定值',sel:'——',def:"——"},
      {attr:'type',type:'string',red:'支持所有原生type值',sel:'——',def:"——"},
      {attr:'placeholder',type:'string',red:'輸入框佔位字符',sel:'——',def:"——"},
      {attr:'disabled',type:'Boolean',red:'是否禁用',sel:'true / false',def:"false"},
      {attr:'readonly',type:'Boolean',red:'原生屬性，是否只讀',sel:'true / false',def:"false"},
      {attr:'form',type:'String',red:'原生屬性，所屬表單',sel:'——',def:"——"},
      {attr:'clearable',type:'Boolean',red:'是否可清空',sel:'true / false',def:"false"},
      {attr:'showPassword',type:'Boolean',red:'是否顯示密碼查看圖標，需配合type為password類型一起使用',sel:'true / false',def:"false"},
      {attr:'size',type:'String',red:'尺寸大小',sel:'default / small / mini',def:"default"},
      {attr:'leftIcon / rightIcon',type:'String',red:'是否帶圖標，並確定圖標的位置',sel:'參考圖標庫',def:"——"},
      {attr:'autofocus',type:'Boolean',red:'是否自動獲取輸入框焦點',sel:'true / false',def:"false"},
      {attr:'focusColor',type:'String',red:'自定義Focus顏色的色值',sel:'——',def:"——"}
    ]
  }
})
const { options } = state
</script>

<style lang="scss" scoped>

</style>