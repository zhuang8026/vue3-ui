<template>
  <m-space :size="[0, 60]">
    <m-badge :value="99" type="primary">
      <atd-button>默认</atd-button>
    </m-badge>
    <m-badge :value="100" type="success">
      <atd-button>成功</atd-button>
    </m-badge>
    <m-badge :value="10" type="warning">
      <atd-button>警告</atd-button>
    </m-badge>
    <m-badge :value="3" type="danger">
      <atd-button>危险</atd-button>
    </m-badge>
    <m-badge :value="3" type="info">
      <atd-button>危险</atd-button>
    </m-badge>
    <m-badge :value="50" isDot>
      <atd-button>小红点</atd-button>
    </m-badge>
  </m-space>
</template>
