<!-- html -->
<template>
  <atd-button @click="openLoading">自定義加載圖片</atd-button>
</template>

<!-- js -->
<script setup>
import Loading from '../index.js'; //此处为本地示例，请使用import { Loading } from "mzl-ui";
const openLoading = () => {
  Loading.show({
    text: '正在努力加載中...',
    img: 'https://cdn-icons-png.flaticon.com/512/135/135620.png'
  });
  setTimeout(() => {
    Loading.hide();
  }, 5000);
};
</script>
