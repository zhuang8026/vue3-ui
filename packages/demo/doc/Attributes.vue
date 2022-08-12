<template>
  <m-table :options="options"></m-table>
</template>

<script setup>
import {reactive} from 'vue'
const state = reactive({
  options:{
    fileds:[
      {
        field:'attr',
        title:'參數',
        align:'center'
      },
      {
        field:'type',
        title:'類型',
        align:'center'
      },
      {
        field:'red',
        title:'類型',
        align:'center',
        width:'350px'
      },
      {
        field:'sel',
        title:'可選值',
        align:'center'
      },
      {
        field:'def',
        title:'默認值',
        align:'center'
      }
    ],
    datas:[
      {attr:'type',type:'String',red:'按鈕類型',sel:'default / primary / success / danger / warning / dashed / text / custom',def:"default"},
      {attr:'size',type:'String',red:'按鈕尺寸',sel:'default / medium / small / mini',def:"default"},
      {attr:'round',type:'Boolean',red:'是否為圓角類型的按鈕',sel:'true / false',def:"false"},
      {attr:'disabled',type:'Boolean',red:'是否為禁用狀態的按鈕',sel:'true / false ',def:"false"},
      {attr:'customColor',type:'String',red:'type 為 custom 時自定義按鈕的顏色色值。需要注意的是type為default、dashed、text 類型的按鈕不支持',sel:'——',def:"——"},
      {attr:'loading',type:'Boolean',red:'是否為加載狀態的按鈕，加載狀態的icon僅支持這六個(m-icon-loading1 / m-icon-loading2 / m-icon-loading3 / m-icon-loading4 / m-icon-loading5 / m-icon-loading6)，通過leftIcon / rightIcon 參數配置並確定位置',sel:'true / false ',def:"false"},
      {attr:'leftIcon',type:'String',red:'決定按鈕類型為圖標按鈕，並且icon展示在左側',sel:'參考圖標庫',def:"——"},
      {attr:'rightIcon',type:'String',red:'決定按鈕類型為圖標按鈕，並且icon展示在右側',sel:'參考圖標庫',def:"——"}
    ]
  }
})
const {options} = state
</script>

<style lang="scss" scoped>

</style>