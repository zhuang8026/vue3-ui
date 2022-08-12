<script setup>
  import demo1 from './demo1.vue'
  import Attributes from './Attributes.vue'
  import options from './options.vue'
  import Events from './Events.vue'
  import preview from '@/components/preview.vue'
</script>

# <demo 名稱>

#### demo 使用方式與放置位置説明

<br/>

## 基本使用

#### demo 的基本使用

<br/>
<div class="componetnsBox">
  <demo1/>
</div>
<preview compName="button" demoName="demo1"/>

## 禁用狀態

#### 按鈕不可操作的狀態——通過 _disabled_ 屬性設置實現

<br/>
<div class="componetnsBox">
  <demo1/>
</div>
<preview compName="button" demoName="demo2"/>

<br/>
<div class="componetnsBox">
  <demo6/>
</div>
<preview compName="button" demoName="demo6"/>

## Attributes 參數

<Attributes/>
<br/>

## Attributes 參數

<options/>
<br/>

## Attributes 參數

<Events/>
<br/>
