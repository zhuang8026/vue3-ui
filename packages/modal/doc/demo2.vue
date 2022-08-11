<!-- html -->
<template>
  <atd-button @click="openModal">打开模态框</atd-button>
  <m-modal v-model="modalShow" title="模态框标题" align="center" width="30%">
    <template #content> 这是内容区域 </template>
    <template #footer>
      <atd-button size="small" style="margin-right: 15px" @click="modalShow = false">取消</atd-button>
      <atd-button type="primary" size="small" @click="modalShow = false">确认</atd-button>
    </template>
  </m-modal>
</template>

<!-- js -->
<script setup>
import { ref } from 'vue';
const modalShow = ref(false);
const openModal = () => {
  modalShow.value = true;
};
</script>
