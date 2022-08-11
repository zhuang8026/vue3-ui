<!-- html -->
<template>
  <m-space>
    <atd-button @click="openMsg">消息提示</atd-button>
    <atd-button @click="openVNodeMsg">消息提示(VNode)</atd-button>
  </m-space>
</template>

<!-- js -->
<script setup>
import Message from '../index.js'; //此处为本地示例，请使用import {Message} from "mzl-ui";引入
import { h } from 'vue';
const openMsg = () => {
  Message({
    text: '默认消息提示'
  });
};

const openVNodeMsg = () => {
  Message({
    text: h('p', null, '默认消息提示(VNode)')
  });
};
</script>
