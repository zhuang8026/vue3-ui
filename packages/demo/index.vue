<template>
  <button :class="isClass" :style="styles">
    <i :class="isIconClass" v-if="leftIcon"></i>
    <span
      :style="{
        'margin-left':
          $slot['default'] == undefined ? '0px' : (leftIcon ? '4px' : '0px'),
        'margin-right':
          $slot['default'] == undefined ? '0px' : (rightIcon ? '4px' : '0px'),
      }"
    >
      <slot/>
    </span>
    <i :class="isIconClass" v-if="rightIcon"></i>
  </button>
</template>
<script>
export default {
  name: "atdDemo",
};
</script>
<script setup>
import { computed, useSlots } from "vue";
const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  disabled: Boolean,
  round: Boolean,
  size: {
    type: String,
    default: "default",
  },
  customColor: {
    type: String,
    default: "",
  },
  leftIcon: String,
  rightIcon: String,
  localing: Boolean,
});
const mBtnDeaultStyle = {
  background: props.customColor,
  border: props.customColor,
  color: "#fff",
};
const $slot = useSlots();

// return css className "[xxx, xxx]"
const isClass = computed(() => {
  return [
    // className 1: size
    props.size == "default"
      ? "atd-button"
      : props.size == "medium"
      ? "atd-button-medium"
      : props.size == "small"
      ? "atd-button-small"
      : props.size == "mini"
      ? "atd-button-mini"
      : "atd-button",
    // className 2: color
    props.type ? (props.disabled ? "" : `atd-button-${props.type}`) : "",
    // className 3: disabled
    props.disabled ? `atd-button-${props.type}-disabled` : "",
    // className 4: border-radius
    {
      "atd-button-round": props.round,
    },
  ];
});

// return css className "[xxx, xxx]"
const isIconClass = computed(() => {
  return [
    "iconfont",
    props.leftIcon || props.rightIcon,
    props.localing
      ? props.leftIcon == "m-icon-loading1" ||
        props.leftIcon == "m-icon-loading2" ||
        props.leftIcon == "m-icon-loading3" ||
        props.leftIcon == "m-icon-loading4" ||
        props.leftIcon == "m-icon-loading5" ||
        props.leftIcon == "m-icon-loading6" ||
        props.rightIcon == "m-icon-loading1" ||
        props.rightIcon == "m-icon-loading2" ||
        props.rightIcon == "m-icon-loading3" ||
        props.rightIcon == "m-icon-loading4" ||
        props.rightIcon == "m-icon-loading5" ||
        props.rightIcon == "m-icon-loading6"
        ? "atd-icon-loading"
        : ""
      : "",
  ];
});
const styles = computed(() => {
  return [
    props.customColor == ""
      ? {}
      : props.type == "default"
      ? {}
      : mBtnDeaultStyle,
  ];
});
</script>

<style>
</style>
<style scoped lang="scss">
  
</style>