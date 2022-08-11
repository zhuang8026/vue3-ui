<!-- html -->
<template>
  <m-popover v-model="visible" trigger="manual" placement="top-start">
    <p>这是一段内容这是一段内容确定删除吗？</p>
    <div style="text-align: right; margin: 0">
      <atd-button size="mini" type="text" @click="visible = false">取消</atd-button>
      <atd-button type="primary" size="mini" @click="visible = false">确定</atd-button>
    </div>
    <template #reference>
      <atd-button size="medium" @click="handler">删除</atd-button>
    </template>
  </m-popover>
</template>
<script setup>
import { ref, reactive, getCurrentInstance, onMounted, computed } from 'vue';

const visible = ref(false);
function handler() {
  visible.value = !visible.value;
  console.log(visible.value);
}
</script>
