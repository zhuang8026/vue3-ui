<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import Attributes from './Attributes.vue'
import preview from '@/components/preview.vue'
</script>

# Layout 佈局

#### 簡單的自適應頁面佈局

## 基本使用

#### Layout 基本使用，將每一行平均分為 24 列。

<br/>

<div class="componetnsBox">
  <demo1/>
</div>
<preview compName="layout" demoName="demo1"/>

## 位置偏移

#### 通過 _offset_ 設置偏移佔用指定的列數。

<br/>
<div class="componetnsBox">
  <demo2/>
</div>
<preview compName="layout" demoName="demo2"/>

## Attributes 參數

<Attributes/>
<br/>
